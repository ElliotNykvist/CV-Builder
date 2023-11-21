
import './App.css';
import Settings from './components/Settings';
import Personal from './components/Personal';
import School from './components/Personal';
import Experience from './components/Experience';
import Header from './components/Header';

function App() {

  return (
    <>
      <div className="container">
        <div className="box-border">
          <Settings />
          <Personal/>
          <School/>
          <Experience/>
        </div>
        <div className="page-div">
          <div className="page" size="A4">
            <Header/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
