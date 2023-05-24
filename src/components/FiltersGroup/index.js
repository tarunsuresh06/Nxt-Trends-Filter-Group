import './index.css'

import {BsSearch} from 'react-icons/bs'

const FiltersGroup = props => {
  const {
    categoryOptions,
    handleCategory,
    activeCategoryId,
    ratingsList,
    handleRating,
    handleFilterSearch,
    filterSearchInputValue,
    enterSearchInput,
  } = props

  const renderSearchInput = () => {
    const onEnterSearchInput = event => {
      if (event.key === 'Enter') {
        enterSearchInput()
      }
    }

    const onChangeFilterSearch = event => {
      handleFilterSearch(event.target.value)
    }

    return (
      <div className="search-input-container">
        <input
          placeholder="search"
          className="filter-search-input"
          onChange={onChangeFilterSearch}
          onKeyDown={onEnterSearchInput}
          value={filterSearchInputValue}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

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

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      <h1 className="filter-title">Category</h1>
      {renderCategoryListSection()}
      <h1 className="filter-title">Rating</h1>
      {renderRatingSection()}
    </div>
  )
}

export default FiltersGroup
