import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Nav/Navbar';
import Form from './Form/Form';
import Calculate from './Form/Calculate';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Loading from './Loading';
import { DataContext } from '../data/DataContext';
import NewTable from './Table/NewTable';

const Main = () => {
  const { error, isLoaded } = useContext(DataContext);
  if (error) {
    return (
      <div>
        <Error />
      </div>
    );
  } else if (!isLoaded) {
    return <Loading />;
  } else {
    return (
      <div className='App'>
        <Router>
          <Navbar />
          <Switch>
            <Route
              path='/'
              exact
              render={(props) => (
                <>
                  <Form />
                  <NewTable />
                  <Calculate />
                </>
              )}
            />
            <Route path='/sobre/' component={About} />
            <Route path='/contato/' component={Contact} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
};

export default Main;
