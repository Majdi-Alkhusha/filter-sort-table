import React from 'react'
import '../styles/globals.css'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import theme from '../src/theme'
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head key={0}>
        <title>Estarta </title>
        <link rel="shortcut icon" href="./logoIco.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} user={global} />
      </ThemeProvider>
    </>
  )
}
MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  return { pageProps: pageProps };
}
export default MyApp;
