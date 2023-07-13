const Router = ReactRouterDOM.HashRouter;
const { Route, Link, Switch } = ReactRouterDOM;

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
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            <h1>Maple Enterprise, LLC.</h1>
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
      
      <div className='container-fluid py-3'>
        {props.children}
      </div>
      
      <footer className='p-3 bg-light text-center'>
        <div className='container-fluid'>
          <div className='' id='legal'>
            <span>&copy;2023 Mario Perez</span>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
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
            <Route path="/" exact render={() => <h1>Hello world</h1>} />
            <Route render={() => <h1>404 Not found</h1>} />
          </Switch>
        </Layout>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));