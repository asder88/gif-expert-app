import { useState } from "react";
import { AddNewCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([""]);

  const addCategory = (newCategory) => {
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddNewCategory
        onAddNewCategory={ addCategory }
      />

      {/* Lista de Gifs */}
      {categories.map((category) => (
          <GifGrid
          key={category}
          category={category}
          />
      ))}
    </>
  );
};
