import './App.css'
import { Container } from 'react-bootstrap'
import { Header, HomeScreen } from './components'

function App() {
  return (
    <div>
      <Container>
        <Header />
        <main className='py-3'>
          <h1>Smart-shop</h1>
          <HomeScreen />
        </main>
      </Container>
    </div>
  )
}

export default App
