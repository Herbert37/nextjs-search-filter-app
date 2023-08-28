import axiosRequest from 'js/request/items';

export const GET_ITEMS_START = 'GET_ITEMS_START';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_ERROR = 'GET_ITEMS_ERROR';

function getItemsStart() {
    return {
      type: GET_ITEMS_START,
    };
}
  
function getItemsSuccess(data) {
    return {
        type: GET_ITEMS_SUCCESS,
        data,
    };
}

function getItemsError(error) {
    return {
        type: GET_ITEMS_ERROR,
        error
    };
}

export function getItemsAsync() {
    const GENERAL_ERROR = {
        status: 500,
        message: 'The service is unavailable temporary'
    };
    let statusReq;
    return function(dispatch) {
      dispatch(getItemsStart());
      axiosRequest.getItemsAsync()
        .then(response => {
          statusReq = response.status;
          if (statusReq == 200) {
            return response.data;
          } else {
            dispatch(getItemsError(GENERAL_ERROR));
          }
          return false;
        })
        .then(response => {
          if(statusReq == 200){
            dispatch(getItemsSuccess({
                status: statusReq,
                ...response
            }));
          } else {
            dispatch(getItemsError(GENERAL_ERROR));
          }
        })
        .catch(() => {
          dispatch(getItemsError(GENERAL_ERROR));
        });
    };
}