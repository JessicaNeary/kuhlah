import React from 'react'

import ErrorMessage from './ErrorMessage'
import ColorPicker from './ColorPicker'

const ColorLoading = (
  <div>
    <h2>Loading duh kuhluh ...</h2>
    <div>
      <img src='/getting-color.gif' className='swatch' />
    </div>
  </div>
)



const Color = props => {

  // const ErrorMessage = (
  //   <div>
  //     <h2>Oh no! Something went wrong ...</h2>
  //     <h4>{props.errorMessage}</h4>
  //   </div>
  // )

  const ColorLoaded = (
    <div>
      <h2 style={{color: props.color}}>{props.color}</h2>
      <div className='swatch' style={{backgroundColor: props.color}} />
    </div>
  )

  const specifier = props.color ? 'uhnuhthuh' : 'uh'
  const linkText = props.gettingNewColor ? '' : `Get ${specifier} kuhluh`

  return (
    <div className='color'>
      {props.errorMessage ? <ErrorMessage message={props.errorMessage}/> : null}
      <p>
        <a href='#' onClick={() => {
          props.getNewColor()
        }}>{linkText}</a>
      </p>
      {props.gettingNewColor ? ColorLoading : ColorLoaded}
      <ColorPicker onPostColor={props.postNewColor}/>
    </div>
  )
}



export default Color
