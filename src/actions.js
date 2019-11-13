import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
}
     from './constants.js'

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text                     // ładunek, to co dostajemy
})

// With a plain basic Redux store, you can only do simple synchronous updates by dispatching an action. Middleware extend the store's abilities,
//  and let you write async logic that interacts with the store. Thunk is a function, which wraps an expression to delay this evalution.
//  like this let foo = () => 1 + 2;  to get async call, We are using it below:

export const requestRobots = () => (dispatch) => {            // dispatch action(akcja przesyłkowa, na przykład fetch)
    dispatch ({type: REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users') // method for making request
        .then(response=> response.json())                    // converting response to json file
        .then(users => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: users}))  
        .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}))
}