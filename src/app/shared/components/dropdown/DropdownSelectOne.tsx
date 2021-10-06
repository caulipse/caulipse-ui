/* eslint-disable jsx-a11y/no-onchange */
import React from 'react';
import './styles.scss';

interface Props {
  handleSelect: (title: string) => void;
  dropdownTitle: string;
  list: string[];
}
const DropdownSelectOne = ({
  handleSelect,
  dropdownTitle,
  list,
}: Props):JSX.Element => {
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    handleSelect(e.target.value);
  }
  return (
    <div className="dropdown-con">
      <select onChange={onChange} className="dropdown-select">
        <option className="dropdown-title" value="">{dropdownTitle}</option>
        {
          list.map((item) => <option className="dropdown-item" key={item} value={item} >{item}</option>)
        }
      </select>
    </div>
  ); 
}

export default DropdownSelectOne;