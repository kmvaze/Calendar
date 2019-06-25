import React from 'react';
import {
  Button,
  Box,
  Media,
  Image,
  Content,
  Level
} from 'react-bulma-components/full';

import ReactAudioPlayer from 'react-audio-player';

function PravachanBox(props) {
  return (
    <Box>
      <Media>
        <Media.Item renderAs="figure" position="left">
          <Image
            renderAs="p"
            size={64}
            alt="64x64"
            // src="http://shree-dnyaneshwari-prasarak-mandal.org/slideshowphotos/Swamiji/MakarandNath%203.jpg"
            src={props.p.artworkUrl}
          />
        </Media.Item>
        <Media.Item>
          <Content>
            <p>
              <strong>{props.p.title}</strong>
              <br />
              {props.p.description} <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
              non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
            <ReactAudioPlayer
              className="Audio-player"
              src={props.p.audioUrl}
              controls
            />
          </Content>
          <Level breakpoint="mobile">
            <Level.Side align="left">
              <Button link>Favorite</Button>
              <Button link>Share</Button>
            </Level.Side>
          </Level>
        </Media.Item>
      </Media>
    </Box>
  );
}

export default PravachanBox;
