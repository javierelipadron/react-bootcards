import React from 'react';
import classNames from 'classnames';

class Section extends React.Component {
  render() {
    return (
      <div {...this.props} className={classNames(this.props.className, 'bs-docs-section')}>
        {this.props.children}
      </div>
    );
  }
}

export default Section;
