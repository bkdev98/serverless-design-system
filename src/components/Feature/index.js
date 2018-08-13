import React from 'react';
import PropTypes from 'prop-types';

import { Box, Heading, Image } from '../../atoms';
import { P } from '../../molecules';
import withBeforeAfter from '../../withBeforeAfter';

const HeaderWithCount = withBeforeAfter(
  Heading.h3,
  `&`,
  `
    position: absolute;
    color: #fd5750;
    font-family: 'Soleil';
    font-size: 160px;
    font-size: 10rem;
    line-height: 1;
    z-index: -1;
    opacity: 0.2;
    top: 7.5rem;
    left: -5rem;
  `
);

const Feature = ({ header, img, content, rightAligned }) => (
  <Box.relative
    width={[1, 1, 3/7, 4/10]}
    mr={[0, 0, 2, rightAligned ? '10%' : 0]}
    ml={[0, 0, 2, rightAligned ? 0 : '10%' ]}
    pb={[4, 4, 6]}
    style={{ counterIncrement: 'step-counter' }}
  >
    <Image src={img} mb={25} />
    <HeaderWithCount
      fontFamily="SoleilBk"
      beforeBoxContent={[
        'none',
        'none',
        "counter(step-counter, decimal-leading-zero)"
      ]}
    >
      {header}
    </HeaderWithCount>
    <P>{content}</P>
  </Box.relative>
);

Feature.propTypes = {
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Feature;