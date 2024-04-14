import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from 'react-router-dom';
import LinksCheack from "./MyProject/LinksCheack"
function App() {
  return (
    <div className="App text-center text-capitalize">
      <h1>home tech official</h1>
     <BrowserRouter>
        <LinksCheack/>
     </BrowserRouter>
    </div>
  );
}

export default App;
