import React from 'react'

import ColorViewer from '../containers/ColorViewer'

const App = React.createClass({
  render: () => {
    return (
      <div>
        <h1>Kuhluhs</h1>
        <ColorViewer />
      </div>
    )
  }
})

// const App = () => (
//   <div>
//     <h1>Kuhluhs</h1>
//     <ColorViewer />
//   </div>
// )

export default App
