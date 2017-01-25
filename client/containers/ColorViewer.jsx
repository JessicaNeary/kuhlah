import { connect } from 'react-redux'

import { getNewColor, addColor } from '../actions'
import Color from '../components/Color'

const mapStateToProps = state => {
  return {
    color: state.color,
    gettingNewColor: state.gettingNewColor,
    errorMessage: state.errorMessage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getNewColor: () => { dispatch(getNewColor()) },
    postNewColor: color => { dispatch(addColor(color)) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Color)
