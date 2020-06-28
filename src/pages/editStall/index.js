import React, { useRef, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import ImageUploadAdapter from 'common/imageUploadAdapter';
import UseAxios from 'hooks/UseAxios';
import { UPDATE_STALL_DETAIL, STALL_DETAIL } from 'api';
import { snackBarError } from 'common/snackBar';
import Button from 'components/button';
import Loader from 'components/loader';
import { ADMIN_URL } from '../../constants';

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
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
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
    EssentialsPlugin, AutoformatPlugin, BoldPlugin, ItalicPlugin, BlockQuotePlugin, HeadingPlugin, ImagePlugin, ImageCaptionPlugin, ImageStylePlugin, ImageToolbarPlugin, ImageUploadPlugin, ImageStyle, ImageResize, LinkPlugin, ListPlugin, ParagraphPlugin, UploadAdapterPlugin, Font, PageBreak, PasteFromOffice, SpecialCharacters, SpecialCharactersEssentials, Alignment, TodoList, MediaEmbed, Table, TableToolbar, TableProperties, TableCellProperties
  ],
  toolbar: [
    'heading', 'bold', 'italic', 'alignment', 'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor', 'pageBreak', 'link', 'bulletedList', 'numberedList', 'imageUpload', 'blockQuote', 'SpecialCharacters', 'todoList', 'undo', 'redo', 'mediaEmbed', 'insertTable',
  ],
  image: {
    toolbar: [ 'imageTextAlternative', '|', 'imageStyle:alignLeft', 'imageStyle:full', 'imageStyle:alignRight' ],
    styles: [
      'full',
      'alignLeft',
      'alignRight'
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
  
  let { access_token } = JSON.parse(localStorage.getItem('userData'));
  let location = useLocation();
  let history = useHistory();
  let key = location.state.key;

  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState('');
  const [logoImg, setLogoImg] = useState('');
  const [coverImg, setCoverImg] = useState('');
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
    const response = await UseAxios({ ...STALL_DETAIL, url: STALL_DETAIL.url + key });
    setState({ ...state, data: response.data, loading: false });
    setContent(response.data.company_desc);
    setCoverImg(ADMIN_URL + '/' + response.data.cover_image_path);
    setLogoImg(ADMIN_URL + '/' + response.data.logo_image_path);
  }

  let data = state.data;

  const validate = () => {

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

    return ValidateSize(logo.current, 'Logo') && ValidateSize(cover.current, 'Cover');
  }

  function ValidateSize(file, name) {
    var FileSize = file.files[0].size / 1024 / 1024; // in MB
    if (FileSize > 1) {
      snackBarError(name + ' File size exceeds 1 MB');
      return false;
    } else {
      return true;
    }
  }
  
  const handleUpdate = async () => {
    if(validate()){
      setLoading(true);
      let formData = new FormData();
      formData.set('ticket_key', key);
      formData.set('company_name', company_name.current.value);
      formData.set('website', web.current.value);
      formData.set('meet_id', meet_id.current.value);
      formData.set('zoom_id', zoom_id.current.value);
      formData.set('whatsapp_number', whatsapp.current.value);
      formData.set('fb_url', fb_live.current.value);
      formData.set('youtupe_link', youtube.current.value);
      formData.set('company_desc', content);
      if(logo.current.files[0] !== undefined){
        formData.set('logo_image_path', logo.current.files[0] !== undefined ? logo.current.files[0] : '');
      }
      if(cover.current.files[0] !== undefined){
        formData.set('cover_image_path', cover.current.files[0] !== undefined ? cover.current.files[0] : '');
      }
      formData.set('short_desc', desc.current.value);
      await UseAxios(UPDATE_STALL_DETAIL, formData);
      setLoading(false);
      history.goBack();
    }
  }

  return (
    state.loading === true ?
    <Loader />
    :
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-lg-9">
          <div className="card p-3 mt-3 mb-3 shadow-sm">
            <div className="form-group">
              <img className="stall-logo" src={logoImg} alt="company-logo" />
            </div>
            <div className="form-group">
              <label htmlFor="logoUpload">Update Logo (50 x 50) - 1 MB Max</label>
              <input id="logoUpload" type="file" accept="image/*" className="form-control p-1" ref={logo} onChange={() => logo.current.files[0] !== undefined ? setLogoImg(URL.createObjectURL(logo.current.files[0])) : setLogoImg('')} />
            </div>
            <div className="form-group">
              <img src={coverImg} alt="company-cover" />
            </div>
            <div className="form-group">
              <label htmlFor="logoUpload">Update Company Cover Image (1920 x 1080) - 1 MB Max</label>
              <input id="logoUpload" type="file" accept="image/*" className="form-control p-1" ref={cover} onChange={() => cover.current.files[0] !== undefined ? setCoverImg(URL.createObjectURL(cover.current.files[0])) : setCoverImg('')} />
            </div>
            <div className="form-group">
              <label htmlFor="companyname">Company Name</label>
              <input id="companyname" type="text" className="form-control" defaultValue={data.company_name} ref={company_name} />
            </div>
            <div className="form-group">
              <label htmlFor="description">Short Description</label>
              <input id="description" type="text" className="form-control" defaultValue={data.short_desc} ref={desc} />
            </div>
            <div className="form-group">
              <CKEditor
                editor={ClassicEditor}
                config={editorConfiguration}
                data={data.company_desc}
                onInit={editor => {
                  editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
                    return new ImageUploadAdapter(loader, access_token);
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
                  <label htmlFor="Website">Website</label>
                  <input id="Webpage" type="text" className="form-control" defaultValue={data.website} ref={web} />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="meetId">Google Meet ID</label>
                  <input id="meetId" type="text" className="form-control" defaultValue={data.meet_id} ref={meet_id} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="zoomId">Zoom ID</label>
                  <input id="zoomId" type="text" className="form-control" defaultValue={data.zoom_id} ref={zoom_id} />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="whatsapp">Whatsapp Number</label>
                  <input id="whatsapp" type="text" className="form-control" defaultValue={data.whatsapp_number} ref={whatsapp} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="facebookLive">Facebook Live</label>
                  <input id="facebookLive" type="text" className="form-control" defaultValue={data.fb_url} ref={fb_live} />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="youtubeLink">Youtube</label>
                  <input id="youtubeLink" type="text" className="form-control" defaultValue={data.youtupe_link} ref={youtube} />
                </div>
              </div>
            </div>
            <div className="text-right">
            <Button className="btn btn-primary" onClick={handleUpdate} loading={loading} >
              Update
            </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditStall;