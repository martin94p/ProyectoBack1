export const ADD_ASSET = "ADD_ASSET";
export const EDIT_ASSET = "EDIT_ASSET";
export const REMOVE_ASSET = "REMOVE_ASSET";
export const GET_ASSETS = "GET_ASSETS";



export const addAsset = (payload) => ({
  type: ADD_ASSET,
  payload,
});

export const editAsset = (payload) => ({
  type: EDIT_ASSET,
  payload,
});

export const removeAsset = (payload) => ({
  type: REMOVE_ASSET,
  payload,
});

export const getAssets = () => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:4000/api/v1/assets");
    const responseData = await response.json();
    

    dispatch({ type: GET_ASSETS, payload: responseData.data });
  } catch (error) {}
};
