
import './App.css';
import Settings from './components/Settings';
import Personal from './components/Personal';
import School from './components/Personal';
import Experience from './components/Experience';

function App() {

  return (
    <>
      <div className="container">
        <Settings />
        <Personal/>
        <School/>
        <Experience/>
      </div>
    </>
  )
}

export default App
