import React from 'react';

import {Grid} from '@material-ui/core'

export default function PortfolioProject(props) {
  return (<Grid container spacing={2} justifyContent="space-around" className="ProjectCard">

<Grid  item xs={12} md={6} >
    
    <h1><a href={props.href}>{props.ProjectName}</a></h1>
    <p>{props.About}</p>
    
    
</Grid>

<Grid className='center'  item xs={12} md={4} >
    <img className='SiteMap' alt='' src={props.siteMap} 
    />
</Grid>

      
  </Grid>);
}
