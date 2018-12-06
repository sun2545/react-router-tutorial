import React from 'react';

const Home=({history})=>{
    return(
        <div>
            <h2>home</h2>
            <button onClick={()=>{
                history.push('/about/javascript')
            }}>move using javascript</button>
            </div>
    );
};

export default Home;
