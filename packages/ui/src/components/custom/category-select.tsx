import CategoryButton from "./category-button";

export async function CategorySelect({ categories }: { categories: any }) {
  if (!Array.isArray(categories)) {
    return null;
  }

  return (
    <div className="w-full flex gap-2 justify-center items-center">
      {categories.map((category: any) => (
        <CategoryButton key={category.id} value={category.text}>
          {category.text}
        </CategoryButton>
      ))}
      <CategoryButton value="">all</CategoryButton>
    </div>
  );
}
