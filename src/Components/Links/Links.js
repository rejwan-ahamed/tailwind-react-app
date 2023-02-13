import React from 'react';

const Links = ({routs}) => {
    console.log(routs)
    return (
        <div >
            <li className='m-4'><a href={routs.path}>{routs.name}</a></li>
        </div>
    );
};

export default Links;