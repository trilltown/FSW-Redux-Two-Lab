import React from 'react'
import { connect } from 'react-redux';
import { SET_VISIBILITY_FILTER } from '../store/actionTypes'

const TodosVisibilityButtons = (props) => {
  const handleButton = (e) => {
    const filter = e.target.name;
    props.setVisibilityFilter(filter)
  }

  return (
    <div>
      <button onClick={handleButton} name="all">All</button>
      <button onClick={handleButton} name="completed">Completed</button>
      <button onClick={handleButton} name="active">Active</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    visibilityFilter: state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setVisibilityFilter: (filter) => dispatch({
      type: SET_VISIBILITY_FILTER,
      payload: filter
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosVisibilityButtons)
