import './assets/css/App.css';
import Layout from "./components/layout/Layout";
import { BrowserRouter } from 'react-router-dom';
import Routing from "./components/layout/Routing";

function App() {

  return (
    <div className="App">
            <Layout>
                <Routing/>
            </Layout>
    </div>
  );
}

export default App;
