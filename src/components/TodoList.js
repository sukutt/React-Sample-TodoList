import React, { Component } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

class TodoList extends Component {
    render() {
        const { todoItems, onCheck, onRemove } = this.props;
        const items = todoItems.map((item) => {
            return <TodoItem
                item={item}
                key={item.id}
                content={item.content}
                checked={item.checked}
                onRemove={onRemove}
                onCheck={onCheck} />
        });

        return (
            <List>
                {items}
            </List>
        );
    }
}

const List = styled.div`
    overflow: scroll;
    max-height: 500px;
`;

export default TodoList;