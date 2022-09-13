import { useState } from "react";

export const AddNewCategory = ({ onAddNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length <= 0) return;
    onAddNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          placeholder="Busca gifs"
          value={inputValue}
          onChange={(e) => onInputChange(e)}
        />
      </form>
    </>
  );
};
