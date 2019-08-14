import React from 'react';
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
        return {...state,editStatus:!state.editStatus};
      case "ADD_NEW":
        return {...state, num: [...state.num, action.newItem]};  
      case "DELETE":
        return {...state, num: state.num.filter((value, i) => i !== action.index)};  
    
      default:
        return state;
    }
  }

  var store1 = redux.createStore(reducer1);
  store1.subscribe(() => console.log(store1.getState()))

  console.log(store1.getState());
  store1.dispatch({
    type: "CHANGE_EDIT_STATUS"
  })

  store1.dispatch({
    type: "ADD_NEW",
    newItem: 4
  })

  store1.dispatch({
    type: "DELETE",
    index: 0
  })

  return (
    <div>
      
    </div>
  );
}

export default App;
