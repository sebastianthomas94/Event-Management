import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App min-h-screen bg-gradient-to-br from-black via-purple-950 to-black">
      <Outlet/>
    </div>
  );
}

export default App;
