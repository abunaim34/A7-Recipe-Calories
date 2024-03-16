import './App.css'
import Banner from './Component/Banner/Banner'
import Header from './Component/Header/Header'
import Recipes from './Component/Recipes/Recipes'


function App() {

  return (
    <>
      <div className='mx-32 my-12'>
        <Header></Header>
        <Banner></Banner>
        <Recipes></Recipes>
      </div>
    </>
  )
}

export default App
