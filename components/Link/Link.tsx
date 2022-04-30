import React from "react";
import Link, {LinkProps} from "next/link";
import Text, {TextProps} from "../Text";

interface CustomLinkProps extends LinkProps, Omit<TextProps, 'variant'> {
  children: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = (props) => {
  return <Link {...props}>
    <Text variant='link' {...props as any}>{props.children}</Text>
  </Link>
}

export default CustomLink;
