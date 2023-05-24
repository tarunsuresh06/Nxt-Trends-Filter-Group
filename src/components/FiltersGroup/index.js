import './index.css'

const FiltersGroup = props => {
  const {categoryOptions, handleCategory, activeCategoryId} = props

  const renderCategoryListSection = () => (
    <>
      <h1 className="category-title">Category</h1>
      <ul className="category-list">
        {categoryOptions.map(eachCategory => {
          const activeClass =
            activeCategoryId === eachCategory.categoryId
              ? 'active-category'
              : ''

          const onClickCategory = () => {
            handleCategory(eachCategory.categoryId)
          }
          return (
            <li
              className="category-item"
              key={eachCategory.categoryId}
              onClick={onClickCategory}
            >
              <p className={`category-text ${activeClass}`}>
                {eachCategory.name}
              </p>
            </li>
          )
        })}
      </ul>
    </>
  )

  return (
    <div className="filters-group-container">{renderCategoryListSection()}</div>
  )
}

export default FiltersGroup
