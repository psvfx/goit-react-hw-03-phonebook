import { FilterInput } from './Filter.style';

export const Filter = ({ filter, onFilterChange }) => (
  <FilterInput
    type="text"
    placeholder="Search by name"
    value={filter}
    onChange={onFilterChange}
  />
);
