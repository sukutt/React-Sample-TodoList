import React, {Component} from 'react';
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
            onCheck={onCheck}/>
        });

        return (
            <div>
                {items}
            </div>
        );
    }
}

export default TodoList;