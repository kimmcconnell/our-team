import React from 'react';
import Nav from './Nav';
import Header from './Header';
import PeopleList from './PeopleList';
import Profile from './Profile';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

function App() {
    return (
        <div>
          <Nav/>
          <Header/>
            <Switch>
                <Route exact path='/' component={PeopleList} />
                <Route path='/Profile' component={Profile}></Route>
                <Route component={Error404} />
            </Switch>
            <style jsx global>{`
              body {

                margin: 0;
                padding: 0;
                font-family: "Helvetica", "Arial", "sans-serif";
              }

              // Header {
              //   position: static;
              // }

          `}</style>
        </div>
    );
}



export default App;
