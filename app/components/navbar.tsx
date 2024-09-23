'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();
  const [currentBanner, setCurrentBanner] = useState('/images/navbar/nav-banner.jpg'); // Default banner
  const [currentPage, setCurrentPage] = useState('/'); // Track current page

  useEffect(() => {
    const getBannerImage = () => {
      switch (pathname) {
        case '/about':
          return '/images/navbar/nav-banner-about.png';
        case '/claimsProcedures':
          return '/images/navbar/nav-banner-claims.png';
        case '/tenderCareers':
          return '/images/navbar/nav-banner-careers.png';
        case '/investments':
          return '/images/navbar/nav-banner-investments.png';
        case '/contacts':
          return '/images/navbar/nav-banner-contacts.png';
        case '/downloads':
          return '/images/navbar/nav-banner-downloads.png';
        case '/media':
          return '/images/navbar/nav-banner-media.png';
        default:
          return '/images/navbar/nav-banner.png';  // Default image for home or other routes
      }
    };

    setCurrentBanner(getBannerImage());
    setCurrentPage(pathname); // Update current page
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100); // Adjust the scroll position trigger as needed
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleOthersClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleOthersClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { text: 'Home', href: '/' },
    { text: 'About Us', href: '/about' },
    { text: 'Claims & Procedures', href: '/claimsProcedures' },
    { text: 'Tenders & Careers', href: '/tenderCareers' },
    { text: 'Investments', href: '/investments' },
    { text: 'Contacts', href: '/contacts' },
  ];

  const othersItems = [
    { text: 'Downloads', href: '/downloads' },
    { text: 'Media Center', href: '/media' },
  ];

  return (
    <main>
      <Head>
        <title>The Provident Fund</title>
      </Head>

      {/* Slim Image Above AppBar */}
      <Box
        sx={{
          width: '100%',
          height: {
            xs: '100px', // Full height on mobile devices
            sm: '350px', // Adjust this value to control the height on larger screens
          },
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center', // Center content vertically
          justifyContent: 'center', // Center content horizontally
          marginTop: {
            xs: '0px', // No trimming on mobile
            sm: '-50px', // Trim from the top on larger screens
          },
        }}
      >
        <Image
          src={currentBanner}  // Use the current banner image from state
          alt="Navbar Banner"
          layout="responsive"
          width={1920} // Aspect ratio width
          height={400} // Aspect ratio height
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </Box>

      <AppBar
        position="static"
        className={isSticky ? 'sticky' : ''}
        sx={{ backgroundColor: '#ED1C24' }}
      >
        <Toolbar>
          {/* Logo Section */}
          <Box
            sx={{
              flexGrow: 1,
              ml: { xs: 0, md: '170px' },
            }}
          >
            <Link href="/" passHref>
              <Image src="/logos/PF-Logo.png" alt="Logo" width={200} height={30} />
            </Link>
          </Box>

          {/* Navigation Links or Hamburger Menu */}
          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
                sx={{ borderRadius: 0 }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
                PaperProps={{
                  sx: { borderRadius: 0 },
                }}
              >
                <List>
                  {menuItems.map((item, index) => (
                    <ListItem button key={index} onClick={handleDrawerToggle}>
                      <Link href={item.href} passHref>
                        <ListItemText primary={item.text} />
                      </Link>
                    </ListItem>
                  ))}
                  {/* Others Dropdown in Drawer */}
                  <ListItem button onClick={handleOthersClick}>
                    <ListItemText primary="Others" />
                    <ArrowDropDownIcon />
                  </ListItem>
                  {othersItems.map((item, index) => (
                    <ListItem
                      button
                      key={`others-${index}`}
                      onClick={handleDrawerToggle}
                      sx={{ pl: 4 }}
                    >
                      <Link href={item.href} passHref>
                        <ListItemText
                          primary={item.text}
                          sx={{ color: '#ED1C24' }}
                        />
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 4, mr: 25 }}>
              {menuItems.map((item, index) => (
                <Link key={index} href={item.href} passHref>
                  <Typography
                    variant="body1"
                    component="p"
                    color="inherit"
                    sx={{
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '2px',
                        backgroundColor: 'white',
                        transform: 'scaleX(0)',
                        transformOrigin: 'bottom right',
                        transition: 'transform 0.3s ease',
                      },
                      '&:hover::after': {
                        transform: 'scaleX(1)',
                        transformOrigin: 'bottom left',
                      },
                      '&.active::after': {
                        transform: 'scaleX(1)',
                        transformOrigin: 'bottom left',
                      },
                    }}
                    className={pathname === item.href ? 'active' : ''}
                  >
                    {item.text}
                  </Typography>
                </Link>
              ))}
              {/* Others Dropdown */}
              <Box>
                <Typography
                  variant="body1"
                  component="p"
                  color="inherit"
                  sx={{
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                  }}
                  onClick={handleOthersClick}
                >
                  Others <ArrowDropDownIcon />
                </Typography>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleOthersClose}
                  PaperProps={{
                    sx: { borderRadius: 0 },
                  }}
                >
                  {othersItems.map((item, index) => (
                    <MenuItem
                      key={`others-${index}`}
                      onClick={handleOthersClose}
                      sx={{ color: '#ED1C24' }}
                    >
                      <Link href={item.href} passHref>
                        {item.text}
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </main>
  );
};

export default Navbar;
