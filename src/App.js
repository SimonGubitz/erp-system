import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./main.jsx";
import AssetView from "./components/assetView.jsx";
import EmployeeView from './components/employeeView.jsx';
import Layout from './components/layout.jsx'

function App() {

  /**
  * An Object key might only contain the letters ID as the last two, if there is a collection named
  */
  const data = require("./assets/sample.json");

  
  // Firebase Setup
  

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main data={data}/>} />

          {/* Dynamically Route to view Assets with : Parameters */}
          <Route path="/assets/:assetID" element={<AssetView data={data}/>}/>
          <Route path="/departments/:departmentID" element={<EmployeeView data={data}/>}/>
          <Route path="/employees/:employeeID" element={<EmployeeView data={data}/>}/>
          <Route path="/licenses/:licensesID" element={<EmployeeView data={data}/>}/>
          <Route path="/maintenance/:maintenanceID" element={<EmployeeView data={data}/>}/>
        </Route>
      </Routes>
    </Router>

  );
}

export default App;