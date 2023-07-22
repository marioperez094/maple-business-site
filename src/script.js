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
  tags: ['inflatable', 'medium', 'covered', 'hoop', 'frontPage'],
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
  tags: ['inflatable', 'medium', 'covered', 'hoop', 'frontPage'],
}, {
  id: 'US-IN',
  name: {
    'en': 'Unicorn Inflatable',
    'es': 'Inflable Unicornio',
  },
  description: {
    'en': 'Enter a magical land in this small but elegant unicorn themed inflatable.',
    'es': 'Entra una tierra magica en este pequeno pero elegante inflable unicornio.'
  },
  price: '$100',
  image: 'hero-three',
  dimensions: '9.5ft x 9.5ft',
  tags: ['inflatable', 'small', 'uncovered', 'slide', 'frontPage'],
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
  tags: ['inflatable', 'large', 'covered', 'slide'],
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
  tags: ['inflatable', 'medium', 'large', 'uncovered', 'slide', 'water-slide'],
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
  tags: ['inflatable', 'large', 'covered', 'slide', 'water-slide'],
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
  tags: ['inflatable', 'large', 'uncovered', 'slide', 'water-slide'],
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
  tags: ['inflatable', 'large', 'uncovered', 'slide', 'water-slide'],
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
  tags: ['inflatable', 'x-large', 'uncovered', 'slide', 'water-slide'],
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

const Router = ReactRouterDOM.HashRouter;
const { Route, Link, Switch } = ReactRouterDOM;
const { useState } = React;

//Output
const App = () => {
  const [language, setLanguague] = useState('es');

  const changeLanguage = (e) => {
    setLanguague(e.target.value)
  }

  //Home
  const Home = (props) => {
    const { language } = props;
    const home = {
      slogan: {
        'en': 'Turn every party into an adventure!',
        'es': 'Haz cada fiesta una aventura!'
      },
      button: {
        'en': 'Start renting!',
        'es': 'Empieza rentar!'
      }
    }

    //Hero 
    class Hero extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          heroTimer: null,
          count: 0,
          frontPageInflatables: services.filter((inflatables) => { return inflatables.tags.includes('frontPage') }),
          dots: [true, false, false]
        }
      }

      componentDidMount() {
        if (!this.heroTimer)
          this.heroTimer = setInterval(() => { this.heroSlider(this.state.count) }, 10000)
      }

      componentWillUnmount() {
        if (this.heroTimer) {
          window.clearInterval(this.heroTimer);
        }
      }

      heroSlider = (num) => {
        num++
        let setDots = [0, 1, 2];
        this.setState({ count: num, dots: setDots.map((val) => { return val === num % this.state.frontPageInflatables.length }) })

      }

      getDV = (e) => {
        window.clearInterval(this.heroTimer);
        const dataValue = e.target.getAttribute('data-value');
        this.heroSlider(dataValue)
      }

      render() {
        const { language } = this.props;
        const { frontPageInflatables, count, dots } = this.state
        const { name, description, image } = frontPageInflatables[count % frontPageInflatables.length]



        return (
          <div className='row flex-nowrap scrollable-row'>
            <div className='col-12 justify-content-center' id='fadeAnimation' key={image}>
              <Link to='/'>
                <div className='d-flex align-items-end hero' id={image}>
                  <div className='black-transparent text-white'>
                    <div className='hero-descriptor pt-2'>
                      <div className='hero-text d-inline text-start'>
                        <h5 className='southern-text'>{name[language]}</h5>
                        <h6 className='pt-2'>{description[language]}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <div className='radio-buttons'>
                <span className={dots[0] ? 'active-dot' : 'dot'} data-value='-1' onClick={this.getDV}></span>
              </div>
            </div>
          </div>
        )
      }
    }

    return (
      <React.Fragment>
        <div className='container-fluid'>
          <Hero language={ language } />
          <div className='row'>
            <div className='col-12 col-md-6 text-center text-md-start southern-text'>
              <h4>{home.slogan[language]}</h4>
            </div>
            <div className='col-12 col-md-6 text-center text-md-end'>
              <Link className='btn btn-primary' to='/'><h4>{home.button[language]}</h4></Link>
            </div>
          </div>
        </div>
        <div className='container-fluid inventory mt-5'>
          <div className='inventory-list row d-flex justify-content-between'>
          </div>
        </div>
      </React.Fragment>
    )
  }

  return (
    <Router>
        <Switch>
          <Route path="/" exact render={(props) => <Home {...props} language={language} />} />
          <Route render={() => <h1>404 Not found</h1>} />
        </Switch>
    </Router>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)