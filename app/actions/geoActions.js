export const setLatitude = (lat) => (getState, dispatch) => {
  dispatch({
    type: 'SET_LATITUDE',
    lat,
  });
};

export const setLongitude = (long) => (getState, dispatch) => {
  dispatch({
    type: 'SET_LATITUDE',
    long,
  });
};

export const setRadius = (radius) => (getState, dispatch) => {
  dispatch({
    type: 'SET_LATITUDE',
    radius,
  });
};
