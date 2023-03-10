import React from 'react'
import styled from 'styled-components'
import {AiFillHome} from 'react-icons/ai'
import {MdLightMode,MdExplore,MdSubscriptions,MdHelp,MdVideoLibrary,MdHistory,MdSupport,MdQueueMusic,MdSportsBasketball,MdVideogameAsset,MdMovie,MdNewspaper,MdLiveTv,MdSettingsApplications} from 'react-icons/md'


const Container=styled.div`
    flex: 1;
    background-color: ${({theme})=>theme.bg};
    color: ${({theme})=>theme.text};
    height: 100vh;
    position: sticky;
    top: 0;
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
    padding: 1px 0px;
`
const Hr=styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({theme})=>theme.soft};
`
const Login=styled.div`
    
`
const Button=styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid blue;
    color: blue;
    margin-top: 5px;
    cursor: pointer;
    border-radius: 3px;
    font-weight: 500;
`
const Menu = ({darkmode,setDarkmode}) => {
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
            <Item>
             <MdExplore/>
             Explore
            </Item>
            <Item>
             <MdSubscriptions/>
             Subscriptions
            </Item>
            <Hr/>
            <Item>
             <MdVideoLibrary/>
             Library
            </Item>
            <Item>
             <MdHistory/>
             History
            </Item>
            <Hr/>
            <Login>
                Sign in to like videos, comment, and subscribe.
                <Button>Sign In</Button>
            </Login>
            <Hr/>
            <Item>
             <MdQueueMusic/>
             Music
            </Item>
            <Item>
             <MdSportsBasketball/>
             Sports
            </Item>
            <Item>
             <MdVideogameAsset/>
             Gaming
            </Item>
            <Item>
             <MdMovie/>
             Movie
            </Item>
            <Item>
             <MdNewspaper/>
             News
            </Item>
            <Item>
             <MdLiveTv/>
             Live
            </Item>
            <Hr/>
            <Item>
             <MdSettingsApplications/>
             Settings
            </Item>
            <Item>
             <MdSupport/>
             Support
            </Item>
            <Item>
             <MdHelp/>
             Help
            </Item>
            <Item onClick={()=>setDarkmode(!darkmode)}>
                <MdLightMode/>
                Light Mode
            </Item>
        </Wrapper>
    </Container>
  )
}

export default Menu