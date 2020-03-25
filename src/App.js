import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './common/Header/Header';
import Footer from './common/Footer/Footer';
import AddRecipePage from './pages/AddRecipePage';
import ViewRecipePage from './pages/ViewRecipePage';
import AllRecipesPage from './pages/AllRecipesPage';
import './App.scss';

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Switch>
          <Route exact path="/">
            <AllRecipesPage />
          </Route>
          <Route path="/recipe/:id">
            <ViewRecipePage />
          </Route>
          <Route path="/add">
            <AddRecipePage />
          </Route>
          <Route path="/shopping-list">
            <h1>Shopping List</h1>
          </Route>
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
