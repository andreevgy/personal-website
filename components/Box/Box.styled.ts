import styled from "styled-components";
import {
  space,
  color,
  SpaceProps,
  ColorProps,
  flex,
  FlexProps,
  FlexboxProps,
  flexbox,
  display,
  DisplayProps, layout, LayoutProps
} from "styled-system";

export interface BoxProps extends SpaceProps, ColorProps, FlexProps, FlexboxProps, DisplayProps, LayoutProps {}

const Box = styled.div<BoxProps>(space, color, flex, flexbox, display, layout);

export default Box;
