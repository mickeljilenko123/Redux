import React from 'react'
import { ThemedContext } from './themes-context'

class ThemedButton extends React.Component {
  render() {
      return(
          console.log(this.context),
          <button {...this.props} 
          style = {{
              background: this.context.background,
              color: this.context.fontColor

          }} 
          className='btn'></button>
      )
  }
}

ThemedButton.contextType = ThemedContext
export default ThemedButton;