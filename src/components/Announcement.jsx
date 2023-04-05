import styled from "styled-components"

const Container = styled.div`
    height:30px;
    background-color:teal;
    color:white;
    display:flex;
    text-align:center;
    justify-content:center;
    font-size:14px;
    font-weight:bold;
`;

const Announcement = () => {
  return (
    <Container>
        Deal! Free shipping on orders above $70
        
        </Container>
  )
}

export default Announcement