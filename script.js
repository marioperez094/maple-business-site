var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Router = ReactRouterDOM.HashRouter;
var _ReactRouterDOM = ReactRouterDOM,
    Route = _ReactRouterDOM.Route,
    Link = _ReactRouterDOM.Link,
    Switch = _ReactRouterDOM.Switch;

//Layout

var Layout = function Layout(props) {
  var language = props.language,
      languageChange = props.languageChange;

  var navItems = {
    navHome: {
      'en': 'Home',
      'es': 'Inicio'
    },
    navLngSelect: {
      'en': 'Language',
      'es': 'Idioma'
    }
  };

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      'nav',
      { className: 'navbar navbar-expand-lg bg-light' },
      React.createElement(
        'div',
        { className: 'container-fluid' },
        React.createElement(
          Link,
          { className: 'navbar-brand', to: '/' },
          React.createElement(
            'h1',
            null,
            'Maple Enterprise, LLC.'
          )
        ),
        React.createElement(
          'button',
          { className: 'navbar-toggler', type: 'button', 'data-bs-toggle': 'collapse', 'data-bs-target': '#navbarSupportedContent', 'aria-controls': 'navbarSupportedContent', 'aria-expanded': 'false', 'aria-label': 'Toggle navigation' },
          React.createElement('span', { className: 'navbar-toggler-icon' })
        ),
        React.createElement(
          'div',
          { className: 'collapse navbar-collapse', id: 'navbarSupportedContent' },
          React.createElement(
            'ul',
            { className: 'navbar-nav me-auto me-lg-0 ms-lg-auto mb-2 mb-lg-0 text-center' },
            React.createElement(
              'li',
              { className: 'nav-item' },
              React.createElement(
                Link,
                { className: 'nav-link', to: '/' },
                navItems.navHome[language]
              )
            ),
            React.createElement(
              'li',
              { className: 'nav-item dropdown' },
              React.createElement(
                Link,
                { className: 'nav-link dropdown-toggle', to: '/', role: 'button', 'data-bs-toggle': 'dropdown', 'aria-expanded': 'false' },
                navItems.navLngSelect[language]
              ),
              React.createElement(
                'ul',
                { className: 'dropdown-menu' },
                React.createElement(
                  'li',
                  null,
                  React.createElement(
                    Link,
                    { 'data-value': 'en', onClick: function onClick(e) {
                        return languageChange(e);
                      }, className: 'dropdown-item', to: '/' },
                    'English'
                  ),
                  React.createElement(
                    Link,
                    { 'data-value': 'es', onClick: function onClick(e) {
                        return languageChange(e);
                      },
                      className: 'dropdown-item', to: '/' },
                    'Espanol'
                  )
                )
              )
            )
          )
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'container-fluid py-3' },
      props.children
    ),
    React.createElement(
      'footer',
      { className: 'p-3 bg-light text-center' },
      React.createElement(
        'div',
        { className: 'container-fluid' },
        React.createElement(
          'div',
          { className: '', id: 'legal' },
          React.createElement(
            'span',
            null,
            '\xA92023 Mario Perez'
          )
        )
      )
    )
  );
};

//Output

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      language: 'es'
    };

    _this.languageChange = _this.languageChange.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'languageChange',
    value: function languageChange(event) {
      this.setState({ language: event.target.getAttribute('data-value') });
    }
  }, {
    key: 'render',
    value: function render() {
      var language = this.state.language;


      return React.createElement(
        Router,
        null,
        React.createElement(
          Layout,
          { language: language, languageChange: this.languageChange },
          React.createElement(
            Switch,
            null,
            React.createElement(Route, { path: '/', exact: true, render: function render() {
                return React.createElement(
                  'h1',
                  null,
                  'Hello world'
                );
              } }),
            React.createElement(Route, { render: function render() {
                return React.createElement(
                  'h1',
                  null,
                  '404 Not found'
                );
              } })
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.querySelector('#root'));