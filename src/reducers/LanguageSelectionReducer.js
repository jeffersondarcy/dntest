const toggleLanguage = (language) => {
    return (language === 'de') ? 'en' : 'de';
};

export default (state = 'de', action) => {
    switch (action.type) {
        case 'toggle_language':
            return toggleLanguage(action.payload);
        default:
            return state;
    }
}