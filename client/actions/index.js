import request from 'superagent'

export const UPDATE_COLOR = 'UPDATE_COLOR'
export const REQUESTING_COLOR = 'REQUESTING_COLOR'
export const FAILED_COLOR_REQ = 'FAILED_COLOR_REQ'
export const POSTING_COLOR = 'POSTING_COLOR'
export const COLOR_POSTED = 'COLOR_POSTED'
export const FAILED_COLOR_POST = 'FAILED_COLOR_POST'

export const getNewColor = () => {
  return dispatch => {
    dispatch(requestingColor())
    console.log('getting new color')
    const target = `http://localhost:3000/color`

    request.get(target, (err, data) => {
      if (err) {
        console.error(err)
        return dispatch(colourReqFailed(err.message))
      }

      const color = JSON.parse(data.text).name
      console.log('color:', color)

      return dispatch(receivingColor(color))
    })
  }
}

export const addColor = color => {
  return dispatch => {
    dispatch(postingColor())
    console.log('posting new color')
    const target = `http://localhost:3000/color`

    request.post(target)
      .send({color})
      .end((err, response) => {
        const body = response.body
        if (err) {
          console.error(err)
          return dispatch(colorPostFail(err.message))
        } else {
          console.log(body.message)
          return dispatch(colorPosted(color))
        }
      })
  }
}

export const postingColor = () => {
  return {
    type: POSTING_COLOR
  }
}

export const colorPosted = color => {
  return {
    type: COLOR_POSTED,
    color: color
  }
}

export const colorPostFail = () => {
  return {
    type: FAILED_COLOR_POST
  }
}

export const requestingColor = () => {
  return {
    type: REQUESTING_COLOR
  }
}

export const receivingColor = color => {
  return {
    type: UPDATE_COLOR,
    color
  }
}

export const colourReqFailed = message => {
  return {
    type: FAILED_COLOR_REQ,
    message
  }
}
