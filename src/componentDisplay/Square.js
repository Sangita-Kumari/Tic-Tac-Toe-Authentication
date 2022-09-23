import React from 'react'
import './DisplayGame.css'


    const Square = (props) => {
      const classes =  `${props.className} square`; 
      return (
          <span
               className={classes }
              onClick={() => props.onClick(props.index)}>
           {props.state}
          </span>
  )
}


export default Square