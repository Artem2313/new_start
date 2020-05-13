/* eslint-disable */
import React, { Component } from 'react';
import ArticleList from './ArticleList';
import Loader from './Loader';
import ErrorNotification from './ErrorNotification';
// import * as ArticleAPI from '../services/article-api';
// import SearchForm from './SearchForm';
// import CategorySelector from './CategorySelector';
// import SearchOnClient from './SearchOnClient';
// import withFetch from '../hoc/withFetch';
import Togglable from '../hoc/Togglable';
import Fetcher from '../hoc/Fetcher';
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

// export default class App extends Component {
//   // state = {
//   //   articles: [],
//   //   isLoading: false,
//   //   error: null,
//   //   category: '',
//   //   clientChange: '',
//   // };

//   // componentDidMount() {
//   //   this.fetchArticles();
//   // }

//   // componentDidUpdate(prevProps, prevState) {
//   //   if (prevState.category !== this.state.category) {
//   //     this.fetchArticles(this.state.category);
//   //   }
//   // }

//   // filteredArticles = articles =>
//   //   articles.filter(article =>
//   //     article.title
//   //       .toLowerCase()
//   //       .includes(this.state.clientChange.toLowerCase()),
//   //   );

//   // fetchArticles = async query => {
//   //   this.setState({ isLoading: true });
//   //   // get request

//   //   const articles = await ArticleAPI.fetchArticles(query)
//   //     .then(({ data }) => {
//   //       this.setState({ articles: mapper(data.hits) });
//   //     })
//   //     .catch(error => this.setState({ error }))
//   //     .finally(() => this.setState({ isLoading: false }));

//   //   return articles;
//   // };

//   // handleCategoryChange = e => {
//   //   this.setState({ category: e.target.value });
//   // };

//   // handleClientChange = e => {
//   //   this.setState({ clientChange: e.target.value });
//   // };

//   // handleQueryChange = e => {
//   //   this.setState({ query: e.target.value });
//   // };

//   render() {
//     // const { data, isLoading, error } = this.props;
//     // const filter = this.filteredArticles(articles);
//     // let articles = [];
//     // if (data.hits) {
//     //   articles = mapper(data.hits);
//     // }

//     return (
//       <div>
//         {/* <ErrorNotification />
//         <SearchForm onSubmit={this.fetchArticles} />
//         <SearchOnClient onChange={this.handleClientChange} />
//         <CategorySelector
//           options={['html', 'css', 'javascript']}
//           value={category}
//           onChange={this.handleCategoryChange}
//         /> */}
//         <Fetcher url="https://hn.algolia.com/api/v1/search?query=react">
//           {(data, isLoading, error) => {
//             let articles = [];
//             if (data.hits) {
//               articles = mapper(data.hits);
//             }
//             return (
//               <>
//                 {error && <ErrorNotification text={error.message} />}
//                 {isLoading && <Loader />}
//                 {articles.length > 0 && (
//                   <Togglable>
//                     {({ on, onToggle }) => (
//                       <div>
//                         <button onClick={onToggle}>
//                           {on ? 'Hide' : 'Show'}
//                         </button>
//                         {on && <ArticleList items={articles} />}
//                       </div>
//                     )}
//                   </Togglable>
//                 )}
//               </>
//             );
//           }}
//         </Fetcher>
//       </div>
//     );
//   }
// }

//

export default class App extends Component {
  render() {
    return (
      <div>
        <Fetcher url="https://hn.algolia.com/api/v1/search?query=react">
          {({ data, isLoading, error }) => {
            let articles = [];

            if (data.hits) {
              articles = mapper(data.hits);
            }

            return (
              <>
                {error && <ErrorNotification text={error.message} />}
                {isLoading && <Loader />}
                {articles.length > 0 && (
                  <Togglable>
                    {({ on, onToggle }) => (
                      <>
                        <button onClick={onToggle}>
                          {on ? 'Show' : 'Hide'}
                        </button>
                        {on && <ArticleList items={articles} />}
                      </>
                    )}
                  </Togglable>
                )}
              </>
            );
          }}
        </Fetcher>
      </div>
    );
  }
}

// export default withFetch('https://hn.algolia.com/api/v1/search?query=react')(
//   App,
// );
