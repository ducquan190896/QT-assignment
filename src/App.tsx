import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';


function App() {

  return (
    <div>
      <Provider store={store}>

      </Provider>
    </div>
  )
}

export default App
