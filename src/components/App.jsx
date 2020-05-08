import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ArticlesPage from '../pages/ArticlesPage';
import NotFoundPage from '../pages/NotFoundPage';
import ArticlePage from '../pages/ArticlePage';
import Nav from './Nav';

const StyledDiv = styled.div`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 16px;
`;

const App = () => {
  return (
    <StyledDiv>
      <Nav />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/articles/:id" component={ArticlePage} />
        <Route path="/articles" component={ArticlesPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </StyledDiv>
  );
};

export default App;
