import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Profile from './pages/profile/profile.components';
import Skills from './pages/skills/skills.components';
import Education from './pages/education/education.components';
import PrevExp from './pages/previous/prev_proj.components';
import SideDrawer from './components/sidedrawer/sidedrawer.components';

function App() {
  return (
    <div className="App" id="App">
      <SideDrawer pageWrapId="page-wrap" outerContainerId="App"/>
      <div id="page-wrap">
        <Route exact path='/' component={Profile}/>
        <Route path='/skills' component={Skills}/>
        <Route path='/education' component={Education}/>
        <Route path='/prev_projects' component={PrevExp}/>
      </div>
    </div>
  );
}

export default App;
