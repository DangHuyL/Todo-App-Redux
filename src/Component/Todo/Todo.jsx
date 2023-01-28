import { Checkbox, Row, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoSlide } from '../TodoList/TodoListSlide';

const colorPriority = {
    High: 'red',
    Medium: 'blue',
    Low: 'Gray',
};
function Todo({ name, priority, completed, id }) {
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(completed);
    const handleToggleChecked = () => {
        setChecked(!checked);

        dispatch(todoSlide.actions.toggleTodoStatus(id));
    };

    return (
        <div>
            <Row
                justify="space-between"
                style={{
                    marginBottom: 3,
                    ...(checked
                        ? { opacity: 0.5, textDecoration: 'line-through' }
                        : {}),
                }}
            >
                <Checkbox checked={checked} onChange={handleToggleChecked}>
                    {name}
                </Checkbox>
                <Tag color={colorPriority[priority]}>{priority}</Tag>
            </Row>
        </div>
    );
}

export default Todo;
