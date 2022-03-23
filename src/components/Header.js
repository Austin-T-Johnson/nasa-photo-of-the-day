import React from 'react';


const Header = props => {

    return (
        <div className='header'>
            <h1>{props.headerTitle.title}</h1>
            <p>{props.date.date}</p>
        </div>

    )
}



export default Header;