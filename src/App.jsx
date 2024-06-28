import Header from "./components/Header"
import SplashScreen from "./components/SplashScreen"

const App = () => {

  return (
    <>
      <SplashScreen />
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>
    </>
  )
}

export default App
