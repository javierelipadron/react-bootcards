import React from 'react';
import {Card, CardHeader, CardTitle, CardFooter} from 'react-bootcards';

import Section from './Section';
import Highlight from './Highlight';
import Example from './Example';

class RichTextCard extends React.Component {
  render() {
    return (
      <Section id="doc-richtextcard">
        <h3>Rich Text Cards</h3>
        <p className="lead">Rich Text Cards are designed for longer passages of text, which may include various heading levels, paragraphs and lists.</p>
        <p>They have more padding around the <code>.panel-content</code> to help readability.</p>
        <Example>
          <Card cardStyle="richtext">
            <CardHeader>
              <CardTitle>Rich Text Card Heading</CardTitle>
            </CardHeader>
            <p className="lead">Lead body copy vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</p>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis pretium nisl. Etiam at vestibulum purus, sit amet blandit mi. Duis enim lectus, tempus nec varius sed, sollicitudin quis velit. Fusce quis sem porttitor, euismod ante vitae, ultricies erat.</p>
            <ul>
              <li>Duis cursus dui et turpis gravida sollicitudin.</li>
              <li>Donec eget mauris feugiat, euismod purus nec, feugiat neque.</li>
              <li>Nunc erat est, molestie eget magna in, consectetur euismod lorem.</li>
            </ul>
            <ol>
              <li>Sed luctus congue orci quis tempus.</li>
              <li>Praesent in viverra lorem.</li>
              <li>Suspendisse augue lacus, porta quis imperdiet at, posuere vel nulla.</li>
            </ol>
            <CardFooter>
              <small>Built with Bootcards - Rich Text Card</small>
            </CardFooter>
          </Card>
        </Example>
        <Highlight>
          {'<Card cardStyle="richtext">\n  <CardHeader>\n    <CardTitle>Rich Text Card Heading</CardTitle>\n  </CardHeader>\n  <p className="lead">Lead body copy vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</p>\n  <h1>Heading 1</h1>\n  <h2>Heading 2</h2>\n  <h3>Heading 3</h3>\n  <h4>Heading 4</h4>\n  <h5>Heading 5</h5>\n  <h6>Heading 6</h6>\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis pretium nisl. Etiam at vestibulum purus, sit amet blandit mi. Duis enim lectus, tempus nec varius sed, sollicitudin quis velit. Fusce quis sem porttitor, euismod ante vitae, ultricies erat.</p>\n  <ul>\n    <li>Duis cursus dui et turpis gravida sollicitudin.</li>\n    <li>Donec eget mauris feugiat, euismod purus nec, feugiat neque.</li>\n    <li>Nunc erat est, molestie eget magna in, consectetur euismod lorem.</li>\n  </ul>\n  <ol>\n    <li>Sed luctus congue orci quis tempus.</li>\n    <li>Praesent in viverra lorem.</li>\n    <li>Suspendisse augue lacus, porta quis imperdiet at, posuere vel nulla.</li>\n  </ol>\n  <CardFooter>\n    <small>Built with Bootcards - Rich Text Card</small>\n  </CardFooter>\n</Card>'}
        </Highlight>
      </Section>
    );
  }
}

export default RichTextCard;
