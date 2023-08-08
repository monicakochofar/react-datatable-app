import logo from './logo.svg';
import './App.scss';
import { Table } from  './Table';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">
          <img src={logo} className="app__logo" alt="logo" /> 
          React/Typescript Datatable Application
        </h1>
        <Table />
      </header>
    </div>
  );
}

export default App;
