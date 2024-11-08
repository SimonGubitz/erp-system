import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./main.jsx";
import HierarchyView from "./hierarchyView/hierarchyView.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/hierarchy" element={<HierarchyView />} />
      </Routes>
    </Router>

  );
}

export default App;