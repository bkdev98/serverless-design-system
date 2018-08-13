import React from 'react';
import PropTypes from 'prop-types';

import { Flex, Heading, Image, ResponsiveStack } from '../../atoms';
import { P } from '../../molecules';

const UseCase = ({ title, description, imgSrc, imageFirst }) => {
  const descSectionPadding = {
    [ imageFirst ? 'pl' : 'pr' ] : [ 0, 0, '55px', '110px' ]
  };

  return (
    <ResponsiveStack py={[0, 0, 4]}>
      <Flex.horizontallyCenter
        flexDirection="column"
        width={[1, 1, 5/10]}
        mb={2}
        order={imageFirst ? [2, 2, 2] : [2, 2, 1]}
        { ...descSectionPadding }
      >
        <Heading.h3 fontFamily="SoleilBk">
          {title}
        </Heading.h3>
        <P>
          {description}
        </P>
      </Flex.horizontallyCenter>
      <Flex.horizontallyCenter
        width={[1, 1, 5/10]}
        mb={2}
        order={imageFirst ? [1, 1, 1] : [1, 1, 2]}
      >
        <Image
          src={imgSrc}
          alt={title}
          maxWidth={1}
          width={[ '100%', '80%', '60%', '80%' ]}
          my="auto"
        />
      </Flex.horizontallyCenter>
    </ResponsiveStack>
  );
}

UseCase.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imageFirst: PropTypes.bool.isRequired,
};

export default UseCase;