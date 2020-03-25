
export const GET_ALL_HOTELS = 'GET_ALL_HOTELS';


export const getAllHotels = () => {
  return dispatch => {
    dispatch({
      type: GET_ALL_HOTELS,
      payload: []
    })
  }
}