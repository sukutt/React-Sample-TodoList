import React, {Component} from 'react';
import styled from 'styled-components';

class TodoItem extends Component {
    shouldComponentUpdate(nextProps) {
        return this.props.checked !== nextProps.checked;
    }

    handleRemove = (e) => {
        e.stopPropagation();
        const { onRemove, item } = this.props;
        onRemove(item.id);
    }

    handleCheck = () => {
        const { onCheck, item } = this.props;
        onCheck(item.id);
    }

    render() {
        const { content, checked } = this.props;
        return (
            <Item onClick={this.handleCheck}>
                <RemoveButton onClick={this.handleRemove}>
                    &times;
                </RemoveButton>
                <TextDiv checked={checked}>
                    {content}
                </TextDiv>
                {checked && <CheckMark>✓</CheckMark>}
            </Item>
        );
    }
}

const RemoveButton = styled.div`
    margin-right: 1rem;
    color: #e64980;
    font-weight: 600;
    opacity: 0;
`;

const CheckMark = styled.div`
    font-size: 1.5rem;
    line-height: 1rem;
    margin-left: 1rem;
    color: #3bc9db;
    font-weight: 800;
`;

const Item = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center; /* 세로 가운데 정렬 */
    cursor: pointer;
    transition: all 0.15s;
    user-select: none;

    &:hover {
        background: #e3fafc;

        ${RemoveButton} {
            opacity: 1;
        }
    }

    & + & {
        border-top: 1px solid #f1f3f5;
    }
`;

const TextDiv = styled.div`
    flex: 1; /* 체크, 엑스를 제외한 공간 다 채우기 */
    word-break: break-all;
    ${props => 
        props.checked && `
        text-decoration: line-through;
        color: #adb5bd;
        `
    };
`;

export default TodoItem;