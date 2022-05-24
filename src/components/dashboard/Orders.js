import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import ColdStart from '../pages/Admin/ColdStart';
import CollectionPage from '../pages/Admin/CollectionPage';
import Report from '../pages/Admin/Reports';
import UserManagment from '../pages/Admin/UserManagment';
import Analystics from "../pages/Admin/Analystics"
import Admin from '../pages/others/Admin';


export default function Orders() {
  return (
    <React.Fragment>
     <Routes>
       <Route path='/' element={<Admin/>}/>
       <Route path='/coldstart' element={<ColdStart/>} />
       <Route path='UserManagment' element={<UserManagment/>} />
       <Route path='/reports' element={<Report/>}/>
       <Route path="CollectionPage" element={<CollectionPage/>} />
       <Route path='Analystics' element={<Analystics/>} />
     </Routes>
    </React.Fragment>
  );
}
