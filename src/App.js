import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from 'react-router-dom';
import LinksCheack from './MyProject/LinksCheack' 

function App() {
  return (
     <BrowserRouter>
        <LinksCheack/>
     </BrowserRouter>
  );
}

export default App;
