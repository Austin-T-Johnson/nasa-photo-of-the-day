import React from 'react';
import styled from 'styled-components';

const StyledH2 = styled.h2`
color: white;
 `
const StyledP = styled.p`
color:white;
`


const MarsRoverInfo = props => {
    return (
        <div>
            <StyledH2>🌌Here is a cool photo from NASA's Mars rover🌌:</StyledH2>
            <StyledP>
            {props.marsRover.rover.name}
            </StyledP>

        </div>
    )

}

export default MarsRoverInfo;