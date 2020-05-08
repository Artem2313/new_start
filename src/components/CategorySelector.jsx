import React from 'react';
import Select from 'react-select';

const styles = {
  select: {
    fontSize: 20,
  },
};

const CategorySelector = ({ options, value, onChange }) => (
  <>
    <Select options={options} value={value} isClearable onChange={onChange} />
  </>
);

export default CategorySelector;

/* <select style={styles.select} value={value} onChange={e => e.target.value}>
    {options.map(opt => (
      <options key={opt} value={opt}>
        {opt}
      </options>
    ))}
  </select> */
