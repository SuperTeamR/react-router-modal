'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalWithBackdrop = function (_React$Component) {
  _inherits(ModalWithBackdrop, _React$Component);

  function ModalWithBackdrop() {
    _classCallCheck(this, ModalWithBackdrop);

    return _possibleConstructorReturn(this, (ModalWithBackdrop.__proto__ || Object.getPrototypeOf(ModalWithBackdrop)).apply(this, arguments));
  }

  _createClass(ModalWithBackdrop, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return this.props.context;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          component = _props.component,
          props = _props.props,
          onBackdropClick = _props.onBackdropClick,
          backdropClassName = _props.backdropClassName,
          modalClassName = _props.modalClassName;


      var Component = component;
      var str = typeof(Component);
      var item;
      
      if (str == 'object') {
        item = _react2.default.createElement('div',{ class: 'someclassname', onClick: onBackdropClick });
      } else {
        item = _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('div', { className: backdropClassName || '', onClick: onBackdropClick }),
          _react2.default.createElement(
            'div',
            { className: modalClassName || '' },
            !Component && children,
            Component && _react2.default.createElement(Component, _extends({}, props, { context: this.props.context }))
          )
        );
      }    
        
      return item;
    }
  }]);

  return ModalWithBackdrop;
}(_react2.default.Component);

ModalWithBackdrop.childContextTypes = {
  setId: function setId() {}
};
exports.default = ModalWithBackdrop;
module.exports = exports['default'];