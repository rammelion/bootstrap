import './App.css'
import { Suspense, lazy } from 'react'
import Nav from './components/semantics/Nav'
import Header from './components/semantics/Header'
import Main from './components/semantics/Main'
import Footer from './components/semantics/Footer'

// Works also with SSR as expected
const Card = lazy(() => import('./Card'))

function App() {
  return (
    <>
        <Nav />
        <Header>

        </Header>
        <Main>
            <Suspense fallback={<p>Loading card component...</p>}>
                <Card />
            </Suspense>
        </Main>
        <Footer />
    </>
  )
}

export default App
