import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserData } from './users.gateway';
import * as userActions from './users.actions';
class SearchField extends Component {
    state = {
        userName: '',
    }
    onChange = (event) => {
      this.setState({
          userName: event.target.value,
      })
    };
    handleUserSearch = () => {
        // Когда мы законектили то оно попадает в пропс
      this.props.fetchUserData(this.state.userName);
    //   getUserData(this.state.userName)
    //   .then(userData => {
    //       this.props.userDataRecieved(userData)
    //   });

    }
   render() {
       return(
        <div className="name-form">
            <input type="text" 
              className="name-form__input" 
              value={this.state.userName}
              onChange={this.onChange}
            />
           <button className="name-form__btn btn" onClick={this.handleUserSearch}>Show</button>
        </div>
       )
   }
} 

const mapDispatch = {
    fetchUserData: userActions.fetchUserData,
}

const conector = connect(null, mapDispatch);
export default conector(SearchField);