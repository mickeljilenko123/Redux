import React from 'react'
import ThemedButton from './ThemedButton'
import { themes, ThemedContext  } from './themes-context'

class App extends React.Component {
    state = {
        theme: themes.dark,
    };

    toggleTheme = () => {
       const newTheme = this.state.theme === themes.dark
        ? themes.light
        : themes.dark

        this.setState ({
            theme: newTheme
        })
    };
   render () {
       return(
           <div>
                  <ThemedContext.Provider value={this.state.theme}>
                    <ThemedButton onClick = {this.toggleTheme}>Dinamic Theme</ThemedButton>
               </ThemedContext.Provider>
               <ThemedButton onClick = {this.toggleTheme}>Default Theme</ThemedButton>
           </div>
       )
   }
} 
export default App;