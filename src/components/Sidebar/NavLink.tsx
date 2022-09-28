import {
  Icon,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { ElementType } from "react";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType; //Passa um nome "IconeQualquer" do componente e não a declaração completa "<IconeQualquer />""
  textLink: string;
  href: string;
}
//...rest coleta todas as outras props adicionadas no componente , como o type não será fixo, devemos tipar com extends
export default function NavLink({
  icon,
  textLink,
  href,
  ...rest
}: NavLinkProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink display="flex" alignContent="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {textLink}
        </Text>
      </ChakraLink>
    </Link>
  );
}
