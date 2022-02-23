import React from 'react';
import { Card, CardActions, CardContent } from '@material-ui/core';


export default function PortfolioProject(props) {
  return (<div>

<Card className="ProjectCard" >
    <CardContent className="ProjectCard">
    <h1>{props.ProjectName}</h1>
    <p>{props.About}</p>
    <div className='center'><a href={props.href}><h2>{props.href}</h2></a></div>
    
    </CardContent>
</Card>

<div>
    <img className='SiteMap' src={props.siteMap} 
    width="100%"
    height="300px"/>
    </div>

      
  </div>);
}
