import React from 'react';
import './App.css';
import Characters from './components/Characters';
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Books from './components/Books';
import Chapters from './components/Chapters';
import Movies from './components/Movies';
import Quotes from './components/Quotes';
import HomePage from './components/HomePage';
import Book from './components/Book';
import Chapter from './components/Chapter';
import  Movie  from './components/Movie';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/book" component={Books} />
        <Route exact path="/book/:bookId" component={Book}/>
        <Route exact path="/chapter" component={Chapters} />
        <Route exact path="/chapter/:chapterId" component={Chapter}/>
        <Route exact path="/movie" component={Movies} />
        <Route exact path="/movie/:movieId" component={Movie} />
        <Route exact path="/character" component={Characters} />
        <Route exact path="/quote" component={Quotes} />
      </Router>
    </div>
  );
}

export default App;
