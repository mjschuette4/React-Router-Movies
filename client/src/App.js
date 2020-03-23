import React, { useState } from 'react';
import { Route, Link, Switch } from "react-router-dom";

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList.js';
import Movie from './Movies/Movie.js';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Switch>
        <Route path="/">
          <MovieList/>
        </Route> 
        <Route path="/movies/${id}">
          <Movie/>
        </Route> 
      </Switch>
    </div>
  );
};

export default App;
