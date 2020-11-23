import React from 'react';
import classnames from 'classnames';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".index-module_large__3gmyR {\n  font-size: 30px;\n}\n.index-module_bold__2TTqu {\n  font-weight: bold;\n}\n";
var styles = {"large":"index-module_large__3gmyR","bold":"index-module_bold__2TTqu"};
styleInject(css);

function index (props) {
  return /*#__PURE__*/React.createElement("button", {
    className: classnames(styles.large, styles.bold),
    style: {
      color: props.color
    }
  }, props.children);
}

export default index;
