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
        <div className="content-box">
            <h2 className="header">Current openings</h2>
            <select className="select-city">
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
            <div className="jobs-table">
                <div>
                    <div className="leftCol bold-text">Position</div>
                    <div className="rightCol bold-text">Location</div>
                </div>
                <hr />
            </div>
            { openPositions.map((element, index) => (
                    <div key={index} className="jobs-table">
                        <div>
                            <div className="leftCol">{element[0]}</div>
                            <div className="rightCol">{element[1]}</div>
                        </div>
                        <hr />
                    </div>
                )
            ) }
        </div>
    )
};

const Content = () => (
    <div>
        <CareersText className="flex-container"/>
        <LocationSelector className="flex-container"/>
        <div className="linebreake"/>
        <Positions className="flex-container"/>
    </div>
);

export default Content;