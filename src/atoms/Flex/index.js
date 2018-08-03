import styled from 'styled-components';
import {
  alignItems,
  border,
  borderColor,
  color,
  display,
  flexDirection,
  flexWrap,
  justifyContent,
  order,
  space,
  width,
  height,
  maxWidth,
  position,
  top
} from 'styled-system';

const boxSizing = (props) => ({
  boxSizing: props.boxSizing || null,
});

const Flex = styled.div`
  display: flex;
  ${alignItems}
  ${border}
  ${borderColor}
  ${color}
  ${flexDirection}
  ${flexWrap}
  ${justifyContent}
  ${order}
  ${space}
  ${width}
  ${height}
  ${maxWidth}
  ${boxSizing}
  ${position}
  ${top}
`;

export default Flex;
