/**
 * Import redux
 */
import { combineReducers } from 'redux';


/**
 * Import reducers
 */
import BooksReducer from './reducer_books';
import ActiveBookReducer from './reducer_active_book';

/**
 * combine reducers
 */
const rootReducer = combineReducers({
  activeBook: ActiveBookReducer,
  books: BooksReducer
});

export default rootReducer;
