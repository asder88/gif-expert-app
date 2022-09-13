import { useState } from "react";

export const AddNewCategory = ({onAddCategory}) => {
  const [inputValue, setInputValue] = useState("");

  const onInputValue = ({ target }) => {
    setInputValue(target.value);
    };
    
    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 0) return; 
        onAddCategory(inputValue.trim())
        setInputValue('')
    }

  return (
    <form onSubmit={(e)=> onSubmit(e)}>
      <input
        type="text"
        placeholder="Busca Gifs"
        value={inputValue}
        onChange={onInputValue}
      />
    </form>
  );
};
