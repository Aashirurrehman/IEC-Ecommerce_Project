import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: maroon;
    color: white;
    align-items: center;
    display: flex;
    font-style: 14px;
    font-weight: bolder;
    justify-content: center;
    

    
`;

const Announcements = () => {
    return (
        <Container>
            Super Deal! free shipping on orders over 5000/- PKR
        </Container>
    )
}

export default Announcements
