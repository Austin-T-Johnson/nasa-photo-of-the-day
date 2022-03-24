import React from 'react';
import styled from 'styled-components';

const MainPhotoDiv = styled.div`
`

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
const ExplanationP = styled.p`
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
        <MainPhotoDiv>
           <PotdImg src ={props.mainPhoto.hdurl}></PotdImg>
           <PhotoExpDiv>
           <ExplanationP>🚀  {props.photoExp.explanation}  🚀</ExplanationP>
           </PhotoExpDiv>
        </MainPhotoDiv>
    )
}



export default MainPhoto;