import {connect} from 'react-redux';
import _GeoView from '../components/GeoView';
import * as actions from '../actions/geoActions';
import {bindActionCreators} from 'redux';

const mapStateToProps = (state) => {
  return {
    geo: state.geo,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({...actions}, dispatch),
  };
};
export default GeoView = connect(mapStateToProps, mapDispatchToProps)(_GeoView);
