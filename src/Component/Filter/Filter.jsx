import { Row, Col, Input, Radio, Select, Tag } from 'antd';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { filterSLide } from './FilterSlide';

function Filter() {
    const { Search } = Input;
    const [searchValue, setSearchValue] = useState('');
    const [statusValue, setStatusValue] = useState('');
    const [priorityValue, setPriorityValue] = useState([]);
    const dispatch = useDispatch();
    const handleSearchFilter = (e) => {
        setSearchValue(e.target.value);
        dispatch(filterSLide.actions.searchFilter(e.target.value));
    };
    const handleStatusFilter = (e) => {
        setStatusValue(e.target.value);
        dispatch(filterSLide.actions.statusFilter(e.target.value));
    };
    const handlePriorityFilter = (value) => {
        setPriorityValue(value);
        dispatch(filterSLide.actions.priorityFilter(value));
    };

    return (
        <div>
            <Row justify="center">
                {/* Search */}
                <Col span={24}>
                    <h4 className="tpd-title">Search</h4>
                    <Search
                        placeholder="input search text"
                        value={searchValue}
                        onChange={handleSearchFilter}
                    />
                </Col>

                {/* Filter By Status */}
                <Col sm={24}>
                    <h4 className="tpd-title">Filter By Status</h4>
                    <Radio.Group
                        value={statusValue}
                        onChange={handleStatusFilter}
                    >
                        <Radio value="All">All</Radio>
                        <Radio value="Completed">Completed</Radio>
                        <Radio value="Todo">Todo</Radio>
                    </Radio.Group>
                </Col>

                {/* Filter By Priority */}
                <Col sm={24}>
                    <h4 className="tpd-title">Filter By Priority</h4>
                    <Select
                        mode="multiple"
                        style={{ width: '100%' }}
                        placeholder="Please select"
                        allowClear
                        onChange={handlePriorityFilter}
                        value={priorityValue}
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
                </Col>
            </Row>
        </div>
    );
}

export default Filter;
