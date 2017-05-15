import {combineReducers} from 'redux';
import LanguageSelectionReducer from './LanguageSelectionReducer'

export default combineReducers({
    language: LanguageSelectionReducer
})