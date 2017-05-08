import React, { PropTypes } from 'react';

const CareersText = () => (
    <div>
        <h1>Careers</h1>
        <div>lorem ipsum ...</div>
    </div>
);

const LocationSelector = () => {
    const locations = ['Munich', 'Hamburg', 'Berlin'];
    return (
        <div>
            <h2>Current openings</h2>
            <select>
                { locations.map((element, index) => <option value={index}>{element}</option>)}
            </select>
        </div>
    );
};

const Content = () => (
    <div>
        <CareersText/>
        <LocationSelector/>
    </div>
);

export default Content;