import './App.css'
import MovieList from './containers/MovieList/MovieList'
import { useState } from 'react';

const App = () => {

    const [title, setTitle] =  useState("The Movie Catalog");

    const handleClick = () => {
        setTitle("The Film Blog");
   }

    return (
        <div>
            <h1>{ title }</h1>
            <button onClick={handleClick}>Click me</button>
            <MovieList />
        </div>
    )
}

export default App
