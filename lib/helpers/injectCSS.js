module.exports = function() {
  injectStyle([
    '.ReactModal__Overlay {',
    '  background-color: rgba(255, 255, 255, 0.75);',
    '}'
  ].join('\n'));
};

function injectStyle(css) {
  var style = document.getElementById('rackt-style');
  if (!style) {
    style = document.createElement('style');
    style.setAttribute('id', 'rackt-style');
    var head = document.getElementsByTagName('head')[0];
    head.insertBefore(style, head.firstChild);
  }
  style.innerHTML = style.innerHTML+'\n'+css;
}

