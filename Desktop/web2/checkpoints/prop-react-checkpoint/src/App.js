import './App.css';
import Profile from './Profile/Profile';

function App() {
  const info = {
    brand:"UI & UX websites",
    home:"Algeria,Blida,Larbaa",
    mater:"Learn & Design",
    goal:"Create own company",
    achievement:"Having own Brand",
    hobbies:"Travel, Eat, Sleep",
    skills:"Programming, Speakin languages"
  };
  const name ="Oussama Belkaid";
  const job = "Front-end Developper"
  return (
    <div className="App">
        <Profile fullName={name} profession={job} bio={info}>
            <img src="/images/img.jfif" alt="" style={{
              width:200,
              height:200,
              borderRadius:"50%",
              boxShadow:"10px 10px 10px 10px rgba(0,0,0,0.5)"
            }} />
        </Profile>
    </div>
  );
}

export default App;
