import React from 'react';

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
                { locations.map((element, index) => <option key={index} value={index}>{element}</option>)}
            </select>
        </div>
    );
};

const Positions = () => {
    const openPositions = [
        ['SEO M...', 'Munich'],
        ['Junior PM', 'Munich'],
        ['Praktikant', 'London']
    ];

    return (
        <div>
            <div>
                <div className="leftCol bold-text">Position</div>
                <div className="rightCol bold-text">Location</div>
                <hr />
            </div>
            { openPositions.map((element, index) => (
                        <div key={index} >
                            <div className="leftCol">{element[0]}</div>
                            <div className="rightCol">{element[1]}</div>
                            <hr />
                        </div>
                )
            ) }
        </div>
    )
};

const Content = () => (
    <div>
        <CareersText/>
        <LocationSelector/>
        <Positions/>
    </div>
);

export default Content;