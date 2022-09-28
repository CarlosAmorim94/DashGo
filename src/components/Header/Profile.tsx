import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface ProfileProps {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Carlos Amorim</Text>
          <Text color="gray.300" fontSize="small">
            carlos.av.amorim@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Carlos Amorim"
        src="https://github.com/CarlosAmorim94.png"
      />
    </Flex>
  );
}
