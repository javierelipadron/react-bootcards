import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {Router, Route, IndexRoute, Link} from 'react-router';
import {Navbar, NavBrand, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {Container} from 'react-bootcards';

import Home from './Home';
import Documentation from './Documentation';
import About from './About';

const App = React.createClass({
  render () {
    return (
      <div>
        <Navbar inverse fixedTop toggleNavKey={0}>
          <NavBrand>
            <Link to="/react-bootcards" title="Bootcards">Bootcards</Link>
          </NavBrand>
          <Nav eventKey={0}>
            <NavItem eventKey={1}>
              <LinkContainer to="/react-bootcards">
                <span><i className="fa fa-home" /> Home</span>
              </LinkContainer>
            </NavItem>
            <NavItem eventKey={2}>
              <LinkContainer to="/react-bootcards/documentation">
                <span><i className="fa fa-book" /> Documentation</span>
              </LinkContainer>
            </NavItem>
            <NavItem eventKey={3}>
              <LinkContainer to="/react-bootcards/about">
                <span><i className="fa fa-info-circle" /> About</span>
              </LinkContainer>
            </NavItem>
          </Nav>
        </Navbar>
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
});

ReactDOM.render((
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="react-bootcards/documentation" component={Documentation} />
      <Route path="react-bootcards/about" component={About} />
      <Route path="*" component={Home}/>
    </Route>
  </Router>
), document.getElementById('root'));
