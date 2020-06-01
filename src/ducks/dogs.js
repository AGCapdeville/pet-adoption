import { createAction, handleActions } from "redux-actions";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";


export const loadList = createAction('dogs/LOAD_LIST');

const initialDogsState = {}
// list of dog.list.imgs
// list of dog.list.breeds for those imgs

export default handleActions({
    [loadList]: (state, action) => state = action.payload,
}, initialDogsState);

const selectDogs = createSelector(
    state => state.dogs,
    dogs => dogs   
)

export const useDogs = () => useSelector(selectDogs);

