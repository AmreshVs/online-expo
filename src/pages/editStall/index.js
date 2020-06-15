import React from 'react';
import { useHistory } from 'react-router-dom';

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import Font from '@ckeditor/ckeditor5-font/src/font';
import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapterPlugin from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import AutoformatPlugin from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuotePlugin from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import HeadingPlugin from '@ckeditor/ckeditor5-heading/src/heading';
import ImagePlugin from '@ckeditor/ckeditor5-image/src/image';
import ImageCaptionPlugin from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStylePlugin from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbarPlugin from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUploadPlugin from '@ckeditor/ckeditor5-image/src/imageupload';
import LinkPlugin from '@ckeditor/ckeditor5-link/src/link';
import ListPlugin from '@ckeditor/ckeditor5-list/src/list';
import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';

const editorConfiguration = {
  plugins: [
    EssentialsPlugin, AutoformatPlugin, BoldPlugin, ItalicPlugin, BlockQuotePlugin, HeadingPlugin, ImagePlugin, ImageCaptionPlugin, ImageStylePlugin, ImageToolbarPlugin, ImageUploadPlugin, LinkPlugin, ListPlugin, ParagraphPlugin, UploadAdapterPlugin, Font, PageBreak, PasteFromOffice, SpecialCharacters, SpecialCharactersEssentials, Alignment, TodoList, MediaEmbed, Table, TableToolbar, TableProperties, TableCellProperties
  ],
  toolbar: [
    'heading', 'bold', 'italic', 'alignment', 'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor', 'pageBreak', 'link', 'bulletedList', 'numberedList', 'imageUpload', 'blockQuote', 'SpecialCharacters', 'todoList', 'undo', 'redo', 'mediaEmbed', 'insertTable'
  ],
  image: {
    toolbar: [
      'imageStyle:full',
      'imageStyle:side',
      '|',
      'imageTextAlternative'
    ]
  },
  table: {
    contentToolbar: [
      'tableColumn', 'tableRow', 'mergeTableCells',
      'tableProperties', 'tableCellProperties'
    ],
  }
};

const EditStall = () => {

  const history = useHistory();

  const handleUpdate = () => {
    history.goBack();
  }

  return (
    <div className="stallDetail">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-lg-9 pt-3 pb-3">
            <div className="mb-2">
              <div className="card p-3 shadow-sm">
                <div className="form-group">
                  <label htmlFor="logoUpload">Logo (50 x 50)</label>
                  <input id="logoUpload" type="file" accept="image/*" className="form-control p-1" />
                </div>
                <div className="form-group">
                  <label htmlFor="logoUpload">Company Cover Image (1920 x 1080)</label>
                  <input id="logoUpload" type="file" accept="image/*" className="form-control p-1" />
                </div>
                <div className="form-group">
                  <label htmlFor="companyname">Company Name</label>
                  <input id="companyname" type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <CKEditor
                    editor={ClassicEditor}
                    config={editorConfiguration}
                    data=""
                    onInit={editor => {
                      editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
                        // return new ImageUploadAdapter(loader, props.userData.token);
                      };
                    }}
                    onChange={(event, editor) => {
                      // setContent(editor.getData());
                    }}
                  />
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="Webpage">Webpage</label>
                      <input id="Webpage" type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="meetId">Meet ID</label>
                      <input id="meetId" type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="zoomId">Zoom ID</label>
                      <input id="zoomId" type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="whatsapp">Whatsapp Number</label>
                      <input id="whatsapp" type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="facebookLive">Facebook Live</label>
                      <input id="facebookLive" type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="youtubeLink">Youtube Link</label>
                      <input id="youtubeLink" type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <button className="btn btn-primary" onClick={handleUpdate}>Update</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditStall;