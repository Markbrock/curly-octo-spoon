import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom'
import Body from './Body.js'
import Header from './Header'
import React from 'react';

export default function RouteComponent() {
  return (
  <BrowserRouter>
  <div>
  <Header/>
    <Routes>
     
     
         <Route path="/" element={<Body/>}>
             
         </Route>
         
             
        
  
     </Routes>
</div>
    
      
  
  </BrowserRouter>);
}
