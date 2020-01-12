import React from 'react'

export const MapPath = (props) => {
    return (<path
        fill="#88a4bc"
        stroke="#fff"
        id={props.id}
        strokeLinejoin="round"
        strokeWidth="0.471"
        d={props.path}
        className={`sm_state_${props.id} ${props.selected ? 'active' : ''}`}
        cursor="pointer"
        transform="scale(.5)"
        onClick={props.onClick}
      ></path>)
  }
