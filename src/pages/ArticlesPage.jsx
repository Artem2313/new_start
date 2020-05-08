import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
// import ArticlePage from './ArticlePage';
import queryString from 'query-string';
import ArticleList from '../components/ArticleList';
import CategorySelector from '../components/CategorySelector';
import * as articleAPI from '../services/articles-api';

const categories = [
  {
    value: 'health',
    label: 'Health',
  },
  {
    value: 'technology',
    label: 'Technology',
  },
  {
    value: 'sports',
    label: 'Sports',
  },
];
// Достаем саму выбранную категорию
const getCategoryWithValue = (allCategories, value) =>
  allCategories.find(category => category.value === value);

// Получаем категорию из пропов
const getCategoryFromLocation = location =>
  queryString.parse(location.search).category;

export default class ArticlesPage extends Component {
  state = { items: [] };

  componentDidMount() {
    const { location } = this.props;
    const category = getCategoryFromLocation(location);

    articleAPI.fetchArticles(category).then(items => this.setState({ items }));
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps);
    // console.log(this.props);
    // console.log(prevState);

    const prevCategory = getCategoryFromLocation(prevProps.location);
    const nextCategory = getCategoryFromLocation(this.props.location);

    if (prevCategory !== nextCategory) {
      articleAPI
        .fetchArticles(nextCategory)
        .then(items => this.setState({ items }));
    }
  }

  handleCategoryChange = opt => {
    // If you have a category
    if (opt) {
      const category = opt.value;
      return this.props.history.push({
        ...this.props.location,
        search: `category=${category}`,
      });
    }
    // Otherwise return empty string
    return this.props.history.push({
      ...this.props.location,
      search: ``,
    });
  };

  render() {
    const { items } = this.state;
    const { location } = this.props;
    const qsCategory = getCategoryFromLocation(location);
    // console.log(qsCategory);

    const selectedCategory = getCategoryWithValue(categories, qsCategory);
    // console.log(selectedCategory);
    // console.log(queryString.parse(this.props.location.search));
    return (
      <div>
        <h1>Articles Page</h1>
        <CategorySelector
          options={categories}
          onChange={this.handleCategoryChange}
          value={selectedCategory}
        />
        <ArticleList items={items} />
        {/* <Route path={`${this.props.match.path}/:id`} component={ArticlePage} /> */}
      </div>
    );
  }
}
