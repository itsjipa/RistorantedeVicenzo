import logo from './logo.svg';
import './App.css';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <Router>
      {showLogin ? <Login setShowLogin = {setShowLogin}/> : <></>}
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Kategori />} />
        <Route path="/menu/minuman-hangat" element={<Menu category="Minuman Hangat" />} />
      </Routes>
      <Connect />
    </Router>
  );
};

export default App;
