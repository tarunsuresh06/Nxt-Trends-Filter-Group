import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    handleCategory,
    activeCategoryId,
    ratingsList,
    handleRating,
  } = props

  const renderRatingSection = () => (
    <ul className="rating-list">
      {ratingsList.map(eachRating => {
        const onClickRating = () => {
          handleRating(eachRating.ratingId)
        }

        return (
          <li
            className="rating-item"
            key={eachRating.ratingId}
            onClick={onClickRating}
          >
            <img
              className="rating-img"
              src={eachRating.imageUrl}
              alt="rating"
            />
            <p className="rating-text"> & up</p>
          </li>
        )
      })}
    </ul>
  )

  const renderCategoryListSection = () => (
    <ul className="category-list">
      {categoryOptions.map(eachCategory => {
        const activeClass =
          activeCategoryId === eachCategory.categoryId ? 'active-category' : ''

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
  )

  return (
    <div className="filters-group-container">
      <h1 className="filter-title">Category</h1>
      {renderCategoryListSection()}
      <h1 className="filter-title">Rating</h1>
      {renderRatingSection()}
    </div>
  )
}

export default FiltersGroup
