import React from 'react';
import {Navbar, Nav, NavDropdown, MenuItem, NavItem} from 'react-bootstrap';

import Section from './Section';
import Highlight from './Highlight';

class DoubleNavbar extends React.Component {
  render() {
    return (
      <Section id="doc-doublenavbar">
        <h3>Double Navbar</h3>
        <p className="lead">The Double Navbar is meant for desktop and allows you to have two rows of menu options.</p>
        <div>
          <Navbar fluid className="bootcards-navbar-double"
            brand={<a title="Bootcards Starter" href="/">Bootcards Starter</a>}
            toggleNavKey={0}
          >
            <Nav right eventKey={0} className="bootcards-nav-secondary">
              <NavDropdown eventKey={1} id="doublenavbar-languages"
                title={[
                  <i key="icon" className="fa fa-globe" />,
                  <span key="title"> Languages</span>
                ]}>
                <MenuItem eventKey="1">Deutsch</MenuItem>
                <MenuItem eventKey="2">English</MenuItem>
                <MenuItem eventKey="3">Espanol</MenuItem>
              </NavDropdown>
              <NavItem eventKey={2} href="#">
                <i className="fa fa-fw fa-lock" />
                <span> Login</span>
              </NavItem>
            </Nav>
            <Nav right eventKey={3} className="bootcards-nav-primary">
              <NavDropdown eventKey={4} id="doublenavbar-home"
                title={[
                  <i key="icon" className="fa fa-fw fa-dashboard" />,
                  <span key="title"> Home</span>
                ]}>
                <MenuItem eventKey="1" href="#"><i className="fa fa-fw fa-envelope-o" /> Action</MenuItem>
                <MenuItem eventKey="2" href="#"><i className="fa fa-fw fa-film" /> Another action</MenuItem>
                <MenuItem eventKey="3" href="#"><i className="fa fa-fw fa-file-o" /> Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="4" href="#"><i className="fa fa-fw fa-bar-chart-o" /> Separated link</MenuItem>
              </NavDropdown>
              <NavItem eventKey={5} href="#">
                <i className="fa fa-fw fa-briefcase" />
                <span> Portfolio</span>
              </NavItem>
              <NavItem eventKey={6} href="#">
                <i className="fa fa-fw fa-bullhorn" />
                <span> Blog</span>
              </NavItem>
            </Nav>
          </Navbar>
        </div>
        <p>Set <code>class="has-bootcards-navbar-double"</code> on the body element to deal with the increased height of the navbar.</p>
        <Highlight>
          {'<Navbar fluid className="bootcards-navbar-double" brand={<a title="Bootcards Starter" href="/">Bootcards Starter</a>} toggleNavKey={0}>\n  <Nav right eventKey={0} className="bootcards-nav-secondary">\n    <NavDropdown eventKey={1} id="doublenavbar-languages" title={[<i key="icon" className="fa fa-globe" />, <span key="title"> Languages</span>]}>\n      <MenuItem eventKey="1">Deutsch</MenuItem>\n      <MenuItem eventKey="2">English</MenuItem>\n      <MenuItem eventKey="3">Espanol</MenuItem>\n    </NavDropdown>\n    <NavItem eventKey={2} href="#">\n      <i className="fa fa-fw fa-lock" />\n      <span> Login</span>\n    </NavItem>\n  </Nav>\n  <Nav right eventKey={3} className="bootcards-nav-primary">\n    <NavDropdown eventKey={4} id="doublenavbar-home" title={[<i key="icon" className="fa fa-fw fa-dashboard" />, <span key="title"> Home</span>]}>\n      <MenuItem eventKey="1" href="#"><i className="fa fa-fw fa-envelope-o" /> Action</MenuItem>\n      <MenuItem eventKey="2" href="#"><i className="fa fa-fw fa-film" /> Another action</MenuItem>\n      <MenuItem eventKey="3" href="#"><i className="fa fa-fw fa-file-o" /> Something else here</MenuItem>\n      <MenuItem divider />\n      <MenuItem eventKey="4" href="#"><i className="fa fa-fw fa-bar-chart-o" /> Separated link</MenuItem>\n    </NavDropdown>\n    <NavItem eventKey={5} href="#">\n      <i className="fa fa-fw fa-briefcase" />\n      <span> Portfolio</span>\n    </NavItem>\n    <NavItem eventKey={6} href="#">\n      <i className="fa fa-fw fa-bullhorn" />\n      <span> Blog</span>\n    </NavItem>\n  </Nav>\n</Navbar>'}
        </Highlight>
      </Section>
    );
  }
}

export default DoubleNavbar;
