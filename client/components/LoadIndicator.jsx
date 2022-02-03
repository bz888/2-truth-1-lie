import React from 'react'
import { connect } from 'react-redux'
import LoadAnim from './LoadAnim'

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
