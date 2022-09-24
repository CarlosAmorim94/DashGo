import { Button, Flex, Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Input from "../components/Form/Input";

const SignIn: NextPage = () => {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p={8}
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing={4}>
          <Input name="email" label="Email" type="email" />
          <Input name="password" label="Senha" type="password" />
          <Button type="submit" mt={6} colorScheme="pink" size="lg">
            Entrar
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default SignIn;
