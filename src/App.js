import Filter from './Component/Filter/Filter';
import { Divider } from 'antd';
import TodoList from './Component/TodoList/TodoList';

function App() {
    return (
        <div className="w-[500px] h-[90vh] p-4 mx-[auto] my-9 flex flex-col bg-white shadow-shadowWhite ">
            <h1 className=" uppercase text-[38px] mb-[19px] font-semibold text-center">
                {' '}
                todo app with redux
            </h1>
            <Filter />
            <Divider />
            <TodoList />
        </div>
    );
}

export default App;
