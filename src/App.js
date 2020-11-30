import logo from './logo.svg';
import './App.scss';
import { Characters } from './components/characters/characters';
import { Episodes } from './components/episodes/episodes';
import { Locations } from './components/locations/locations';
import { MyWatchList } from './components/myWatchList/Mylist';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Menu from './components/navigation/Nav';
import { Home } from './components/Home/home';





function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />

        <div className="container">
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route exact path="/home" render={() => <Home />} />
            <Route exact path="/characters" render={() => <Characters />} />
            <Route exact path="/episodes" render={() => <Episodes />} />
            <Route exact path="/locations" render={() => <Locations />} />
            <Route exact path="/myWatchList" render={() => <MyWatchList />} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
