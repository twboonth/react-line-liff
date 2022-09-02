import React from 'react'
import Router from './routes/Router';
import { Navbar, Footer } from './components';
const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Navbar />
        <Router />
        {/* start footer */}
        <Footer />
        {/* end footer */}
      </div>
    </>
  )
}


export default App