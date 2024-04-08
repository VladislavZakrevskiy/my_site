import Header from './components/common/Header'
import MainSection from './components/Sections/MainSection'
import SmoothScroll from './components/common/SmoothScroll'
import ToolBar from './components/icons/ToolBar'

const App = () => {
    return (
        <div>
            <Header />
            <SmoothScroll>
                <MainSection />
            </SmoothScroll>
            <ToolBar />
        </div>
    )
}

export default App
