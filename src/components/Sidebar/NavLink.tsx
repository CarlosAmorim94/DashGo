import {
  Icon,
  Link,
  LinkProps as ChakraLinkProps,
  Text,
} from "@chakra-ui/react";
import React, { ElementType } from "react";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType; //Passa um nome "IconeQualquer" do componente e não a declaração completa "<IconeQualquer />""
  textLink: string;
}
//...rest coleta todas as outras props adicionadas no componente , como o type não será fixo, devemos tipar com extends
export default function NavLink({ icon, textLink, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" alignContent="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {textLink}
      </Text>
    </Link>
  );
}
