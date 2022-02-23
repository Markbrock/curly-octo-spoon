import React from 'react';
import { Card, CardContent } from '@material-ui/core';


export default function PortfolioProject(props) {
  return (<div>

<Card className="ProjectCard" >
    <CardContent className="ProjectCard">
    <h1><a href={props.href}>{props.ProjectName}</a></h1>
    <p>{props.About}</p>
    <div className='center'><a href={props.href}><h2>{props.href}</h2></a></div>
    
    </CardContent>
</Card>

<div className='center'>
    <img className='SiteMap' alt='' src={props.siteMap} 
    width="80%"
    height="auto"/>
    </div>

      
  </div>);
}
