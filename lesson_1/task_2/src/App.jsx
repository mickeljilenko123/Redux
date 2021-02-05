import React from 'react'
import Header from './Header'
import { users } from './user-context'

class App extends React.Component {
         state = {
             userData: users.user1
         }
    render() {
        return (
            <div className="page">
              <Header />  
            </div>
        )
    }
}
export default App;