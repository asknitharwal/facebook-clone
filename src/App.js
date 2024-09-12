
import './App.css';
import Mainbar from './components/layout/mainbar/Mainbar';
import Navbar from './components/layout/navbar/Navbar';
import Sidebar from './components/layout/sidebar/Sidebar';

function App() {
  return (
    <div className="main_container">
    <Navbar/>
    <Sidebar/>
    <Mainbar/>

    </div>
  );
}

export default App;
