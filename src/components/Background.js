import React from 'react';
import styled, { keyframes } from 'styled-components';

const kf = keyframes`
from {
    -webkit-transform: translate3d(0px, 0px, 0px);
}
to { 
    -webkit-transform: translate3d(1000px, 0px, 0px);
}
`
const webkitKf = keyframes`
from {
    -webkit-transform: translate3d(0px, 0px, 0px);
}
to { 
    -webkit-transform: translate3d(1000px, 0px, 0px);
}
`

const mozKf = keyframes`
from {
    -webkit-transform: translate3d(0px, 0px, 0px);
}
to { 
    -webkit-transform: translate3d(1000px, 0px, 0px);
}
`

const BackgroundContainer = styled.div`
position: fixed;
	top: 0;
	left:0;
	bottom: 0;
	right: 0;
    z-index: -1;
`

const Stars = styled.div`
background: black url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png) repeat;
position: absolute;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   display: block;
     z-index: 0;
     
`

const Twinkling = styled.div`
width:10000px;
	height: 100%;
	background: transparent url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/twinkling.png") repeat;
	background-size: 1000px 1000px;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2;
    -moz-animation: ${mozKf}  70s linear infinite;
  -ms-animation: 70s linear infinite;
  -o-animation: 70s linear infinite;
  -webkit-animation: ${webkitKf}  70s linear infinite;
  animation: 70s linear infinite;
  animation: ${kf}
`

const Clouds = styled.div`
width:10000px;
height: 100%;
background: transparent url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/clouds_repeat.png") repeat;
background-size: 1000px 1000px;
position: absolute;
right: 0;
top: 0;
bottom: 0;
z-index: 3;
-moz-animation:${mozKf}  150s linear infinite;
-ms-animation:  150s linear infinite;
-o-animation:  150s linear infinite;
-webkit-animation: ${webkitKf}  150s linear infinite;
animation: ${kf}  150s linear infinite;
`
const Background = props => {

    return (
        <BackgroundContainer>
            <Stars></Stars>
            <Twinkling></Twinkling>
            <Clouds></Clouds>
            </BackgroundContainer>
            )
}

export default Background;