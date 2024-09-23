'use client';

import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { text: 'Home', href: '/' },
  { text: 'About Us', href: '/about' },
  { text: 'Claims & Procedures', href: '/claimsProcedures' },
  { text: 'Tenders & Careers', href: '/tenderCareers' },
  { text: 'Investments', href: '/investments' },
  { text: 'Contacts', href: '/contacts' },
  { text: 'Downloads', href: '/downloads' },
  { text: 'Media Center', href: '/media' },
];

const getCurrentYear = () => {
  return new Date().getFullYear();
};


const Footer = () => {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState<string>(pathname || '/');

  useEffect(() => {
    setActivePath(pathname || '/');
  }, [pathname]);

  return (
    <footer style={{ marginTop: 'auto', position: 'relative' }}>
      {/* Footer Banner */}
      <Box
        className="footer-banner"
        sx={{
          marginTop: "200px",
          backgroundImage: `url('/images/footer/footer-banner.jpg')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          width: '100%',
          height: {
            xs: '150px',  // Height for mobile
            sm: '350px',  // Height for larger screens
          },
        }}
      />
      {/* Footer Canvas Background */}
      <Box
        className="footer-canvas-bg"
        sx={{
          backgroundImage: `url('/images/footer/footer-canvas-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          height: '702px', // Height for the second image
          width: '100%',
          position: 'relative',
          zIndex: 0, // Ensure background images are behind the card
          display: 'flex', // Use flex to arrange the text
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: {
            xs: 'column',  // Stack vertically on smaller screens
            sm: 'row',     // Align in a row on larger screens
          },
          gap: {
            xs: '20px',  // Adjust this value for mobile screens
            sm: '30px',  // Reduced gap for larger screens
          },
        }}
      >
        <Box
          sx={{
            flex: 1, // Each Box takes up equal space
            padding: '0 10px', // Optional: Add some horizontal padding
            display: 'flex',
            flexDirection: 'column',
            // marginTop: '110px',
            gap: '30px', // Space between each element, adjust as needed
            justifyContent: 'center', // Center content vertically if needed
            textAlign: {
              xs: 'center', // Center text on mobile view
              sm: 'right',  // Right align text on desktop view
            },
            marginTop: {
              xs: '200px', // Center text on mobile view
              sm: '110px',  // Right align text on desktop view
            },
          }}
        >
          <h2 style={{
            width: '100%',
            margin: '0',
            textAlign: 'inherit', // Keep default alignment
            color: 'white',
          }}>
            Lets create <br />The next success story
          </h2>


          <p style={{
            margin: '0',
            width: '100%',
            textAlign: 'inherit', // Keep default alignment
            color: 'white',
          }}>
            Provident Fund - All Rights Reserved © {getCurrentYear()}
          </p>

        </Box>

        <Box
          sx={{
            flex: 1,
            padding: '0 10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            color: 'white',
          }}
        >
          <Box
            sx={{
              textAlign: {
                xs: 'center', // Center text on mobile view
                sm: 'inherit',  // Right align text on desktop view
              },
              // marginTop: {
              //   xs: '-40px'
              // }
            }}>
            <h6 style={{
              width: '80%',
              margin: '0 auto',
              textAlign: 'inherit', // Keep default alignment
              color: 'white',
            }}>
              QUICK LINKS
            </h6>
          </Box>

          {menuItems.map((item) => (
            <Link href={item.href} passHref key={item.text}>
              <Box
                sx={{
                  textAlign: {
                    xs: 'center', // Center text on mobile view
                    sm: 'inherit',  // Right align text on desktop view
                  },

                }}>
                <p
                  className={`menu-item ${activePath === item.href ? 'menu-item-active' : ''}`}
                  style={{
                    color: activePath === item.href ? 'red' : 'inherit', // Red color for active menu item
                    transition: 'color 0.3s', // Smooth color transition
                    marginBottom: '0px', // Adjust this value to increase or decrease the vertical spacing
                    textAlign: 'inherit', // Keep default alignment
                  }}
                >
                  {item.text}
                </p>
              </Box>
            </Link>
          ))}
        </Box><br /><br /><br />
      </Box>



      {/* Floating Card */}
      <Box
        sx={{
          position: 'absolute',
          top: {
            xs: 'calc(180px - 130px / 2)', // For mobile: Pull the card down by an additional 10px
            sm: 'calc(300px - 130px / 2)', // For larger screens: Center based on the transition point
          },
          left: '50%',
          transform: 'translateX(-50%)',
          width: {
            xs: '90%',  // Adjust width for mobile
            sm: '1045px', // Fixed width for larger screens
          },
          maxWidth: '1045px', // Ensure card doesn't exceed max width
          height: {
            xs: 'auto',  // Adjust height for mobile, auto will let it grow based on content
            sm: '260px', // Fixed height for larger screens
          },
          backgroundColor: 'rgba(237, 28, 36, 0.8)', // White with 50% transparency
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1, // Ensure the card is above the images
          borderRadius: '10px', // Optional: Add rounded corners
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Optional: Add shadow
          pointerEvents: 'auto', // Allow interaction with the card
          padding: {
            xs: '16px', // Padding for mobile
            sm: '24px', // Padding for larger screens
          },
          flexDirection: 'column', // Ensure vertical alignment
        }}
      >
        <Container>
          <h5 style={{ color: 'white', margin: '0 auto', textAlign: 'center' }}>Enough talk, </h5>
          <h4 style={{ color: 'white', margin: '0 auto', textAlign: 'center' }}>Let&apos;s Tackle your challenge!</h4>
          {/* Add the Button below the text */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '20px', // Spacing above the button
            }}
          >
            <Link href="/contacts" passHref>
              <Button
                variant="contained"
                style={{
                  borderRadius: '30px', // 30px border radius
                  width: '250px',
                  color: '#ED1C24', // Button text color
                  backgroundColor: '#fff', // Button background color
                  padding: '10px 20px', // Padding inside the button
                  textTransform: 'none', // Prevent text from being transformed to uppercase
                }}
              >
                Contact Us
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
