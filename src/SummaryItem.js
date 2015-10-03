import React from 'react';
import classNames from 'classnames';

class SummaryItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      componentClass,
      itemClassName,
      className,
      ...props
    } = this.props;
    const Component = componentClass;
    return (
      <Component {...props} className={classNames(className, itemClassName)}>
        {this.props.children}
      </Component>
    );
  }
}

SummaryItem.propTypes = {
  componentClass: React.PropTypes.string,
  itemClassName: React.PropTypes.string,
};

SummaryItem.defaultProps = {
  componentClass: 'a',
  itemClassName: 'bootcards-summary-item',
};

export default SummaryItem;
