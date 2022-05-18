import React from "react";

const Form = ({ query, handleSubmit, handleChange }) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        value={query}
        onChange={(e) => handleChange(e)}
        type="text"
        placeholder="e.g. elonmusk"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
