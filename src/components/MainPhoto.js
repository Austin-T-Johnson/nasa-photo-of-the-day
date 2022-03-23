import React from 'react';

const MainPhoto = props => {
    return (
        <div className="main-photo">
           <img src ={props.mainPhoto.hdurl}></img>
           <div className="photo-exp">
           <p>🚀  {props.photoExp.explanation}  🚀</p>
           </div>
        </div>
    )
}

export default MainPhoto;