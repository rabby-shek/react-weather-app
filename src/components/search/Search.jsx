import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { url, GeoOptions } from "../../api";
const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  const loadOptions = (inputValue) => {
    return fetch(
      `${url}?minPopulation=1000000&namePrefix=${inputValue}`,
      GeoOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name} ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.log(err));
  };

  const handleOnchange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={6000}
      value={search}
      onChange={handleOnchange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
