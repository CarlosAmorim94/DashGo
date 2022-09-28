import { Box, Stack, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface NavSectionProps {
  title: string;
  children: ReactNode; //Aceita todas as tags do react
}

export default function NavSection({ title, children }: NavSectionProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {title}
      </Text>
      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  );
}
