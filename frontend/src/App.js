import './App.css'
import { Container } from 'react-bootstrap'
import { Header, HomeScreen } from './components'

function App() {
  return (
    <div>
      <Header />
      <main className='py-3'>
        <h1>Smart-shop</h1>
        <Container>
          <HomeScreen />
        </Container>
      </main>
    </div>
  )
}

export default App
