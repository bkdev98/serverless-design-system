import React from 'react'
import styled from 'styled-components'

import Heading from './Heading'
import {P} from './Typography'
import Img from './Image'
import Box from './Box'

const comp = ({img, title, description})=> {
  return(
    <Box
      px={[3,4]}
      py={4}
    >
      <Box
        display='flex'
      >
        <Img
          height='100%'
          src={img}
          alt={title}
          mx='auto'
        />
      </Box>

      <Heading.h3
        textAlign="center"
        my={3}
      >
        {title}
      </Heading.h3>
      <P
        textAlign='center'
        mt={0}
      >
        {description}
      </P>

    </Box>
  );
}

const ImgCard = styled(comp)``

export default ImgCard;