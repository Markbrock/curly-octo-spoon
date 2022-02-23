import {
    AppBar,
    Toolbar,
    makeStyles,
  } from "@material-ui/core";
  import React, { useState, useEffect } from "react";
  

  
  const useStyles = makeStyles(() => ({
    header: {
      backgroundColor: "inherit",
      paddingBottom: "10px",

    },
    resumename: {
      color: "#white",
      fontWeight: 600,
      marginRight: "15px",
      textAlign: "left",
      fontSize: "40px",
    },
    menuButton: {
      color: "#white",
      size: "18px",
      
      
    },
    toolbar: {
      
      backgroundColor: "#181818",
      justifyContent: "center",
      textDecoration: "none",
      color: "inherit",
    },
    drawerContainer: {
        
      
      backgroundColor: "#181818",
      height: "100%",
      padding: "20px 30px",
    },
    menuicon: {
      marginLeft: "auto"
    }
  }));
  
  export default function Header() {
    const { header, toolbar } = useStyles();
  
    const [state, setState] = useState({
      mobileView: false,
      drawerOpen: false,
    });
  
    const { mobileView } = state;
  
    useEffect(() => {
      const setResponsiveness = () => {
        return window.innerWidth < 900
          ? setState((prevState) => ({ ...prevState, mobileView: true }))
          : setState((prevState) => ({ ...prevState, mobileView: false }));
      };
  
      setResponsiveness();
  
      window.addEventListener("resize", () => setResponsiveness());
  
      return () => {
        window.removeEventListener("resize", () => setResponsiveness());
      };
    }, []);
  
    const displayDesktop = () => {
      return (
        <Toolbar className={toolbar}>
          <div>
          {ResumeName}</div>
          {/* <div>{getMenuButtons()}</div> */}
        </Toolbar>
      );
    };
  
    const displayMobile = () => {
   
  
      return (
        <Toolbar className={toolbar}>{ResumeName}
             {/* <div className={menuicon}>
         <IconButton
            {...{
              marginleft: "100%",
              edge: "start",
              color: "inherit",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>
          </div> */}
          {/* <Drawer backgroundColor="#181818"
            {...{
              anchor: "right",
              open: drawerOpen,
              onClose: handleDrawerClose,
              
            }}
          >
            <div className={drawerContainer}>{getDrawerChoices()}</div>
          </Drawer>
   */}
          
        </Toolbar>
      );
    };
  

    const ResumeName = (
      <div className="headerName">
        Mark Brock <div className="occupation">Full-Stack Developer</div>
      </div>
    );
  
  
  
    return (
      <header className={header}>
        <AppBar >
          {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
      </header>
    );
  }