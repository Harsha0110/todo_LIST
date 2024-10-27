import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import todoReducers from './actions/reducers/todoReducers';

const reducer = combineReducers({
    todos: todoReducers
});

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware)) // Spread the middleware array why??
    //In Redux, when you apply middleware using 
    //applyMiddleware, the function expects each
    // middleware as a separate argument,
     //not as an array. 
    //This is why you need to spread the 
    //middleware array. The spread operator (...) effectively converts the array of middleware into a list of arguments, which is what applyMiddleware expects.
);

export default store;
