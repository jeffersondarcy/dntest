import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

const LanguageToggler = ({toggleLanguage, language}) => (
            <div className="lang-toggler"
                 onClick={() => toggleLanguage(language)}>
                {language}
            </div>
        );

const mapStateToProps = state => {
    return { language: state.language };
};

export default connect(mapStateToProps, actions)(LanguageToggler);