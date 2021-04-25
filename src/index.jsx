import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import MainComponent from './components/MainComponent.jsx';


const App = () => {
  return (
    <>
      <MainComponent />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
