import styled from "styled-components";
import Box, {BoxProps} from "../Box";
import {variant} from "styled-system";

export type TextVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'regular' | 'bold' | 'small' | 'link';

export interface TextProps extends BoxProps {
  variant?: TextVariants;
}

const Text = styled(Box)<TextProps>(
  variant({
    variants: {
      h1: {
        fontSize: 5,
        fontWeight: 800,
      },
      h2: {
        fontSize: 4,
        fontWeight: 800,
      },
      h3: {
        fontSize: 3,
        fontWeight: 800,
      },
      h4: {
        fontSize: 2,
        fontWeight: 800,
      },
      h5: {
        fontSize: 1,
        fontWeight: 800,
      },
      regular: {
        fontSize: 1,
      },
      bold: {
        fontSize: 1,
        fontWeight: 800,
      },
      small: {
        fontSize: 0,
      },
      link: {
        fontSize: 1,
        cursor: 'pointer',
        textDecoration: 'underline',
      }
    }
  })
);

Text.defaultProps = {
  variant: 'regular',
  color: 'text',
}

export default Text;
