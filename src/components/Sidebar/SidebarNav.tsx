import { Stack } from "@chakra-ui/react";
import React from "react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import NavLink from "./NavLink";
import NavSection from "./NavSection";

export default function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink
          icon={RiDashboardLine}
          textLink="Dashboard"
          href="/dashboard"
        />
        <NavLink icon={RiContactsLine} textLink="Usuários" href="/users" />
      </NavSection>
      <NavSection title="AUTOMAÇÃO">
        <NavLink
          icon={RiInputMethodLine}
          textLink="Formulários"
          href="/forms"
        />
        <NavLink
          icon={RiGitMergeLine}
          textLink="Automação"
          href="/automation"
        />
      </NavSection>
    </Stack>
  );
}
