import React from 'react';
import Grid from '@mui/material/Grid';
import About from './About';
import Business from './Business';
import Skills from './Skills';
import Portfolio from './Portfolio';


export default function Body() {
  return (
  
  <div className='mainbody'>
    <About/>
    <Business/>
    <Skills/>
    <Portfolio/>
    
  </div>);
}
