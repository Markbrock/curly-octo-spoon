import React from 'react';
import {Grid} from '@material-ui/core'
import PortfolioProject from './PortfolioProject'
import WeatherAppMap from './images/Weather App.jpg'
import qrGalleryMapMap from './images/theQRGalleryMap.jpg'
import BugtrackerSiteMap from './images/BugtrackerSiteMap.jpg'
export default function Portfolio() {
    const ProjectData = [
          {
            ProjectName: "Bug Tracker",
            About: "This is a Bug Tracker deployed on aws using cloudformation and cognito for authentication",
            href: "http://d2ott0l3gydjik.cloudfront.net/",
            siteMap: BugtrackerSiteMap,
            Github: "https://github.com/Markbrock/BugTracker"
          },
        {
            ProjectName: "QR Wifi Keys",
            About: "The front-end uses React.js,axios,material ui.The back-end uses API Gateway to call a python based lambda function that uses Dynamo DB and S3 to generate and edit the qr design",
            href: "https://TheQrGallery.com",
            siteMap: qrGalleryMapMap
          },
          {
            ProjectName: "Weather App",
            About: "Simple Weather App using Openweather's Api and geocode from google maps,this app was made using functional components using hooks rather than class based",
            href: "https://d444ct3dvyt9y.cloudfront.net/",
            siteMap: WeatherAppMap,
            Github: "https://github.com/Markbrock/WeatherApp"
          },

      ];

      const getProjects = () => {
        return  ProjectData.map(({ ProjectName,About,href,siteMap,Github }) => {
          return (
            <Grid  item xs={12} md={12}>
            <PortfolioProject
              
              ProjectName={ProjectName}
              About={About}
              href={href}
              siteMap={siteMap}
              Github={Github}
              
           />
           </Grid>
          );
        });
      };

  return (<div>

      <h1>Portfolio</h1>
<Grid container spacing={4} className='portfolio'>

    {getProjects()}
       

</Grid>



  </div>);
}
