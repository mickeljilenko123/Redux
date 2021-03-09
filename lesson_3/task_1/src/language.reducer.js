import { SET_LANGUAGE } from './language.actions'
const languageReducer = (state = '', action) => {
    switch (action.type) {
        case SET_LANGUAGE:
            return state + action.payload.language;
        default:
            return state;
    }
}
export default languageReducer;