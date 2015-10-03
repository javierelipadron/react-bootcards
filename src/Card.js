import React from 'react';
import classNames from 'classnames';
import {Panel} from 'react-bootstrap';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cardClassName =
      this.props.cardStyle === 'default'
        ? null
        : 'bootcards-' + this.props.cardStyle;
    return (
      <Panel {...this.props} className={classNames(this.props.className, cardClassName)}>
        {this.props.children}
      </Panel>
    );
  }

}

Card.propTypes = {
  cardStyle: React.PropTypes.oneOf(['default', 'chart', 'summary', 'media', 'file', 'richtext']),
};

Card.defaultProps = {
  cardStyle: 'default',
};

export default Card;
