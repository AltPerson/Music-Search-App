import './App.css';
import Home from './pages/Home';
import AlbumInfo from './pages/AlbumInfo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

function App() {
  return (
    <main className="app">
      <div className="app-container container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/details/:id" component={AlbumInfo} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </div>
    </main>
  );
}
export default App;
