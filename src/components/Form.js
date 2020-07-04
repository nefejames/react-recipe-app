import React from "react";

const Form = ({ searchTerm, updateSearch, submitForm }) => {
  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={updateSearch}
      />
      <input type="submit" value="Search" onClick={submitForm} />
    </form>
  );
};

export default Form;
