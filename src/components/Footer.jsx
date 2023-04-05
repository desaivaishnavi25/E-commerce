import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';


const Container = styled.div`
    display:flex;
    
`;
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`;

const Logo = styled.h1`

`;
const Desc = styled.p`
    margin:20px 0px;
`;
const SocialContainer = styled.div`
    display:flex;
`;
const SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    background-color:#${props=>props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;
`;
const Center = styled.div`
    flex:1;
    padding:20px;
    
`;
const Title = styled.h3`
    margin-bottom:30px;
`;
const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`;

const ListItem = styled.li`
    width:50%;
    margin-bottom:10px;
`;

const Right = styled.div`
    flex:1;
    padding:20px;
    
`;
const ConatctItem = styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
`;

export const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>LEVIS@</Logo>
            <Desc>Fashion is most often thought of as a global industry that is invested in anticipating what we wear and how we wish to appear to others. But fashion isn't just a business. It's also a cultural and social phenomenon, driven by the desire for the new. As such, the industry can never fully control fashion: fashion is all about being open to change.</Desc>
            <SocialContainer>
                
            <SocialIcon color="3B5999">
                    <FacebookIcon/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <InstagramIcon/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <TwitterIcon/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <PinterestIcon/>
                </SocialIcon>
            </SocialContainer>
        </Left>

        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Acessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Whishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>

        <Right>
            <Title>Contact</Title>
            <ConatctItem>
                <RoomIcon style={{marginRight:"10px"}}/>
                5-4658 Barter Street, Toronto
            </ConatctItem>
            <ConatctItem>
                <PhoneIcon style={{marginRight:"10px"}}/>
                250 555 0199
            </ConatctItem>
            <ConatctItem>
                <EmailIcon style={{marginRight:"10px"}}/>
                conatct@levis.in
            </ConatctItem>
        </Right>
    </Container>
  )
}
