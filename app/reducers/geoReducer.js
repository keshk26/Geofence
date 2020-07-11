import {act} from 'react-test-renderer';

const initialState = {
  fence: {
    lat: '0.0',
    lng: '0.0',
  },
  radius: '2',
};

const geoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LATITUDE':
      console.log(action);
      return {...state, fence: {lng: state.fence.lng, lat: action.lat}};
    case 'SET_LONGITUDE':
      return {...state, fence: {lat: state.fence.lat, lng: action.lng}};
    case 'SET_RADIUS':
      return {...state, radius: action.radius};
    default:
      return state;
  }
};

export default geoReducer;
