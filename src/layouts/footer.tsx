import React from 'react';
import {Container, Row, Text, CSS} from '@nextui-org/react';

export interface Props {
  css?: CSS;
  containerCss?: CSS;
}

const Footer: React.FC<Props> = ({css, containerCss}) => {
  // const year = new Date().getFullYear();
  return (
    <Container
      fluid
      css={{
        zIndex: '$1',
        padding: '$md $sm',
        '@xsMax': {
          padding: '$sm $xs',
        },
        ...containerCss,
      }}
      gap={2}
    >
      <Row css={css} justify="center">
        <Text
          span
          css={{
            fontSize: '$sm',
            '@mdMax': {
              fontSize: '$xs'
            }
          }}
        >
          &copy;&nbsp;Copyright&nbsp;2022&nbsp;<a href="https://coinsummer.io" style={{ color: '#0072F5' }} target="_blank" rel="noreferrer">CoinSummer</a>
        </Text>
      </Row>
    </Container>
  );
};

export default Footer;
