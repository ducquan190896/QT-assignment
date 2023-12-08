import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {

  return (
    <div>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </Router>
      </Provider>
    </div>
  )
}

export default App
