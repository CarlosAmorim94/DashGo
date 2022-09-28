import { Box, Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import NavLink from "./NavLink";
import NavSection from "./NavSection";

export default function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NavLink icon={RiDashboardLine} textLink="Dashboard" />
          <NavLink icon={RiContactsLine} textLink="Usuários" />
        </NavSection>
        <NavSection title="AUTOMAÇÃO">
          <NavLink icon={RiInputMethodLine} textLink="Formulários" />
          <NavLink icon={RiGitMergeLine} textLink="Automação" />
        </NavSection>
      </Stack>
    </Box>
  );
}
