import React from 'react';
import { Grid } from '@material-ui/core';
export default function Skills() {
  return (<div>
      
      <h1>Currently Used languages and services</h1>
      <Grid container spacing={2} className='Skills'>
          <Grid item xs={12} md={6} className='center'>

          <h2 className='SkillsTitle'>Front-end</h2>
      <ul className='Skills'>
          <li>React.js</li>
          <li>HTML</li>
          <li>CSS</li>
      </ul>

          </Grid>
          <Grid item xs={12} md={6} className='center'>

          <h2 className='SkillsTitle'>Back-end</h2>
      <ul className='Skills'> 
          <li>   AWS</li>
          <li>Python</li>
          <li>Node.js</li>
      </ul>
          </Grid>
          <Grid item xs={12} md={12} className='center'>
          <a  className='CertificateLink' href="https://markbrock-certifications.s3.amazonaws.com/Certifications/AWS+Certified+Cloud+Practitioner+certificate.pdf" target="_blank" rel="noopener noreferrer">
          AWS Cloud Practitioner Certificate</a>
          </Grid>
     
      </Grid>
     
  </div>);
}
