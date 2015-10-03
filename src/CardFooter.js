import React from 'react';
import classNames from 'classnames';

class CardFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      componentClass,
      footerClassName,
      className,
      ...props
    } = this.props;
    const Component = componentClass;
    return (
      <Component {...props} className={classNames(className, footerClassName)}>
        {this.props.children}
      </Component>
    );
  }
}

CardFooter.propTypes = {
  componentClass: React.PropTypes.string,
  footerClassName: React.PropTypes.string,
};

CardFooter.defaultProps = {
  componentClass: 'div',
  footerClassName: 'panel-footer',
  fill: true,
};

export default CardFooter;
