import React, { Component } from 'react';
import styled from 'styled-components';

class Header extends Component {
    render() {
        return (
            <HeaderDiv>
                Todo list
            </HeaderDiv>
        );
    }
}

const HeaderDiv = styled.div`
    padding: 2rem;
    font-size: 2.5rem;
    text-align: center;
    font-weight: 100;
    background-image: linear-gradient(to right, #845ef7, #5c7cfa);
    color: white;
`;

export default Header;