import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
    IconButton,
    Drawer,
    MenuItem,
  } from "@material-ui/core";
  import MenuIcon from "@material-ui/icons/Menu";
  import React, { useState, useEffect } from "react";
  
  
  const headersData = [
    {
      label: "About",
      href: "/#About",
    },
    {
      label: "Resume",
      href: "/#Resume",
    },
    {
      label: "Portfolio",
      href: "/#Portfolio",
    },
    {
      label: "Contact",
      href: "/#Contact",
    },
  ];
  
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
    const { header, resumename,menuicon,menuButton, toolbar, drawerContainer } = useStyles();
  
    const [state, setState] = useState({
      mobileView: false,
      drawerOpen: false,
    });
  
    const { mobileView, drawerOpen } = state;
  
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
          <h1 className="center">{ResumeName}</h1></div>
          {/* <div>{getMenuButtons()}</div> */}
        </Toolbar>
      );
    };
  
    const displayMobile = () => {
      const handleDrawerOpen = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: true }));
      const handleDrawerClose = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: false }));
  
      return (
        <Toolbar className={toolbar}>
            <h1 className="center">{ResumeName}</h1>
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
  
    const getDrawerChoices = () => {
      return headersData.map(({ label, href }) => {

        const handleDrawerClose = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: false }));
        return (
          
            <MenuItem className={menuButton}>
                <div>{label}</div>
            
           
            </MenuItem>
        );
      });
    };
  
    const ResumeName = (
      <div className="headerName">
       Mark Brock <div className="occupation">Cloud Developer</div>
      </div>
    );
  
    const getMenuButtons = () => {
      return  headersData.map(({ label, href }) => {
        return (
          <Button className={menuButton} >
            
            <h3>{label}</h3>
            
            
          </Button>
        );
      });
    };
  
    return (
      <header className={header}>
        <AppBar >
          {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
      </header>
    );
  }