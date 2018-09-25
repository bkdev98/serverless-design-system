'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _Card = require('../Card');

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const FieldContainer = (0, _styledComponents2.default)(_Card2.default)`
  position: relative;
  cursor: default;
  outline: none;
  ${_styledSystem.background}
  ${_styledSystem.backgroundSize}
  ${_styledSystem.backgroundRepeat}
  ${_styledSystem.backgroundPosition}

  &:hover {
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
  }
`;

FieldContainer.defaultProps = {
  o: 'hidden',
  background: 'white',
  color: 'black',
  py: '14.5px',
  pl: '10px',
  pr: '52px',
  transition: 'all 200ms ease',
  border: '1px solid #ccc'
};

exports.default = FieldContainer;