var redux = require('redux');

  var value = {
    a: 1000
  }
  const valueReducer = (state = value, action) => {
      switch (action.type) {
        case "CHANGE_VALUE":
            return {...state, a: action.newValue}
        default:
            return state
      }
  }

  var store1 = redux.createStore(valueReducer);
  store1.subscribe(() => {
    console.log(store1.getState());
  })

  export default store1