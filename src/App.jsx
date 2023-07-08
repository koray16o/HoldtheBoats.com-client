import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    //<div>
    // <Signup /> and <Login />
    //After this, all of the above <IsPrivate /> so this way we can make our "/" page the login?
    <div>
      <div className="logo">
        <img
          src="/public/f4024b6077144fb39da68f2e844b5236 (1).png"
          alt="Logo"
          width={125}
        />
        <div
          className="greetingUser"
          style={{
            display: 'flex',
            flexDirection: 'row-reverse',
            marginRight: 282
          }}
        >
          Hello User!
        </div>
      </div>

      <Navbar />
      <Home />
    </div>
    //</div>
  );
}

export default App;
