import Header from "./Header"
import Content from "./Content"
import Sidebar from "./Sidebar"
import StudentCard from "./StudentCard"
function App(){
    return (
        <>
        <Header/>
            <div className="flex">
                <Sidebar/>
                <Content/>
                <StudentCard/>
            </div>
        </>
    )
}
export default App