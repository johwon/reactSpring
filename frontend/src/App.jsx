import './App.css';
import { BrowserRouter } from 'react-router';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './include/Header';
import Syntax from './test/Syntax';
import Variable from './test/Variable';
import State from './test/State';
import Count from './test/Count';
import Loop from './test/Loop';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Syntax />} />
          <Route path="/test/variable" element={<Variable />} />
          <Route path="/test/state" element={<State />} />
          <Route path="/test/count" element={<Count />} />
          <Route path="/test/loop" element={<Loop />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
