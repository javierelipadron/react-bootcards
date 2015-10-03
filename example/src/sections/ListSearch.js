import React from 'react';
import {ListGroup, ListGroupItem, Row, Col, Input, Button} from 'react-bootstrap';
import {List, Card, ListGroupItemHeader, ListGroupItemText} from 'react-bootcards';

import Section from './Section';
import Highlight from './Highlight';
import Example from './Example';

class ListSearch extends React.Component {
  render () {
    return (
      <Section id="doc-listsearch">
        <h2>List Search & List Actions</h2>
        <p className="lead">A search form for when you want the user to be able to filter or search your list, and buttons for any other list functions you need.</p>
        <p>This goes at the top of your list, inside the <code>.modal-body</code>. You can add or remove functions by adding/removing columns in the containing <code>.row</code> and making sure the widths add up.</p>
        <Example>
          <List>
            <Card>
              <form>
                <Row>
                  <Col xs={9}>
                    <Input type="text" placeholder="Search Contacts...">
                      <i className="fa fa-search" />
                    </Input>
                  </Col>
                  <Col xs={3}>
                    <Button bsStyle="primary" block>
                      <i className="fa fa-plus" />
                      Add
                    </Button>
                  </Col>
                </Row>
              </form>
              <ListGroup fill>
                <ListGroupItem href="#">
                  <img src="images/Sofia Acey.jpg" className="img-rounded pull-left"/>
                  <ListGroupItemHeader>Acey, Sofia</ListGroupItemHeader>
                  <ListGroupItemText>Masung Corp.</ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem href="#">
                  <img src="images/Joseph Barish.jpg" className="img-rounded pull-left"/>
                  <ListGroupItemHeader>Barish, Joseph</ListGroupItemHeader>
                  <ListGroupItemText>Masung Corp.</ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem href="#">
                  <img src="images/Sarah Benson.jpg" className="img-rounded pull-left"/>
                  <ListGroupItemHeader>Benson, Sarah</ListGroupItemHeader>
                  <ListGroupItemText>ZetaComm</ListGroupItemText>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </List>
        </Example>
        <Highlight>
          {'<List>\n  <Card>\n    <form>\n      <Row>\n        <Col xs={9}>\n          <Input type="text" placeholder="Search Contacts...">\n            <i className="fa fa-search" />\n          </Input>\n        </Col>\n        <Col xs={3}>\n          <Button bsStyle="primary" block>\n            <i className="fa fa-plus" />\n            Add\n          </Button>\n        </Col>\n      </Row>\n    </form>\n\n    ...list markup goes here...\n\n  </Card>\n</List>'}
        </Highlight>
      </Section>
    );
  }
}

export default ListSearch;
