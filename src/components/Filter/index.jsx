import PropTypes from 'prop-types';

export const Filter = ({ filter, onFilterChange }) => {
  return (
    <>
      <label htmlFor="filter">Find contact by name</label>
      <input
        id="filter"
        type="text"
        name="filter"
        title=""
        required
        onChange={onFilterChange}
        value={filter}
      />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func.isRequired,
};
