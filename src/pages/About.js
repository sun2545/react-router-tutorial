import React from 'react';

const About =({match})=>{
    return(
        <div>
            <h2>introduce</h2>
            <p>
                Hello, I am {match.params.name}
                </p>
                </div>
    );
};

export default About;
