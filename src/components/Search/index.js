import React from "react";
import Select from "react-select";

const Search = ({ users, changeUser }) => {
  return (
    <div>
      <Select
        options={users.map((i) => {
          return { value: i.username, label: i.username };
        })}
        onChange={(e) => {
          changeUser(e.value.toLowerCase());
        }}
      />
    </div>
  );
};

export default Search;
