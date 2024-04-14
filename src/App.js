import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { HashRouter } from 'react-router-dom';
import LinksCheack from './MyProject/LinksCheack' 

function App() {
  return (
    <div className="App text-center text-capitalize">

      <HashRouter>
        <LinksCheack/>
      </HashRouter>
    </div>
  );
}

export default App;
