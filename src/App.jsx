import Header from "./components/Header"
import Home from "./components/Home"
import Profile from "./components/Profile"
import SplashScreen from "./components/SplashScreen"

const App = () => {

  return (
    <>
      <SplashScreen />
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden scroll-smooth">
        <Header />
        <Home />
        <Profile />
      </div>
    </>
  )
}

export default App
