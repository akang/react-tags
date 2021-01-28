import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import { canDrag } from './utils';

import RemoveComponent from './RemoveComponent';

const ItemTypes = { TAG: 'tag' };

class Tag extends Component {
  render() {
    const { props } = this;
    const label = props.tag[props.labelField];
    const {
      isDragging,
      connectDropTarget,
      readOnly,
      tag,
      classNames,
      index,
    } = props;
    const { className = '' } = tag;
    // eslint-disable-next-line
    const tagComponent = ( <span
      className={ClassNames('tag-wrapper', classNames.tag, className)}
      style={{opacity: 1, 'cursor': 'auto'}}
      onClick={props.onTagClicked}
      onTouchStart={props.onTagClicked}>
      {label}
      <RemoveComponent
        tag={props.tag}
        className={classNames.remove}
        removeComponent={props.removeComponent}
        onRemove={props.onDelete}
        readOnly={readOnly}
        index={index}
        onKeyDown={onkeydown}
      />
    </span>
    );
    return (tagComponent);
  }
}

Tag.propTypes = {
  labelField: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
  tag: PropTypes.shape({
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    key: PropTypes.string,
  }),
  removeComponent: PropTypes.func,
  onTagClicked: PropTypes.func,
  classNames: PropTypes.object,
  readOnly: PropTypes.bool,
  index: PropTypes.number.isRequired,
};

Tag.defaultProps = {
  labelField: 'text',
  readOnly: false,
};

export default (Tag);
