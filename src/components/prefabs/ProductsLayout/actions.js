import { Axios } from '../../../helpers';
export const LOAD_PRODUCTS_START = 'LOAD_PRODUCTS_START';
export const LOAD_PRODUCTS_SUCCESS = 'LOAD_PRODUCTS_SUCCESS';
export const LOAD_PRODUCTS_FAIL = 'LOAD_PRODUCTS_FAIL';

export const load = (coords = null) => {
  let body = {};
  if (coords) {
    const { latitude, longitude } = coords;
    body = {
      lat: latitude,
      lng: longitude,
    };
  }

  return async (dispatch) => {
    const axios = Axios.getInstance();
    try {
      dispatch(loadStart());
      const resp = await axios.post('deal/search', body);
      dispatch(loadSuccess({ payload: resp.data }));
      console.log(resp);
    } catch (e) {
      console.log(e);
      dispatch(loadFail());
    }
  };
};

const loadStart = () => ({
  type: LOAD_PRODUCTS_START,
});
const loadSuccess = ({ payload }) => ({
  type: LOAD_PRODUCTS_SUCCESS,
  payload,
});
const loadFail = () => ({
  type: LOAD_PRODUCTS_FAIL,
});
