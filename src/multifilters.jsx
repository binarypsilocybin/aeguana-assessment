const MultiFilters = ({ filterItem, products }) => {
  const categories = [
    ...new Set(products && products.map((product) => product.category)),
  ];

  return (
    <>
      <h2>Filters</h2>
      <div className="buttons-container">
        {categories.map((category, index) => (
          <button key={index} onClick={() => filterItem(category)}>
            {category}
          </button>
        ))}
      </div>
    </>
  );
};

export default MultiFilters;
