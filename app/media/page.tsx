// app/pages/about.tsx
'use client';

import Navbar from '../components/navbar';
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function Media() {
  return (
    <main>
      <Container>
        <h1 style={{ color: 'red', margin: '0 auto', textAlign: 'center'  }}>Media</h1>
        <h6 style={{ color: '', margin: '0 auto', textAlign: 'center'  }}>WELCOME TO THE PROVIDENT FUND</h6>
        <p style={{ width: '80%', margin: '0 auto', textAlign: 'center' }}>
        At the Provident Fund, we are committed to safeguarding your financial future. Join thousands of your colleagues who have already secured their retirement with us. Together, let’s ensure that your golden years are truly golden. Enroll in the Provident Fund and take the first step towards a secure retirement. Your dedication to the aviation industry deserves nothing less.
        </p>
      </Container>
    </main>
  );
}
