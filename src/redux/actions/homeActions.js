import { SET_PDF_DATE } from '@redux/actionCreators/homeAC';

export const setPdfDate = (payload) => {
  return {
    type: SET_PDF_DATE,
    payload
  };
};