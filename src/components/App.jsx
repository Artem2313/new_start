import React, { Component } from 'react';
import axios from 'axios';
import ArticleList from './ArticleList';

const BASE_URL = 'https://hn.algolia.com/api/v1/search?query=';

const DEFAULT_QUERY = 'react';

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
  };

  componentDidMount() {
    // get request
    axios
      .get(BASE_URL + DEFAULT_QUERY)
      .then(({ data }) => {
        this.setState({ articles: data.hits });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { articles } = this.state;
    return <div>{articles.length > 0 && <ArticleList items={articles} />}</div>;
  }
}
