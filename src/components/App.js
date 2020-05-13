import React, { Component, createContext } from 'react';

// 1 Создаем контекст
const MyContext = createContext();

// 2 Зашиваем этот контекст в класс, где и передаем необходимые данные и методы, которые должны быть доступны коесьюмерам
class MyContextProvider extends Component {
  state = {
    text: Date.now().year,
  };

  changeText = () => this.setState({ text: Date.now() });

  render() {
    // 3 Возвращаем Context.Provider, где в value передаем необходимые данные для children

    return (
      <MyContext.Provider
        value={{ text: this.state.text, onChange: this.changeText }}
      >
        {/* 4 Рендерим  children */}
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default class App extends Component {
  state = {};

  render() {
    return (
      // 5 Обрачиваем children в класс ContextProvider
      <MyContextProvider>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen</h2>
        <Button />
      </MyContextProvider>
    );
  }
}

const Button = () => (
  // 6 Обрачиваем childrenа, которому хотим передать контекст в MyContext.Consumer (который полчаем от ContextProvider)
  <MyContext.Consumer>
    {/* 7 Передаем контекст  childrenу */}
    {context => {
      console.log(context);
      return (
        <button type="button" onClick={context.onChange}>
          {`Text: ${context.text}`}
        </button>
      );
    }}
  </MyContext.Consumer>
);
