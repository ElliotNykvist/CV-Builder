import './App.css';
import { UserInfoProvider } from './components/UserInfoContext';
import { EducationProvider } from './components/EducationContext';
import { ExperienceProvider } from './components/ExperienceContext';
import Settings from './components/Settings';
import Personal from './components/Personal';
import School from './components/School';
import Experience from './components/Experience';
import Header from './components/Header';
import Education from './components/Education';
import Job from './components/Job'

function App() {
  return (
    <ExperienceProvider>
      <EducationProvider>
        <UserInfoProvider>
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
        </UserInfoProvider>
      </EducationProvider>
    </ExperienceProvider>
  )
}

export default App
