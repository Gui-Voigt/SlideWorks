import Header from './Layouts/Header'
import Content from './Layouts/Content'
import Footer from './Layouts/Footer'

import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'

import styles from './Styles/Global.module.css'

function App() {

  return (
   <>

    <Header/>

    <Router>
      <Routes>

        <Route exact path="/" element={<Content/>}/>
        
      </Routes>
    </Router>

    <Footer/>
      

   </>
  )
}

export default App
