import styled from 'styled-components';
import {
  top,
  left,
  right,
  bottom,
  zIndex,
} from 'styled-system';

import Box from '../Box';

export default styled(Box)`
  position: fixed;

  ${top}
  ${left}
  ${right}
  ${bottom}
  ${zIndex}
`;
