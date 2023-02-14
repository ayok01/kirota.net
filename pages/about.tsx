import Head from 'next/head';
import { Inter } from '@next/font/google';
import { Text, Grid, Image, Button } from '@nextui-org/react';

export default function Home() {
  return (
    <>
      <Grid.Container gap={2}>
        <Grid xs={12} md={12} css={{ paddingTop: '$20' }}>
          <Image
            src='https://storage.googleapis.com/misskey-kirota-server/misskey-kirota-server/webpublic-31ea10df-25d3-4025-ba88-5c7c2b98ee49.png'
            objectFit='cover'
            alt='Default Image'
            width={200}
            height={200}
            css={{ borderRadius: '50%', justifyContent: 'center' }}
          />
        </Grid>
        <Grid
          xs={12}
          md={12}
          css={{
            justifyContent: 'center',
          }}
        >
          <Text h3>白月 きろた</Text>
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
          <Button shadow color='primary' auto>
            Twitter
          </Button>
        </Grid>
        <Grid>
          <Button shadow color='primary' auto>
            Pixiv
          </Button>
        </Grid>
        <Grid>
          <Button shadow color='gradient' auto>
            GitHub
          </Button>
        </Grid>
      </Grid.Container>
    </>
  );
}
