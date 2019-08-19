import React, {Component} from 'react';
import styled from 'styled-components';

class RegisterForm extends Component {
    state = {
        content: '',
    }

    onChange = (e) => {
        this.setState({
            content: e.target.value,
        })
    }

    onRegister = () => {
        const {onCreate} = this.props;
        onCreate(this.state.content)

        this.setState({
            content: '',
        })
    }

    render() {
        return (
            <Form>
                <Input value={this.state.content} placeholder="오늘 뭐 할까?" onChange={this.onChange}  />
                <Button onClick={this.onRegister}>
                    추가
                </Button>
            </Form>
        );
    }
}

const Form = styled.form`
    display: flex;
`;

const Input = styled.input`
    flex: 1; /* 버튼을 뺀 빈 공간을 모두 채워줍니다 */
    font-size: 1.25rem;
    outline: none;
    border: none;
    border-bottom: 1px solid #c5f6fa;
`;

const Button = styled.span`
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-left: 1rem;
    background: #22b8cf;
    border-radius: 3px;
    color: white;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        background: #3bc9db;
    }
`;

export default RegisterForm;