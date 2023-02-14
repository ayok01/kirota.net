import Head from 'next/head';
import { Inter } from '@next/font/google';
import { Text, Grid, Image, Button, useTheme } from '@nextui-org/react';

export default function Home() {
  const ThemeState = useTheme();
  return (
    <>
      <Grid.Container gap={2}>
        <Grid xs={12} md={12} css={{ paddingTop: '$20' }}>
          {ThemeState.isDark && (
            <Image
              src='https://storage.googleapis.com/misskey-kirota-server/misskey-kirota-server/d57a6d2f-5f0e-4ad4-ae6d-58510145425f.png'
              objectFit='cover'
              alt='Default Image'
              width={200}
              height={200}
              css={{ borderRadius: '50%', justifyContent: 'center' }}
            />
          )}
          {!ThemeState.isDark && (
            <Image
              src='https://storage.googleapis.com/misskey-kirota-server/misskey-kirota-server/8410ab99-19ad-48e1-a05b-84a6fc4b6b83.png'
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
          md={12}
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
          <Text h6 weight='thin'>
            @shirotsuki_ki@mk.kirota.net
          </Text>
        </Grid>
      </Grid.Container>
      <Grid.Container gap={2} css={{ justifyContent: 'center' }}>
        <Grid>
          <a href='https://mk.kirota.net/@shirotsuki_ki'>
            <Button shadow color='success' auto>
              Misskey
            </Button>
          </a>
        </Grid>
        <Grid>
          <a href='https://twitter.com/sk_ki6ta'>
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
          <a href='https://github.com/kirota401e'>
            <Button shadow color='gradient' auto>
              GitHub
            </Button>
          </a>
        </Grid>
      </Grid.Container>
    </>
  );
}
