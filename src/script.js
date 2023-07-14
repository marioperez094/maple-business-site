const Router = ReactRouterDOM.HashRouter;
const { Route, Link, Switch } = ReactRouterDOM;

const services = [{
  id: 'MM-IN',
  name: {
    'en': 'Micky Mouse Inflatable',
    'es': 'Inflable Mickey Mouse',
  },
  description: {
    'en': 'Get a taste of Disney Land with this 3D Micky and Minny Mouse Inflatable!',
    'es': 'Toma un viaje a Disney Land con este inflable 3D de Micky y Minny Mouse. '
  },
  price: '$125',
  image: 'hero-one',
  dimensions: '13.5ft x 13.5ft',
  tags: ['inflatable', 'medium', 'covered', 'hoop'],
}, {
  id: 'SM-IN',
  name: {
    'en': 'Spider-Man Inflatable',
    'es': 'Inflable Spider-Man',
  },
  description: {
    'en': 'Swing! Dive! And Jump through this Spider-Man themed inflatable!',
    'es': 'Columpea! Bucea! Y salta a traves de este inflabe Spider-Man'
  },
  price: '$125',
  image: 'hero-two',
  dimensions: '13.5ft x 13.5ft',
  tags: ['inflatable', 'medium', 'covered', 'hoop'],
}, {
  id: 'US-IN',
  name: {
    'en': 'Unicorn Inflatable',
    'es': 'Inflable Unicornio',
  },
  description: {
    'en': 'Enter a magical land in this small but elegant unicorn themed inflatable.',
    'es': 'Entra en una tierra magica en este pequeno pero elegante inflable unicornio.'
  },
  price: '$100',
  image: 'hero-three',
  dimensions: '9.5ft x 9.5ft',
  tags: ['inflatable', 'small', 'uncovered', 'slide'],
}, {
  id: 'UC-IN',
  name: {
    'en': 'Unicorn Carriage Inflatable',
    'es': 'Inflable Carruaje Unicornio',
  },
  description: {
    'en': '',
    'es': ''
  },
  price: '$185',
  image: '',
  dimensions: '13.5ft x 21.5ft',
  tags: ['inflatable', 'large', 'covered', 'slide' ],
}, {
  id: 'UP-IN',
  name: {
    'en': 'Unicorn Park Inflatable',
    'es': 'Inflable Parque Unicornio',
  },
  description: {
    'en': '',
    'es': ''
  },
  price: '$185',
  image: '',
  dimensions: '19.5ft x 19.5ft',
  tags: ['inflatable', 'x-large', 'uncovered', 'slide', 'obstacles', 'playpen'],
}, {
  id: 'PC-IN',
  name: {
    'en': 'Disney Princess Castle Inflatable',
    'es': 'Inflable Castillo Disney Princesas',
  },
  description: {
    'en': '',
    'es': ''
  },
  price: '$190',
  image: '',
  dimensions: '18.5ft x 18ft',
  tags: ['inflatable', 'x-large', 'covered', 'slide', 'obstacles'],
}, {
  id: 'TS-IN',
  name: {
    'en': 'Combo Toy Story Inflatable',
    'es': 'Inflable Toy Story Combo',
  },
  description: {
    'en': '',
    'es': ''
  },
  price: '$150/$200',
  image: '',
  dimensions: '15ft x 17ft',
  tags: ['inflatable', 'medium', 'large', 'uncovered', 'slide', 'waterSlide'],
}, {
  id: 'PP-IN',
  name: {
    'en': 'Paw Patrol Inflatable',
    'es': 'Inflable Paw Patrol',
  },
  description: {
    'en': '',
    'es': ''
  },
  price: '$175',
  image: '',
  dimensions: '15ft x 17.5ft',
  tags: ['inflatable', 'large', 'uncovered', 'slide', 'obstacles'],
}, {
  id: 'CS-IN',
  name: {
    'en': 'Combo Mermaid Inflatable',
    'es': 'Inflable Sirenita Combo',
  },
  description: {
    'en': '',
    'es': ''
  },
  price: '$200',
  image: '',
  dimensions: '18ft x 19ft',
  tags: ['inflatable', 'large', 'covered', 'slide', 'waterSlide'],
}, {
  id: 'CW-WS',
  name: {
    'en': 'Water Slide - Colors',
    'es': 'Water Slide Colores',
  },
  description: {
    'en': '',
    'es': ''
  },
  price: '$200',
  image: '',
  dimensions: 'W:13.5ft x L:21.5ft x H:15ft',
  tags: ['inflatable', 'large', 'uncovered', 'slide', 'waterSlide'],
}, {
  id: 'OW-WS',
  name: {
    'en': 'Orange Water Slide',
    'es': 'Water Slide Naranja',
  },
  description: {
    'en': '',
    'es': ''
  },
  price: '$225',
  image: '',
  dimensions: 'W:9ft10i x L:23.7ft x H:14ft',
  tags: ['inflatable', 'large', 'uncovered', 'slide', 'waterSlide'],
}, {
  id: 'DW-WS',
  name: {
    'en': 'Double Water Slide',
    'es': 'Water Slide Doble',
  },
  description: {
    'en': '',
    'es': ''
  },
  price: '$275',
  image: '',
  dimensions: 'W:16.5ft x L:32.2ft x H:26.3ft',
  tags: ['inflatable', 'x-large', 'uncovered', 'slide', 'waterSlide'],
}, {
  id: 'TNT-SP',
  name: {
    'en': '10ft x 20ft Tent',
    'es': '10ft x 20ft Carpas',
  },
  description: {
    'en': '',
    'es': ''
  },
  price: '$200',
  image: '',
  dimensions: '10ft x 20ft',
  tags: ['tent', 'shade', 'medium'],
}, {
  id: 'TWT-SP',
  name: {
    'en': '20ft x 40ft Tent',
    'es': '20ft x 40ft Carpas',
  },
  description: {
    'en': '',
    'es': ''
  },
  price: '$400',
  image: '',
  dimensions: '20ft x 40ft',
  tags: ['tent', 'shade', 'large'],
}, {
  id: 'TBC-SP',
  name: {
    'en': 'Table with 6 Chairs Combo',
    'es': 'Mesa con 6 Sillas Combo',
  },
  description: {
    'en': '',
    'es': ''
  },
  price: '$12.50',
  image: '',
  dimensions: '6ft x 3ft',
  tags: ['table', 'chair', 'supplement'],
}, {
  id: 'PC-FD',
  name: {
    'en': 'Popcorn Machine',
    'es': 'Maquina De Palomita',
  },
  description: {
    'en': '',
    'es': ''
  },
  price: '$75',
  image: '',
  dimensions: '',
  tags: ['food', 'stands'],
}, {
  id: 'CC-FD',
  name: {
    'en': 'Cotton Candy Machine',
    'es': 'Maquina de Algodon',
  },
  description: {
    'en': '',
    'es': ''
  },
  price: '$75',
  image: '',
  dimensions: '',
  tags: ['food', 'stands'],
}, {
  id: 'IC-FD',
  name: {
    'en': 'Ice Cone Machine',
    'es': 'Maquina de Raspados',
  },
  description: {
    'en': '',
    'es': ''
  },
  price: '$75',
  image: '',
  dimensions: '',
  tags: ['food', 'stands'],
}, {
  id: 'TC-FD',
  name: {
    'en': 'Tacos',
    'es': 'Taquiza',
  },
  description: {
    'en': '',
    'es': ''
  },
  price: '$10',
  image: '',
  dimensions: '',
  tags: ['food', 'stands'],
},]

//Layout
const Layout = (props) => {
  const { language, languageChange } = props
  const navItems = {
    navHome: {
      'en': 'Home',
      'es': 'Inicio'
    },
    navLngSelect: {
      'en': 'Language',
      'es': 'Idioma'
    }
  }

  return (
    <React.Fragment>
      <nav className='navbar navbar-expand-lg bg-light'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>
            <h1>Light Rodeo Rentals</h1>
          </Link>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto me-lg-0 ms-lg-auto mb-2 mb-lg-0 text-center'>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>{navItems.navHome[language]}</Link>
              </li>
              <li className='nav-item dropdown'>
                <Link className='nav-link dropdown-toggle' to='/' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                  {navItems.navLngSelect[language]}
                </Link>
                <ul className='dropdown-menu'>
                  <li>
                    <Link data-value='en' onClick={(e) => languageChange(e)}className='dropdown-item' to='/'>
                      English
                    </Link>
                    <Link data-value='es' onClick={(e) => languageChange(e)}
                    className='dropdown-item' to='/'>
                      Espanol
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {props.children}
      
      <footer className='p-3 bg-light text-center'>
        <div className='container'>
          <div className='' id='legal'>
            <span>&copy;2023 Mario Perez</span>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}

//Hero
class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      currentlyShowing: services[0],
    }
  }

  componentDidMount() {
    setInterval(() => {this.changeHero(this.state.count)}, 5000);
  }

  changeHero(count) {
    console.log(count)
    this.setState( {count: count + 1, currentlyShowing: services[count % 3] })
  }
  
  render() {
    const { currentlyShowing } = this.state
    const { name, description, image } = currentlyShowing
    const { language } = this.props
    return (
      <div className='row'>
        <div className='col-12'>
          <div className='d-flex align-items-end hero' id={image}>
            <div className='black-transparent text-white'>
              <div className='hero-descriptor pt-2'>
                <div className='hero-text d-inline text-start'>
                  <h5>{ name[language] }</h5>
                  <h6 className='pt-2'>{ description[language] }</h6>
                </div>
                <div className='radio-buttons d-flex justify-content-center align-items-end'>
                  <input type='radio' />
                  <input type='radio' />
                  <input type='radio' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

//Home
class Home extends React.Component {
  render() {
    const { language } = this.props;
    return (
      <React.Fragment>
        <div className='container-fluid'>
          <Hero language={ language }/>
        </div>
      </React.Fragment>
    )
  }
}

//Output
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'es'
    };

    this.languageChange = this.languageChange.bind(this);
  }

  languageChange(event) {
    this.setState({ language: event.target.getAttribute('data-value') })
  }

  render() {
    const { language } = this.state;

    return (
      <Router>
        <Layout language={language} languageChange={this.languageChange}>
          <Switch>
            <Route path="/" exact render={ (props) => <Home {...props} language={ language } />} />
            <Route render={() => <h1>404 Not found</h1>} />
          </Switch>
        </Layout>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));