import { useState } from "react";
import { AddNewCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Rick and Morty"]);

  const addCategory = (newCategory) => {
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddNewCategory
        onAddCategory={ addCategory }
      />

      {categories.map((category) => (
          <GifGrid
              key={category}
              category={category} />
      ))}
    </>
  );
};
