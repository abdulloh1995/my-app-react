import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const FilterAndSearch = ({filter, setFilter}) => {
    return (<div className="d-flex justify-content-between my-3">
            <MyInput
                placeholder="Search..."
                value={filter.query}
                className="form-control me-2"
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <MySelect
                value={filter.sort}
                onChange={selected => setFilter({...filter, sort: selected})}
                defaultValue="Sorted by"
                options={[{value: 'title', name: 'Programming'}, {value: 'stack', name: 'Jobs'},]}
            />
        </div>);
};

export default FilterAndSearch;