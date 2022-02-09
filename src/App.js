import logo from './logo.svg';
import './App.css';
import FullName from './Component/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import Adresse from './Component/Profile/Adresse';
import Resume from './Component/Profile/Resume';

function App() {
  return (
  <div>
    <div className='layoutprofil'>
      <>
        <ProfilePhoto/>
      </>
      <div className='ok'>
        <FullName/>
        <Adresse/>
      </div>
   
    </div>
      <div className='Resume'>
        <Resume/>
      </div>

  </div>
   

  
          
        
 
  );
}

export default App;
