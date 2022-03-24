import React from 'react';
import styled from 'styled-components';

const PhotoExpDiv = styled.div`
display:flex;
width:40%;
background-color: #2A393E;
color: white;
align-items: center;
text-align: center;
margin: 0 auto;
border-radius: 10%;
padding: 2% 2%;
box-shadow: 10px 5px 5px #51B6DB;
margin-bottom: 10%;
`
const explanationP = styled.p`
color: white;
z-index: 1;
`

const PotdImg = styled.img`
width: 45%;
border-radius: 50%;
z-index: 7;
`

const MainPhoto = props => {
    return (
        <div className="main-photo">
           <PotdImg src ={props.mainPhoto.hdurl}></PotdImg>
           <PhotoExpDiv>
           <explanationP>🚀  {props.photoExp.explanation}  🚀</explanationP>
           </PhotoExpDiv>
        </div>
    )
}

export default MainPhoto;