import React from 'react';

const Post =({match})=>{
    return(
        <p>
            post #{match.params.id}
            </p>

    );
};

export default Post;