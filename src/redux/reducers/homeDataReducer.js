import { SET_PDF_DATE } from '@redux/actionCreators/homeAC';

const initialState = {
  pdfDate: {}
};

const HomeDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PDF_DATE:
      return { ...state, pdfDate: action.payload };
    default:
      return state;
  }
};

export default HomeDataReducer;