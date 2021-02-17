import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Header, HomeScreen, SingleProduct } from './components'

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <h1>Smart-shop</h1>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/products/:id' component={SingleProduct} />
        </Container>
      </main>
    </Router>
  )
}

export default App
