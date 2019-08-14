var redux = require('redux');

  var oldState = {
    num: [],
    editStatus: false
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

  const numInitialState = [1, 2, 3]
  const numReducer = (state = numInitialState, action) => {
      switch (action.type) {
        case "ADD_NEW":
            return [...state, action.newItem];  
        case "DELETE":
            return state.filter((value, i) => i !== action.index);
        default:
            return state
      }
  }


  const editStatusInitialState = false;
  const editStatusReducer = (state = editStatusInitialState, action) => {
      switch (action.type) {
        case "CHANGE_EDIT_STATUS":
            return !state;
        default:
            return state
      }
  }

  var allReducer = redux.combineReducers({
      num: numReducer,
      editStatus: editStatusReducer
  })

  var store1 = redux.createStore(allReducer);
  store1.subscribe(() => console.log(store1.getState()))

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

  store1.dispatch({
    type: "CHANGE_EDIT_STATUS"
  })

  export default store1