import React from 'react';
import {ButtonGroup, Button, Input} from 'react-bootstrap';
import {Card, CardHeader, CardTitle, CardFooter} from 'react-bootcards';

import Section from './Section';
import Highlight from './Highlight';
import Example from './Example';

class FormCard extends React.Component {
  render() {
    return (
      <Section id="doc-formcard">
        <h2>Form Cards</h2>
        <p className="lead">Form Cards are used for user input in your app.</p>
        <p>Replace the default <code>.panel-body</code> with a <code>&lt;form&gt;</code>.</p>
        <Example>
          <Card>
            <CardHeader className="clearfix">
              <CardTitle className="pull-left">Form Card Title</CardTitle>
              <ButtonGroup className="pull-right">
                <Button bsStyle="danger">
                  <i className="fa fa-times" />
                  Cancel
                </Button>
                <Button bsStyle="success">
                  <i className="fa fa-check" />
                  Save
                </Button>
              </ButtonGroup>
            </CardHeader>
            <form className="form-horizontal">
              <Input
                type="text"
                label="Name"
                labelClassName="col-xs-3"
                wrapperClassName="col-xs-9"
                defaultValue="John Smith"/>
              <Input
                type="select"
                label="Occupation"
                labelClassName="col-xs-3"
                wrapperClassName="col-xs-9"
                defaultValue="Developer"
              >
                <option>Designer</option>
                <option>Developer</option>
                <option>Salesman</option>
              </Input>
              <Input
                type="textarea"
                label="Description"
                labelClassName="col-xs-3"
                wrapperClassName="col-xs-9"
                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris tellus, vehicula ut tellus id, suscipit dapibus tortor. Integer viverra turpis ac fringilla hendrerit. Sed faucibus posuere felis et pellentesque. Cras varius tortor vitae molestie tempor. Proin ut viverra elit, ac gravida tortor."
                rows="6"
              />
            </form>
            <CardFooter>
              <small>Built with Bootcards - Form Card</small>
            </CardFooter>
          </Card>
        </Example>
        <Highlight>
          {'<Card>\n  <CardHeader className="clearfix">\n    <CardTitle className="pull-left">Form Card Title</CardTitle>\n    <ButtonGroup className="pull-right">\n      <Button bsStyle="danger">\n        <i className="fa fa-times" />\n        Cancel\n      </Button>\n      <Button bsStyle="success">\n        <i className="fa fa-check" />\n        Save\n      </Button>\n    </ButtonGroup>\n  </CardHeader>\n  <form className="form-horizontal">\n    <Input type="text" label="Name" labelClassName="col-xs-3" wrapperClassName="col-xs-9" defaultValue="John Smith" />\n    <Input type="select" label="Occupation" labelClassName="col-xs-3" wrapperClassName="col-xs-9" defaultValue="Developer">\n      <option>Designer</option>\n      <option>Developer</option>\n      <option>Salesman</option>\n    </Input>\n    <Input type="textarea" label="Description" labelClassName="col-xs-3" wrapperClassName="col-xs-9" defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris tellus, vehicula ut tellus id, suscipit dapibus tortor. Integer viverra turpis ac fringilla hendrerit. Sed faucibus posuere felis et pellentesque. Cras varius tortor vitae molestie tempor. Proin ut viverra elit, ac gravida tortor." rows="6" />\n  </form>\n  <CardFooter>\n    <small>Built with Bootcards - Form Card</small>\n  </CardFooter>\n</Card>'}
        </Highlight>
      </Section>
    );
  }
}

export default FormCard;
