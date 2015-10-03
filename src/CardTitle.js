import React from 'react';
import classNames from 'classnames';

class CardTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      componentClass,
      titleClassName,
      className,
      ...props
    } = this.props;
    const Component = componentClass;
    return (
      <Component {...props} className={classNames(className, titleClassName)}>
        {this.props.children}
      </Component>
    );
  }
}

CardTitle.propTypes = {
  componentClass: React.PropTypes.string,
  titleClassName: React.PropTypes.string,
};

CardTitle.defaultProps = {
  componentClass: 'h3',
  titleClassName: 'panel-title',
};

export default CardTitle;
