
import './App.css';
import Settings from './components/Settings';
import Personal from './components/Personal';
import School from './components/Personal';

function App() {

  return (
    <>
      <div className="container">
        <Settings />
        <Personal/>
        <School/>
      </div>
    </>
  )
}

export default App
