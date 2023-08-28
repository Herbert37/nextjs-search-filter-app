import { Map } from 'immutable';
import {
    GET_ITEMS_START,
    GET_ITEMS_SUCCESS,
    GET_ITEMS_ERROR
} from 'js/api/items';

const initialState = Map({
    // Items Redux state
    itemsState: {
      ended: false,
      isError: false,
      matchedError: false,
      data: null,
    },
});

const responseMap = {
    [GET_ITEMS_START]: (state) => {
        return state.merge(
            Map({
                itemsState: {
                ended: false,
                isError: false,
                data: null,
                },
            })
        );
    },
    [GET_ITEMS_SUCCESS]: (state, response) => {
        return state.merge(
            Map({
                itemsState: {
                    ended: true,
                    isError: false,
                    data: response.data,
                },
            })
        );
    },
    [GET_ITEMS_ERROR]: (state, response) => {
        return state.merge(
            Map({
                itemsState: {
                    ended: true,
                    isError: true,
                    data: response.error,
                },
            })
        );
    },
};

export default function reducer(state = initialState, response = {}) {
    const reduxState = responseMap[response.type];
    return reduxState ? reduxState(state, response) : state;
}