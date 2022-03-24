import React from 'react';
import styled from 'styled-components';



const PhotoImg = styled.img`
border-radius: 10%;
`




const MarsRoverPhoto = props => {
    return (
        <div>
            <PhotoImg src = {props.marsPhoto.img_src}></PhotoImg>
            <div>
                <p>
                   
                </p>
            </div>
        </div>
    )

}

export default MarsRoverPhoto;