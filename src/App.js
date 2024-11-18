import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./main.jsx";
import AssetView from "./components/assetView.jsx";
import EmployeeView from './components/employeeView.jsx';
import Layout from './components/layout.jsx'
import DepartmentView from './components/departmentView.jsx';
import LicenseView from './components/licensesView.jsx';
import MaintenanceView from './components/maintenanceView.jsx';

function App() {

  /**
  * An Object key might only contain the letters ID as the last two, if there is a collection named
  */
  const data = require("./assets/sample.json");

  
  console.log(data);

  

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main data={data}/>} />

          {/* Dynamically Route to view Assets with : Parameters */}
          <Route path="/assets/:assetID" element={<AssetView data={data}/>}/>
          <Route path="/departments/:departmentID" element={<DepartmentView data={data}/>}/>
          <Route path="/employees/:employeeID" element={<EmployeeView data={data}/>}/>
          <Route path="/licenses/:licensesID" element={<LicenseView data={data}/>}/>
          <Route path="/maintenance/:maintenanceID" element={<MaintenanceView data={data}/>}/>
        </Route>
      </Routes>
    </Router>

  );
}

export default App;