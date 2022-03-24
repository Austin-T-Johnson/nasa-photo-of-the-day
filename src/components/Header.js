import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
font-family: Nasalization;
color: white;
`
const StyledH2 = styled.h2`
color: white;
z-index: 2;
`
const StyledP = styled.p`
color: white;
z-index: 1;
`

const Header = props => {

    return (
        <div className='header'>
            <StyledH1>NASA Super Awesome Exciting Photo of the Day!!</StyledH1>
            <StyledH2>{props.headerTitle.title}</StyledH2>
            <StyledP>{props.date.date}</StyledP>
        </div>

    )
}



export default Header;