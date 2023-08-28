'use client'; // This is a client component
import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { getItemsAsync } from 'js/api/items';

GetItems.propTypes = {
  dispatch: PropTypes.func
}

function GetItems(props){
  useEffect(() => {
    const { dispatch } = props;
    dispatch(getItemsAsync());
  },[]);  
  return null;
}

export default connect()(GetItems);