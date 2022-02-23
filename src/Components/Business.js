import React from 'react';
import ServerLess from './images/Serverless Stack.png'
import {Grid } from "@material-ui/core";
export default function Business() {
  return (<div className="BusinessSection">
      <Grid container spacing={2}>
          <Grid item xs={12} md={6}>          <div >

            <p className='Title' ><span>Serverless Web Applications</span></p>
            <p className='Text'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Using AWS&rsquo;s Services like S3 web applications can be hosted very cheaply and can use Cloudfront&rsquo;s Content Delivery Network to scale cost-effectively. This stack also can utilize API Gateway to access Lambda and other backend services. With a stack such as this your business can minimize the costs of your online presence.
            </p>
          </div></Grid>

          <Grid item xs={12} md={6}><div className='Diagram'>
        <img width={'400px'} alt='' height={'800px'} src={ServerLess}></img> 
        </div></Grid>
        
        
        </Grid>

  </div>);
}
