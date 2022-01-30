import React from 'react'
import { connect } from 'react-redux'
import LoadAnim from './LoadingAnim'

function LoadIndicator (props) {
  return props.waiting
    ? <LoadAnim/>
    : null
}

function mapStateToProps (state) {
  return {
    waiting: state.waiting
  }
}

export default connect(mapStateToProps)(LoadIndicator)
