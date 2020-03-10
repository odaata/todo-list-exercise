import React from 'react';
import './App.css';

/*
Create a simple todo app using react

Requirements:
* Display existing todos in a list
* Create new todo with a label and completion status
* Delete todos
*/

function App() {
  return (
      <section className='App'>
        <header className='App-header'>
          <h1>My Todo List</h1>
        </header>
        <div className='Todo-list'>
          {/*{ todos go here }*/}
        </div>
      </section>
  );
}

export default App;
