import React from 'react'
import styled from 'styled-components'
import {AiFillHome} from 'react-icons/ai'


const Container=styled.div`
    flex: 1;
    background-color: #202020;
    color: slategray;
    height: 100vh;
`
const Wrapper=styled.div`
    padding: 20px;
`
const Logo=styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    margin-bottom: 20px;
`
const Image=styled.img`
    height: 25px;
    border-radius: 100%;
`
const Item=styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    font-size: 20px;
`
const Menu = () => {
  return (
    <Container>
        <Wrapper>
            <Logo>
                <Image src='https://e7.pngegg.com/pngimages/862/923/png-clipart-video-player-computer-icons-media-player-play-button-blue-angle.png'/>
                YouTube
            </Logo>

            <Item>
             <AiFillHome/>
             Home
            </Item>
        </Wrapper>
    </Container>
  )
}

export default Menu