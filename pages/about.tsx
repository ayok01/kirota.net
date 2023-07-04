import Head from 'next/head';
import { Inter } from '@next/font/google';
import { Text, Grid, Image, Button, useTheme } from '@nextui-org/react';

export default function Home() {
  const ThemeState = useTheme();
  return (
    <>
      <Grid.Container gap={2} css={{ justifyContent: 'center' }}>
        <Grid xs={12} md={12} css={{ paddingTop: '$20' }}>
          {ThemeState.isDark && (
            <Image
              src='https://s3.arkjp.net/misskey/42d983af-cacd-42ef-98a0-3e8cd6e0a0e2.png'
              objectFit='cover'
              alt='Default Image'
              width={200}
              height={200}
              css={{ borderRadius: '50%', justifyContent: 'center' }}
            />
          )}
          {!ThemeState.isDark && (
            <Image
              src='https://s3.arkjp.net/misskey/73e54922-b95f-4544-8dc7-907e0b8339a1.jpg'
              objectFit='cover'
              alt='Default Image'
              width={200}
              height={200}
              css={{ borderRadius: '50%', justifyContent: 'center' }}
            />
          )}
        </Grid>
        <Grid
          xs={12}
          css={{
            justifyContent: 'center',
            padding: '$0',
          }}
        >
          <Text h3>白月 きろた</Text>
        </Grid>
        <Grid
          xs={12}
          md={12}
          css={{
            justifyContent: 'center',
            padding: '$0',
          }}
        >
          <Text h6 weight='thin'></Text>
        </Grid>
        <Grid
          xs={12}
          css={{
            margin: 10,
          }}
        />
        <Grid>
          <a href='https://twitter.com/Ki6ta_'>
            <Button shadow color='primary' auto>
              Twitter
            </Button>
          </a>
        </Grid>
        <Grid>
          <a href='https://www.pixiv.net/users/26696698'>
            <Button shadow color='primary' auto>
              Pixiv
            </Button>
          </a>
        </Grid>
        <Grid>
          <a href='https://github.com/ayame01'>
            <Button shadow color='gradient' auto>
              GitHub
            </Button>
          </a>
        </Grid>
        <Grid>
          <a href='https://bsky.app/profile/k6t.bsky.social'>
            <Button shadow color='gradient' auto>
              BlueSky social
            </Button>
          </a>
        </Grid>
        <Grid
          xs={12}
          css={{
            justifyContent: 'center',
            alignContent: 'center',
            paddingBottom: 2,
          }}
        >
          <Text css={{ margin: '$0' }} h5>
            Fedivers
          </Text>
        </Grid>
        <Grid>
          <a rel='me' href='https://pawoo.net/@shirotuki_ki'>
            <Button color='primary' auto ghost>
              Pawoo
            </Button>
          </a>
        </Grid>
        <Grid>
          <a href='https://girak.moe/@kirota'>
            <Button color='primary' auto ghost>
              Girak.moe
            </Button>
          </a>
        </Grid>
        <Grid>
          <a href='https://misskey.io/@k6t'>
            <Button color='primary' auto ghost>
              Misskey.io
            </Button>
          </a>
        </Grid>
      </Grid.Container>
    </>
  );
}
