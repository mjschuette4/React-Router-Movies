import React, { useState } from 'react';
import {Route} from "react-router-dom";

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
      
        <Route path="/">
          <MovieList/>
        </Route> 

        <Route path="/movies/:id">
          <Movie/>
        </Route> 
      
    </div>
  );
};

export default App;
