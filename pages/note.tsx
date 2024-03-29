import { Grid, Card, Col, Row, Button, Text, Spacer } from '@nextui-org/react';
import React from 'react';

export interface Props {
  item: IGetNoteReposne[];
}
export interface IGetNoteReposne {
  id: string;
  createdAt: Date;
  userId: string;
  user: {
    username: 'string';
    avatarUrl: 'string';
  };
  text: string;
  cw: null;
  files: INoteFileReponse[];
  replyId: null;
  renoteId: null;
  hostName: string;
  url: string;
}

export interface INoteFileReponse {
  id: string;
  url: string;
  thumbnailUrl: string;
}

export const CardTemplate = (note: IGetNoteReposne) => {
  return (
    <Card css={{ w: '100%', h: '300px' }}>
      <Card.Header
        style={{ display: note.text ? '' : 'none' }}
        css={{
          position: 'absolute',
          zIndex: 1,
          bgBlur: '#0f111466',
          borderBottom: '$borderWeights$light solid $gray800',
        }}
      >
        <Col>
          <Text color='##889096'>{note.text}</Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={note.files[0].thumbnailUrl}
          objectFit='cover'
          width='100%'
          height='100%'
          alt='Relaxing app background'
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: 'absolute',
          bgBlur: '#0f111466',
          borderTop: '$borderWeights$light solid $gray800',
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Row>
              <Col span={5} css={{ mr: '$5' }}>
                <Card.Image
                  src={note.user.avatarUrl}
                  css={{ bg: 'black', br: '50%' }}
                  height={40}
                  width={40}
                  alt='Breathing app icon'
                />
              </Col>
              <Col>
                <Text color='#d1d1d1' size={12}>
                  {note.user.username}
                </Text>
                <Text color='#d1d1d1' size={12}>
                  {note.hostName}
                </Text>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row justify='flex-end'>
              <Button
                flat
                auto
                rounded
                css={{ color: '#94f9f0', bg: '#94f9f026' }}
                onClick={() => {
                  location.href = note.url;
                }}
              >
                <Text
                  css={{ color: 'inherit' }}
                  size={12}
                  weight='bold'
                  transform='uppercase'
                >
                  詳細
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export const note = ({ item }: any) => {
  return (
    <>
      <Spacer x={14} />
      <Grid.Container gap={2}>
        {item.map((e: any, index: number) => (
          <Grid xs={12} sm={2} key={index}>
            {CardTemplate(e)}
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
};

export default note;

export const getServerSideProps = async () => {
  const response = await fetch(' https://girak.moe/api/users/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      i: process.env.MISSKEY_GIRAK_MOE_TOKEN,
      userId: '9bkipk0md8',
      withFiles: true,
    }),
  });
  const responseIo = await fetch(' https://misskey.io/api/users/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      i: process.env.MISSKEY_IO_TOKEN,
      userId: '99pmq938i4',
      withFiles: true,
      limit: 20,
    }),
  });
  const item: IGetNoteReposne[] = await response.json();
  const itemIo: IGetNoteReposne[] = await responseIo.json();
  item.forEach((noteGirak) => {
    noteGirak.hostName = 'Girak.moe';
    noteGirak.url = ' https://girak.moe/notes/' + noteGirak.id;
  });
  itemIo.forEach((noteIo) => {
    noteIo.hostName = 'Misskey.io';
    noteIo.url = ' https://misskey.io/notes/' + noteIo.id;
    item.push(noteIo);
  });
  //以下のconsole.logはブラウザで実行されない
  return {
    props: {
      item,
    },
  };
};
