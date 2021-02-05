import React from 'react'
import { ThemeContext } from './themes-context'

class ThemedButton extends React.Component {
  render() {
      return(
          console.log(this.context),
          <button {...this.props} 
          style = {{
              backgroundColor: this.context.background,
              color: this.context.fontColor

          }} 
          className='btn'></button>
      )
  }
}

ThemedButton.contextType = ThemeContext
export default ThemedButton;