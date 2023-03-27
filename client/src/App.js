
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EmployeeForm } from "./forms/employeeForm";
import { AssetForm } from "./forms/assetForm";
import { EmployeeList } from "./lists/employeeList";
import { AssetList } from "./lists/assetList";
//importar luego ruta NotFound. <Route path="*" element={<NotFound />} />

const App = () => (
  <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<EmployeeList />} />
      <Route path="/employee/:id_employee?" element={<EmployeeForm />} />
      <Route path="/asset/:id_asset?" element={<AssetForm />} />
      <Route path="/assets" element={<AssetList />} />
      
    </Routes>
  </BrowserRouter>
);

export default App;
