import './App.css';
import Settings from './components/Settings';
import Personal from './components/Personal';
import School from './components/School';
import Experience from './components/Experience';
import Header from './components/Header';
import Education from './components/Education';
import Job from './components/Job'

function App() {

  return (
    <>
      <div className="container">
        <div className="box-border">
          <Settings/>
          <Personal/>
          <School/>
          <Experience/>
        </div>
        <div className="page-div">
          <div className="page" size="A4">
            <Header/>
            <Education/>
            <Job/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
