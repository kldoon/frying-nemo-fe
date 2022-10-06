import { useState } from 'react';
import Input from '../input/input.component';
import './multivalue-input.css';

/**
 * Renders an input component and a list of values.
 * @param {{
 *  label?: string;
 *  value: string[];
 *  onChange: (value: string[]) => void;
 * }} props 
 */
const MultivalueInput = props => {
const [newItemValue, setNewItemValue] = useState('');
const addItem = () => {
  props.onChange(...props.value, newItemValue);
};
  

  return (
    <div className="multivalueInputWrapper">
      <div className="controls">
        <Input
        label = {props.label}
        value = {newItemValue}
        onChange={e => setNewItemValue(e.target.value)}
        />
        <button
          className="nemo-button"
          type="button"
          onClick={addItem}
        >
          Add
        </button>
      </div>
      {/* Render list of items */}
      {/* Do not render list if incoming value has no items */}
      {/* 
        <ul>
          <li>
            <span>{item}</span>
            <button type="button">&times;</button>
          </li>
        </ul>
       */}
    </div>
  );
};

export default MultivalueInput;