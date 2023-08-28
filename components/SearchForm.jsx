'use client'; // This is a client component
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const SearchForm = (props) => {
    const previousItemsState = useRef(props.itemsState);
    useEffect(() => {
        const { itemsState } = props;
        if (previousItemsState.current != itemsState && itemsState.ended) {
            if (!itemsState.isError) {
                console.log(itemsState.data);
            } else {
                //onError();
            }
        }
        previousItemsState.current = itemsState;
    }, [props.itemsState]);

    const render = () => {
        const { itemsState } = props;
        return (
            itemsState?.data && (
                <div>Search Form</div>
            )
        )
    };
    
    return props.itemsState?.data ? render() : null;
}
export default connect((state) => {
    return {
      itemsState: state.items.get("itemsState"),
    };
}, null)(SearchForm);