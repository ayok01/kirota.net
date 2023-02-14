import { Navbar, Link, Text, Switch } from '@nextui-org/react';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import React, { useState } from 'react';
import { FiSun } from 'react-icons/fi';
import { MdOutlineNightlight } from 'react-icons/md';
import { AppProps } from 'next/app';

type ThemeType = 'light' | 'dark';

function MyApp({ Component, pageProps }: AppProps) {
  const [themamode, setTehema] = React.useState<ThemeType>('dark');

  const theme = createTheme({
    type: themamode,
  });
  return (
    <NextUIProvider theme={theme}>
      <Navbar variant={'sticky'}>
        <Navbar.Brand>
          <Text
            b
            color='inherit'
            hideIn='xs'
            h3
            css={{
              textGradient: '45deg, $blue600 -20%, $pink600 50%',
            }}
            weight='bold'
          >
            白月 きろた
          </Text>
        </Navbar.Brand>
        <Navbar.Content>
          <Navbar.Link color='inherit' href='/about'>
            About
          </Navbar.Link>
          <Navbar.Link>Works</Navbar.Link>
          <Switch
            shadow
            checked={true}
            onChange={(value) => {
              setTehema(value.target.checked ? 'dark' : 'light');
            }}
            iconOff={<FiSun />}
            iconOn={<MdOutlineNightlight />}
          />
        </Navbar.Content>
      </Navbar>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
