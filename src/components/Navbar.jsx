import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import logo from './logo.png'
import {mobile} from '../Responsive'


const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
    
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: "10px 0px" })}
   

`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;

`;

const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
    
    
`;


const Center = styled.div`
    flex: 1;
    display: flex;
`;

const Logo = styled.div`
    height: 75px;
    display: flex;
    padding-left: 50px;
    ${mobile({ height: "30px" })}
    
`;


const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}

`


const Navbar = () => {
    return (
        <Container> 
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='search'/>
                        <Search style={{color:'maroon', fontSize:18}}/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        <img src = {logo} alt="logo"/>
                    </Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGNIN</MenuItem>
                    <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined/>
                    </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
            
        </Container>
    );
}

export default Navbar;
