var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var services = [{
  id: 'MM-IN',
  name: {
    'en': 'Micky Mouse Inflatable',
    'es': 'Inflable Mickey Mouse'
  },
  description: {
    'en': 'Get a taste of Disney Land with this 3D Micky and Minny Mouse Inflatable!',
    'es': 'Toma un viaje a Disney Land con este inflable 3D de Micky y Minny Mouse. '
  },
  price: '$125',
  image: 'hero-one',
  dimensions: '13.5ft x 13.5ft',
  tags: ['inflatable', 'medium', 'covered', 'hoop', 'frontPage']
}, {
  id: 'SM-IN',
  name: {
    'en': 'Spider-Man Inflatable',
    'es': 'Inflable Spider-Man'
  },
  description: {
    'en': 'Swing! Dive! And Jump through this Spider-Man themed inflatable!',
    'es': 'Columpea! Bucea! Y salta a traves de este inflabe Spider-Man'
  },
  price: '$125',
  image: 'hero-two',
  dimensions: '13.5ft x 13.5ft',
  tags: ['inflatable', 'medium', 'covered', 'hoop', 'frontPage']
}, {
  id: 'US-IN',
  name: {
    'en': 'Unicorn Inflatable',
    'es': 'Inflable Unicornio'
  },
  description: {
    'en': 'Enter a magical land in this small but elegant unicorn themed inflatable.',
    'es': 'Entra una tierra magica en este pequeno pero elegante inflable unicornio.'
  },
  price: '$100',
  image: 'hero-three',
  dimensions: '9.5ft x 9.5ft',
  tags: ['inflatable', 'small', 'uncovered', 'slide', 'frontPage']
}, {
  id: 'UC-IN',
  name: {
    'en': 'Unicorn Carriage Inflatable',
    'es': 'Inflable Carruaje Unicornio'
  },
  description: {
    'en': '',
    'es': ''
  },
  price: '$185',
  image: '',
  dimensions: '13.5ft x 21.5ft',
  tags: ['inflatable', 'large', 'covered', 'slide']
}, {
  id: 'UP-IN',
  name: {
    'en': 'Unicorn Park Inflatable',
    'es': 'Inflable Parque Unicornio'
  },
  description: {
    'en': '',
    'es': ''
  },
  price: '$185',
  image: '',
  dimensions: '19.5ft x 19.5ft',
  tags: ['inflatable', 'x-large', 'uncovered', 'slide', 'obstacles', 'playpen']
}, {
  id: 'PC-IN',
  name: {
    'en': 'Disney Princess Castle Inflatable',
    'es': 'Inflable Castillo Disney Princesas'
  },
  description: {
    'en': '',
    'es': ''
  },
  price: '$190',
  image: '',
  dimensions: '18.5ft x 18ft',
  tags: ['inflatable', 'x-large', 'covered', 'slide', 'obstacles']
}, {
  id: 'TS-IN',
  name: {
    'en': 'Combo Toy Story Inflatable',
    'es': 'Inflable Toy Story Combo'
  },
  description: {
    'en': '',
    'es': ''
  },
  price: '$150/$200',
  image: '',
  dimensions: '15ft x 17ft',
  tags: ['inflatable', 'medium', 'large', 'uncovered', 'slide', 'water-slide']
}, {
  id: 'PP-IN',
  name: {
    'en': 'Paw Patrol Inflatable',
    'es': 'Inflable Paw Patrol'
  },
  description: {
    'en': '',
    'es': ''
  },
  price: '$175',
  image: '',
  dimensions: '15ft x 17.5ft',
  tags: ['inflatable', 'large', 'uncovered', 'slide', 'obstacles']
}, {
  id: 'CS-IN',
  name: {
    'en': 'Combo Mermaid Inflatable',
    'es': 'Inflable Sirenita Combo'
  },
  description: {
    'en': '',
    'es': ''
  },
  price: '$200',
  image: '',
  dimensions: '18ft x 19ft',
  tags: ['inflatable', 'large', 'covered', 'slide', 'water-slide']
}, {
  id: 'CW-WS',
  name: {
    'en': 'Water Slide - Colors',
    'es': 'Water Slide Colores'
  },
  description: {
    'en': '',
    'es': ''
  },
  price: '$200',
  image: '',
  dimensions: 'W:13.5ft x L:21.5ft x H:15ft',
  tags: ['inflatable', 'large', 'uncovered', 'slide', 'water-slide']
}, {
  id: 'OW-WS',
  name: {
    'en': 'Orange Water Slide',
    'es': 'Water Slide Naranja'
  },
  description: {
    'en': '',
    'es': ''
  },
  price: '$225',
  image: '',
  dimensions: 'W:9ft10i x L:23.7ft x H:14ft',
  tags: ['inflatable', 'large', 'uncovered', 'slide', 'water-slide']
}, {
  id: 'DW-WS',
  name: {
    'en': 'Double Water Slide',
    'es': 'Water Slide Doble'
  },
  description: {
    'en': '',
    'es': ''
  },
  price: '$275',
  image: '',
  dimensions: 'W:16.5ft x L:32.2ft x H:26.3ft',
  tags: ['inflatable', 'x-large', 'uncovered', 'slide', 'water-slide']
}, {
  id: 'TNT-SP',
  name: {
    'en': '10ft x 20ft Tent',
    'es': '10ft x 20ft Carpas'
  },
  description: {
    'en': '',
    'es': ''
  },
  price: '$200',
  image: '',
  dimensions: '10ft x 20ft',
  tags: ['tent', 'shade', 'medium']
}, {
  id: 'TWT-SP',
  name: {
    'en': '20ft x 40ft Tent',
    'es': '20ft x 40ft Carpas'
  },
  description: {
    'en': '',
    'es': ''
  },
  price: '$400',
  image: '',
  dimensions: '20ft x 40ft',
  tags: ['tent', 'shade', 'large']
}, {
  id: 'TBC-SP',
  name: {
    'en': 'Table with 6 Chairs Combo',
    'es': 'Mesa con 6 Sillas Combo'
  },
  description: {
    'en': '',
    'es': ''
  },
  price: '$12.50',
  image: '',
  dimensions: '6ft x 3ft',
  tags: ['table', 'chair', 'supplement']
}, {
  id: 'PC-FD',
  name: {
    'en': 'Popcorn Machine',
    'es': 'Maquina De Palomita'
  },
  description: {
    'en': '',
    'es': ''
  },
  price: '$75',
  image: '',
  dimensions: '',
  tags: ['food', 'stands']
}, {
  id: 'CC-FD',
  name: {
    'en': 'Cotton Candy Machine',
    'es': 'Maquina de Algodon'
  },
  description: {
    'en': '',
    'es': ''
  },
  price: '$75',
  image: '',
  dimensions: '',
  tags: ['food', 'stands']
}, {
  id: 'IC-FD',
  name: {
    'en': 'Ice Cone Machine',
    'es': 'Maquina de Raspados'
  },
  description: {
    'en': '',
    'es': ''
  },
  price: '$75',
  image: '',
  dimensions: '',
  tags: ['food', 'stands']
}, {
  id: 'TC-FD',
  name: {
    'en': 'Tacos',
    'es': 'Taquiza'
  },
  description: {
    'en': '',
    'es': ''
  },
  price: '$10',
  image: '',
  dimensions: '',
  tags: ['food', 'stands']
}];

var Router = ReactRouterDOM.HashRouter;
var _ReactRouterDOM = ReactRouterDOM,
    Route = _ReactRouterDOM.Route,
    Link = _ReactRouterDOM.Link,
    Switch = _ReactRouterDOM.Switch;
var _React = React,
    useState = _React.useState;

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
    },
    navServices: {
      'en': 'Rentals',
      'es': 'Renta'
    },
    footerAbout: {
      'en': 'About us',
      'es': 'Sobre nosotros'
    },
    footerInflatables: {
      'en': 'Inflatables',
      'es': 'Inflables'
    }
  };

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      'nav',
      { className: 'navbar navbar-expand-lg' },
      React.createElement('div', { className: 'left-rounded-corner' }),
      React.createElement(
        'div',
        { className: 'container-fluid' },
        React.createElement(
          Link,
          { className: 'navbar-brand', to: '/' },
          React.createElement(
            'h1',
            null,
            'Light Rodeo Rentals'
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
              { className: 'nav-item' },
              React.createElement(
                Link,
                { className: 'nav-link', to: '/' },
                navItems.navServices[language]
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
      ),
      React.createElement('div', { className: 'right-rounded-corner' })
    ),
    props.children,
    React.createElement(
      'footer',
      { className: 'mt-3 p-3 text-center' },
      React.createElement(
        'div',
        { className: 'container-fluid' },
        React.createElement(
          'div',
          { className: 'row southern-text' },
          React.createElement(
            'div',
            { className: 'col-3' },
            React.createElement(
              'h3',
              null,
              navItems.footerAbout[language]
            )
          ),
          React.createElement(
            'div',
            { className: 'col-3' },
            React.createElement(
              'h3',
              null,
              navItems.footerInflatables[language]
            )
          ),
          React.createElement(
            'div',
            { className: 'col-3' },
            React.createElement(
              'h3',
              null,
              navItems.footerAbout[language]
            )
          ),
          React.createElement(
            'div',
            { className: 'col-3' },
            React.createElement(
              'h3',
              null,
              navItems.footerAbout[language]
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'col-12' },
            React.createElement(
              'div',
              { className: '', id: 'legal' },
              React.createElement(
                'span',
                null,
                React.createElement(
                  'small',
                  null,
                  '\xA92023 Mario Perez'
                )
              )
            )
          )
        )
      )
    )
  );
};

//Hero 

var Hero = function (_React$Component) {
  _inherits(Hero, _React$Component);

  function Hero(props) {
    _classCallCheck(this, Hero);

    var _this = _possibleConstructorReturn(this, (Hero.__proto__ || Object.getPrototypeOf(Hero)).call(this, props));

    _this.heroSlider = function (num) {
      num++;
      var setDots = [0, 1, 2];
      _this.setState({ count: num, dots: setDots.map(function (val) {
          return val === num % _this.state.frontPageInflatables.length;
        }) });
    };

    _this.getDV = function (e) {
      window.clearInterval(_this.heroTimer);
      var dataValue = e.target.getAttribute('data-value');
      _this.heroSlider(dataValue);
    };

    _this.state = {
      heroTimer: null,
      count: 0,
      frontPageInflatables: services.filter(function (inflatables) {
        return inflatables.tags.includes('frontPage');
      }),
      dots: [true, false, false]
    };
    return _this;
  }

  _createClass(Hero, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (!this.heroTimer) this.heroTimer = setInterval(function () {
        _this2.heroSlider(_this2.state.count);
      }, 10000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.heroTimer) {
        window.clearInterval(this.heroTimer);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var language = this.props.language;
      var _state = this.state,
          frontPageInflatables = _state.frontPageInflatables,
          count = _state.count,
          dots = _state.dots;
      var _frontPageInflatables = frontPageInflatables[count % frontPageInflatables.length],
          name = _frontPageInflatables.name,
          description = _frontPageInflatables.description,
          image = _frontPageInflatables.image;


      return React.createElement(
        'div',
        { className: 'row flex-nowrap scrollable-row' },
        React.createElement(
          'div',
          { className: 'col-12', id: 'fadeAnimation', key: image },
          React.createElement(
            'div',
            { className: 'd-flex align-items-end hero', id: image },
            React.createElement(
              'div',
              { className: 'black-transparent text-white' },
              React.createElement(
                'div',
                { className: 'hero-descriptor pt-2' },
                React.createElement(
                  'div',
                  { className: 'hero-text d-inline text-start' },
                  React.createElement(
                    'h5',
                    { className: 'southern-text' },
                    name[language]
                  ),
                  React.createElement(
                    'h6',
                    { className: 'pt-2' },
                    description[language]
                  ),
                  React.createElement(
                    'div',
                    { className: 'radio-buttons d-flex justify-content-center align-items-end' },
                    React.createElement('span', { className: dots[0] ? 'active-dot' : 'dot', 'data-value': '-1', onClick: this.getDV }),
                    React.createElement('span', { className: dots[1] ? ' active-dot' : 'dot', 'data-value': '0', onClick: this.getDV }),
                    React.createElement('span', { className: dots[2] ? 'active-dot' : 'dot', 'data-value': '1', onClick: this.getDV })
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Hero;
}(React.Component);

var Inventory = function Inventory(props) {
  var inventoryImage = props.inventoryImage,
      inventoryText = props.inventoryText;


  return React.createElement(
    'div',
    { className: 'col-12 col-md-4' },
    React.createElement(
      'div',
      { className: 'holder' },
      React.createElement('div', { className: 'inventory-1', id: inventoryImage }),
      React.createElement(
        'div',
        { className: 'white-holder text-center' },
        React.createElement(
          'h3',
          null,
          inventoryText
        )
      )
    )
  );
};

//Home
var Home = function Home(props) {
  var language = props.language;

  var slogan = {
    'en': 'Turn every party into an adventure!',
    'es': 'Haz cada fiesta una aventura!'
  };

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      'div',
      { className: 'container-fluid' },
      React.createElement(Hero, { language: language }),
      React.createElement(
        'div',
        { className: 'mt-5 southern-text slogan' },
        React.createElement(
          'h4',
          { className: 'ps-5' },
          slogan[language]
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'container-fluid inventory mt-5' },
      React.createElement(
        'div',
        { className: 'inventory-list row d-flex justify-content-between' },
        React.createElement(Inventory, { inventoryImage: 'inventory-one', inventoryText: language === 'es' ? 'Inflables' : 'Inflatables' }),
        React.createElement(Inventory, { inventoryImage: 'inventory-two', inventoryText: 'Water Slides' }),
        React.createElement(Inventory, { inventoryImage: 'inventory-three', inventoryText: language === 'es' ? 'Taquiza' : 'Taco Stand' })
      )
    )
  );
};

//Output
var App = function App() {
  var _useState = useState('es'),
      _useState2 = _slicedToArray(_useState, 2),
      language = _useState2[0],
      setLanguague = _useState2[1];

  var changeLanguage = function changeLanguage(e) {
    setLanguague(e.target.value);
  };

  return React.createElement(
    Router,
    null,
    React.createElement(
      Layout,
      { language: language, languageChange: changeLanguage },
      React.createElement(
        Switch,
        null,
        React.createElement(Route, { path: '/', exact: true, render: function render(props) {
            return React.createElement(Home, Object.assign({}, props, { language: language }));
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
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));