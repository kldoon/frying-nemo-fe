import React from 'react';
import './filter-bar.css';
import Input from '../../common/input/input.component';
import Select from '../../common/select/select.component';
import { CATEGORIES } from '../../../data/constants';

// TODO: Add types here -brett-
const FilterBar = (props) => {

  const handleFilterChange = (filterName, inputValue) => {
    const newParams = new URLSearchParams(props.params);

    if (inputValue) {
      newParams.set(filterName, inputValue);
    } else {
      newParams.delete(filterName);
    }
    props.setParams(newParams);
  };

  return (
    <div className="filter-bar">
      <Input
        type="search"
        label="Search for Item"
        value={props.searchTermsFromURL}
        onChange={e => handleFilterChange('searchTerms', e.target.value)}
        placeholder="Search"
      />
      <Select
        name="category"
        label="Category"
        value={props.categoryFromURL}
        onChange={e => handleFilterChange('category', e.target.value)}
      >
        <option value="">All</option>
        {CATEGORIES.map(item => {
          return <option key={item} value={item}>{item}</option>;
        })}
      </Select>
    </div>
  );
};

export default FilterBar;