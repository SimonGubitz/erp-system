import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./main.jsx";
import HierarchyView from "./components/hierarchyView.jsx";
import AssetView from "./components/AssetView.jsx";
import EmployeeView from './components/EmployeeView.jsx';
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
          <Route path="/hierarchy" element={<HierarchyView data={data}/>} />

          {/* Dynamically Route to view Assets with : Parameters */}
          <Route path="/assets/:assetID" element={<AssetView data={data}/>}/>
          <Route path="/employees/:employeeID" element={<EmployeeView data={data}/>}/>
          <Route path="/departments/:departmentID" element={<EmployeeView data={data}/>}/>
        </Route>
      </Routes>
    </Router>

  );
}

export default App;