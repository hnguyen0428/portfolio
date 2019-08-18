import React from 'react';
import Logger from '../firebase/logger';
import Flexbox from './components/Flexbox';
import Navbar from './components/Navbar';
import NavbarUnit from './components/NavbarUnit';
import NavbarUnitIcon from './components/NavbarUnitIcon';
import profile from '../static/Profile';

import style from './style';
import AboutMe from "./sections/AboutMe";
import WorkExperience from "./sections/WorkExperience";
import Projects from "./sections/Projects";
import {logout, fetchLoginState} from "../firebase/auth";
import {getEditMode} from "./common/utils";


class Home extends React.Component {
  constructor(props) {
    super(props);

    let edit = getEditMode();
    this.state = {
      loggedIn: false,
      edit: edit,
    };
  }

  componentDidMount() {
    let hasLogged = sessionStorage.getItem('hasLogged');
    if (hasLogged !== '1') {
      Logger.genLog({
        action: 'view_portfolio',
        description: 'Viewed Portfolio',
      }, (_) => {
        sessionStorage.setItem('hasLogged', '1');
      });
    }
  }

  componentWillMount() {
    fetchLoginState((loggedIn) => this.setState({loggedIn: loggedIn}));
  }

  onClickLogout = (e) => {
    logout(() => {
      this.setState({loggedIn: false});
    }, (e) => {
      alert(e);
    });
  };

  render() {
    let allowEdit = this.state.loggedIn && this.state.edit;

    let root = process.env.NODE_ENV === 'development' ? '/' : '/portfolio/';
    return (
      <Flexbox style={style.root} alignItems="center">
        <Navbar blur>
          <NavbarUnit label="Daniel Nguyen" position="left" fontWeight={500}
                      paddingHorizontal={16} href={root}/>
          {
            this.state.loggedIn ?
              <NavbarUnit label="Logout" onClick={this.onClickLogout}
                          paddingHorizontal={16}/> :
              null
          }
          <NavbarUnit label="Resume" href="assets/Resume.pdf" target="_blank"
                      logClick={true} logDescription="Visited Resume" allBorder
                      borderRadius={6}/>
          <NavbarUnitIcon src={"assets/github_icon.png"}
                          href={profile.githubLink} target="_blank"
                          logClick={true} logDescription="Visited Github"/>
          <NavbarUnitIcon src={"assets/linkedin_icon.png"}
                          href={profile.linkedinLink} target="_blank"
                          logClick={true} logDescription="Visited LinkedIn"/>
          <NavbarUnitIcon src={"assets/facebook_icon.png"}
                          href={profile.fbLink} target="_blank"
                          logClick={true} logDescription="Visited Facebook"/>
        </Navbar>

        <AboutMe allowEdit={allowEdit}/>
        <WorkExperience allowEdit={allowEdit}/>
        <Projects allowEdit={allowEdit}/>
      </Flexbox>
    );
  }
}


export default Home;