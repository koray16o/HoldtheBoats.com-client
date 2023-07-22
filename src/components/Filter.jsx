import { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [typeFilter, setTypeFilter] = useState('');
  const [conditionFilter, setConditionFilter] = useState('');
  const [lengthFilter, setLengthFilter] = useState('');

  const handleFilter = () => {
    const filters = {
      type: typeFilter,
      condition: conditionFilter,
      length: lengthFilter
    };
    onFilter(filters);
  };

  return (
    <div>
      <h2>Filter Boats</h2>
      <form action="">
        <label>Lenght:</label>
        <p>From:</p>
        <p>To:</p>
        <input
          value={lengthFilter}
          onChange={e => setLengthFilter(e.target.value)}
        >
          <option value="Initial">
            <></>
          </option>
          <option value="Final"></option>
        </input>
        <label>Type:</label>
        <select
          value={typeFilter}
          onChange={e => setTypeFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="Sail Boat">Sailboats</option>
          <option value="Power Boat">Powerboats</option>
          <option value="Classic Boat">Classicboats</option>
          <option value="Dinghy">Dinghy</option>
        </select>

        <label>Condition:</label>
        <input
          type="text"
          value={conditionFilter}
          onChange={e => setConditionFilter(e.target.value)}
        />

        <button onClick={handleFilter}>Apply Filters</button>
      </form>
    </div>
  );
};

export default Filter;
