import React, {Component} from 'react';
import styled from 'styled-components';

class Header extends Component {
    render() {
        return (
            <HeaderDiv>
                오늘 할 일
            </HeaderDiv>
        );
    }
}

const HeaderDiv = styled.div`
    padding: 2rem;
    font-size: 2.5rem;
    text-align: center;
    font-weight: 100;
    background: #22b8cf;
    color: white;
`;

export default Header;