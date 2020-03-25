import { GET_ALL_HOTELS } from '../actions/hotelActions';

const hotelReducer = (state = {} , action) => {
  switch (action.type) {
    case GET_ALL_HOTELS:
      return { ...state, hotels: action.payload };

    default:
      return state;
  }

};

export default hotelReducer;