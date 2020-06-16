import React, { useRef, useState } from 'react';

import ImageUploadAdapter from 'common/imageUploadAdapter';
import UseAxios from 'hooks/UseAxios';
import { COMPANY_DETAILS, STALL_DETAIL } from 'api';
import { snackBarError } from 'common/snackBar';
import Button from 'components/button';
import Loader from 'components/loader';

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

const EditStall = (props) => {
  
  let userData = localStorage.getItem('userData');
  userData = JSON.parse(userData);
  let token = userData.access_token;

  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState('');
  const logo = useRef(null);
  const cover = useRef(null);
  const company_name = useRef(null);
  const desc = useRef(null);
  const web = useRef(null);
  const meet_id = useRef(null);
  const zoom_id = useRef(null);
  const whatsapp = useRef(null);
  const fb_live = useRef(null);
  const youtube = useRef(null);

  const [state, setState] = React.useState({
    loading: true,
    data: [],
  });

  React.useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setState({ ...state, loading: true });
    const response = await UseAxios(STALL_DETAIL);
    setContent(response.data.content);
    setState({ ...state, data: response.data, loading: false });
  }

  const validate = () => {

    if(logo.current.files[0] === undefined){
      snackBarError('Logo cannot be empty!');
      return false;
    }

    if(cover.current.files[0] === ''){
      snackBarError('Cover cannot be empty!');
      return false;
    }

    if(company_name.current.value === ''){
      snackBarError('Company name cannot be empty!');
      return false;
    }

    if(desc.current.value === ''){
      snackBarError('Description cannot be empty!');
      return false;
    }

    if(content === ''){
      snackBarError('Content cannot be empty!');
      return false;
    }

    return true;
  }
  
  const handleNext = async () => {
    if(validate()){
      setLoading(true);
      let formData = new FormData();
      formData.set('event_key', props.ekey);
      formData.set('company_name', company_name.current.value);
      formData.set('website', web.current.value);
      formData.set('meet_id', meet_id.current.value);
      formData.set('zoom_id', zoom_id.current.value);
      formData.set('whatsapp_number', whatsapp.current.value);
      formData.set('fb_url', fb_live.current.value);
      formData.set('youtupe_link', youtube.current.value);
      formData.set('company_desc', content);
      formData.set('logo_image_path', logo.current.files[0]);
      formData.set('cover_image_path', cover.current.files[0]);
      formData.set('short_desc', desc.current.value);
      const response = await UseAxios(COMPANY_DETAILS, formData);
      setLoading(false);
      props.handleNext(response.ticket_id);
    }
  }

  return (
    state.loading === true ?
    <Loader />
    :
    <div className="card p-3 shadow-sm">
      <div className="form-group">
        <img src={state.data.logo} alt="company-logo" />
      </div>
      <div className="form-group">
        <label htmlFor="logoUpload">Update Logo (50 x 50)</label>
        <input id="logoUpload" type="file" accept="image/*" className="form-control p-1" ref={logo} />
      </div>
      <div className="form-group">
        <img src={state.data.cover} alt="company-cover" />
      </div>
      <div className="form-group">
        <label htmlFor="logoUpload">Update Company Cover Image (1920 x 1080)</label>
        <input id="logoUpload" type="file" accept="image/*" className="form-control p-1" ref={cover} />
      </div>
      <div className="form-group">
        <label htmlFor="companyname">Company Name</label>
        <input id="companyname" type="text" className="form-control" value={state.data.company_name} ref={company_name} />
      </div>
      <div className="form-group">
        <label htmlFor="description">Short Description</label>
        <input id="description" type="text" className="form-control" value={state.data.description} ref={desc} />
      </div>
      <div className="form-group">
        <CKEditor
          editor={ClassicEditor}
          config={editorConfiguration}
          data=""
          onInit={editor => {
            editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
              return new ImageUploadAdapter(loader, token);
            };
          }}
          onChange={(event, editor) => {
            setContent(editor.getData());
          }}
        />
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="Webpage">Webpage</label>
            <input id="Webpage" type="text" className="form-control" value={state.data.web} ref={web} />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="meetId">Meet ID</label>
            <input id="meetId" type="text" className="form-control" value={state.data.meet_id} ref={meet_id} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="zoomId">Zoom ID</label>
            <input id="zoomId" type="text" className="form-control" value={state.data.zoom_id} ref={zoom_id} />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="whatsapp">Whatsapp Number</label>
            <input id="whatsapp" type="text" className="form-control" value={state.data.whatsapp} ref={whatsapp} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="facebookLive">Facebook Live</label>
            <input id="facebookLive" type="text" className="form-control" value={state.data.fb} ref={fb_live} />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="youtubeLink">Youtube</label>
            <input id="youtubeLink" type="text" className="form-control" value={state.data.youtube} ref={youtube} />
          </div>
        </div>
      </div>
      <div className="text-right">
      <Button className="btn btn-primary" onClick={handleNext} loading={loading} >
        Next
      </Button>
      </div>
    </div>
  )
}

export default EditStall;