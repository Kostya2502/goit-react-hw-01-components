// import React from 'react'

import Profile from './profile/Profile';
import user from './profile/user.json';

import Statistics from "./statistics/Statistics";
import statisticalData from "./statistics/statistical-data.json"


const App = () => {
    return (
        <>
            <Profile
                name={user.name} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats}
            />,
            <Statistics title="Upload stats" stats={statisticalData} />,
            <Statistics stats={statisticalData} />,
        </>
    );
};

export default App;

