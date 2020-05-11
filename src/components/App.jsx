import React, { Component } from 'react';
import ArticleList from './ArticleList';
import Loader from './Loader';
import ErrorNotification from './ErrorNotification';
import * as ArticleAPI from '../services/article-api';
import SearchForm from './SearchForm';
import CategorySelector from './CategorySelector';
import SearchOnClient from './SearchOnClient';
/* 
  Функция помошник, которая возвращает массив объектов такого формата, который ожидает компонент
  */

const mapper = articles => {
  return articles.map(({ ObjectID: id, url: link, ...props }) => ({
    id,
    link,
    ...props,
  }));
};

export default class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
    category: '',
    clientChange: '',
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.category !== this.state.category) {
      this.fetchArticles(this.state.category);
    }
  }

  filteredArticles = articles =>
    articles.filter(article =>
      article.title
        .toLowerCase()
        .includes(this.state.clientChange.toLowerCase()),
    );

  fetchArticles = async query => {
    this.setState({ isLoading: true });
    // get request

    const articles = await ArticleAPI.fetchArticles(query)
      .then(({ data }) => {
        this.setState({ articles: mapper(data.hits) });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));

    return articles;
  };

  handleCategoryChange = e => {
    this.setState({ category: e.target.value });
  };

  handleClientChange = e => {
    this.setState({ clientChange: e.target.value });
  };

  // handleQueryChange = e => {
  //   this.setState({ query: e.target.value });
  // };

  render() {
    const { articles, isLoading, error, category } = this.state;
    const filter = this.filteredArticles(articles);

    return (
      <div>
        <SearchForm onSubmit={this.fetchArticles} />
        <SearchOnClient onChange={this.handleClientChange} />
        <CategorySelector
          options={['html', 'css', 'javascript']}
          value={category}
          onChange={this.handleCategoryChange}
        />
        {error && <ErrorNotification text={error.message} />}
        {isLoading && <Loader />}
        {articles.length > 0 && <ArticleList items={filter} />}
      </div>
    );
  }
}
