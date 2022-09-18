import './App.css';
import 'semantic-ui-css/semantic.css';
import { Route, Routes } from 'react-router-dom';
import MoviesPage from './components/pages/MoviesPage';
import { Container} from 'semantic-ui-react';
import Footer from './components/pages/footer';
import { Component } from 'react';
import Header from './components/pages/header';
import AddNewMovies from './components/pages/addNewMovies';
import HomePage from './components/pages/homePage';


class App extends Component {

  render() {
    
    return (
      <div className="App">
        
        <Header />

        <Container text>

          <Routes>
            <Route path='/' element={<HomePage />}  > </Route>
            <Route path='/movies' element={<MoviesPage />}  > </Route>
            <Route path='/addnewmovie' element={<AddNewMovies />}  > </Route>
          </Routes>
          
        </Container>

        <Footer />

      </div>
    );
  };
}

export default App;
