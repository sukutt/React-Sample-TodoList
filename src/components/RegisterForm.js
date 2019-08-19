import React, { Component } from 'react';
import styled from 'styled-components';

class RegisterForm extends Component {
    state = {
        content: '',
        error: false,
    }

    onChange = (e) => {
        this.setState({
            content: e.target.value,
        })
    }

    onRegister = () => {
        const { content } = this.state;
        if (content.replace(/\s/g, '').length === 0 || content === '') {
            this.setState((prevState) => ({
                error: true,
            }));
            return;
        }

        const { onCreate } = this.props;
        onCreate(this.state.content)

        this.setState((prevState) => ({
            error: false,
            content: '',
        }));
    }

    onKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            this.onRegister();
        }
    }

    render() {
        const { content, error } = this.state;
        return (
            <Form>
                <InputBox>
                    <Input value={content} placeholder="오늘 뭐 할까?" onChange={this.onChange} onKeyPress={this.onKeyPress} />
                    <Button onClick={this.onRegister}>
                        추가
                    </Button>
                </InputBox>
                <ErrorMsg isShow={error}>
                    공란 입력은 안됩니다.
                </ErrorMsg>
            </Form>
        );
    }
}

const ErrorMsg = styled.div`
    display: ${props => props.isShow ? 'block' : 'none'};
    padding-top: 12px;
    color: #c92a2a;
`;

const Form = styled.form`
`;

const InputBox = styled.div`
    display: flex;
`;

const Input = styled.input`
    flex: 1; /* 버튼을 뺀 빈 공간을 모두 채워줍니다 */
    font-size: 1.25rem;
    outline: none;
    border: none;
    border-bottom: 1px solid #845ef7;
`;

const Button = styled.span`
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-left: 1rem;
    background: transparent;
    border-radius: 3px;
    border: 1px solid #845ef7;
    color: #845ef7;
    font-weight: 600;
    cursor: pointer;
    transition: 1s;

    &:hover {
        background: #845ef7;
        color: white;
    }
`;

export default RegisterForm;