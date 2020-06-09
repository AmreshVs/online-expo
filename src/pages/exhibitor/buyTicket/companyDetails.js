import React from 'react';

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

const editorConfiguration = {
  plugins: [
    EssentialsPlugin, AutoformatPlugin, BoldPlugin, ItalicPlugin, BlockQuotePlugin, HeadingPlugin, ImagePlugin, ImageCaptionPlugin, ImageStylePlugin, ImageToolbarPlugin, ImageUploadPlugin, LinkPlugin, ListPlugin, ParagraphPlugin, UploadAdapterPlugin, Font, PageBreak, PasteFromOffice, SpecialCharacters, SpecialCharactersEssentials, Alignment, TodoList
  ],
  toolbar: [
    'heading', 'bold', 'italic', 'alignment', 'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor', 'pageBreak', 'link', 'bulletedList', 'numberedList', 'imageUpload', 'blockQuote', 'SpecialCharacters', 'todoList', 'undo', 'redo',
  ],
  image: {
    toolbar: [
      'imageStyle:full',
      'imageStyle:side',
      '|',
      'imageTextAlternative'
    ]
  }
};

const CompanyDetails = (props) => {
  return (
    <div className="p-3">
      <div className="form-group">
        <label htmlFor="logoUpload">Upload Logo</label>
        <input id="logoUpload" type="file" className="form-control p-1" />
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
      <button className="btn btn-primary" onClick={props.handleNext}>Next</button>
    </div>
  )
}

export default CompanyDetails;