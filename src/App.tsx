import Header from "./components/Header"
import MainSection from "./components/MainSection"
import SmoothScroll from "./components/SmoothScroll"
import ToolBar from "./components/ToolBar"

const App = () => {
  return (
    <div>
      <Header/>
      <SmoothScroll>
        <MainSection/>
      </SmoothScroll>
      <ToolBar/>
    </div>
  )
}

export default App