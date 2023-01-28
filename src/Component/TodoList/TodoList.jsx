import { Button, Input, Select, Tag } from 'antd';
import Todo from '../Todo/Todo';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todoSlide } from './TodoListSlide';
import { v4 as uuidv4 } from 'uuid';
import { todosRemainingSelector } from '../../Redux/Selector';

function TodoList() {
    const dispatch = useDispatch();
    const [todoName, setTodoName] = useState('');
    const [priority, setPriority] = useState('Medium');
    const todoList = useSelector(todosRemainingSelector);

    console.log(todoList);
    const handleButtonAddTodo = () => {
        dispatch(
            todoSlide.actions.addTodo({
                id: uuidv4(),
                name: todoName,
                priority: priority,
                completed: false,
            }),
            setTodoName(''),
        );
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleOnchangeInput = (e) => setTodoName(e.target.value);
    return (
        <>
            <div className="h-[calc(100% - 40px)] h-[90vh]">
                {todoList.map((todo) => {
                    return (
                        <Todo
                            key={todo.id}
                            name={todo.name}
                            priority={todo.priority}
                            completed={todo.completed}
                        />
                    );
                })}
            </div>
            <div>
                <Input.Group compact style={{ display: 'flex' }}>
                    <Input value={todoName} onChange={handleOnchangeInput} />
                    <Select
                        defaultValue="Medium"
                        value={priority}
                        onChange={(value) => setPriority(value)}
                    >
                        <Select.Option value="High" label="High">
                            <Tag color="red">High</Tag>
                        </Select.Option>
                        <Select.Option value="Medium" label="Medium">
                            <Tag color="blue">Medium</Tag>
                        </Select.Option>
                        <Select.Option value="Low" label="Low">
                            <Tag color="gray">Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button type="default" onClick={handleButtonAddTodo}>
                        Add
                    </Button>
                </Input.Group>
            </div>
        </>
    );
}

export default TodoList;
