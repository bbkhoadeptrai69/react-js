import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  var redux = require('redux');
  

  var oldState = {
    num: [1, 2, 3],
    editStatus: true
  }

  var reducer1 = (state = oldState, action) => {
    switch (action.type) {
      case "CHANGE_EDIT_STATUS":
        return {...state,editStatus:!state.editStatus}
        break;
    
      default:
        break;
    }
    return state;
  }

  var store1 = redux.createStore(reducer1);
  console.log(store1.getState());
  store1.dispatch({type: "CHANGE_EDIT_STATUS"})
  console.log(store1.getState());
  return (
    <div>
      
    </div>
  );
}

export default App;
