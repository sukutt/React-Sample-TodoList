import React, {Component} from 'react';
import Header from './Header';
import styled from 'styled-components';

class TodoListTemplate extends Component {
    render() {
        const {form, children} = this.props;
        return (
            <Template>
                <Header />
                <FormSection>
                    {form}
                </FormSection>
                <TodoListSection>
                    {children}
                </TodoListSection>
            </Template>
        );
    }
}

const Template = styled.div`
    background: white;
    width: 512px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); /* 그림자 */ 
    margin: 0 auto; /* 페이지 중앙 정렬 */
    margin-top: 4rem;
`;

const FormSection = styled.section`
    padding: 1rem;
    border-bottom: 1px solid #22b8cf;
`;

const TodoListSection = styled.section`
`;

export default TodoListTemplate;