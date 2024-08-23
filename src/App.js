import './App.scss';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { OCdashboard } from './pages/maindashboard.js';
import { HomePage } from './pages/homepage.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NamePage } from './pages/namepage.js';

function App() {
  return (
    <div className="App">
      <Helmet><title>CAD Online Compiler</title></Helmet>

    	<Router>
    	  <Routes>
          <Route path='/' element={<NamePage />}></Route>
          <Route path='/:Name/homepage' element={<HomePage />}></Route>
          <Route path='/:Name/programs' element={<OCdashboard />}></Route>
      	</Routes>
      </Router>
    </div>
  );
}

export default App;
