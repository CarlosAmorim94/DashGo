import { Button, Flex, Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Input } from "../components/Form/Input";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type SignInFormData = {
  email: string;
  password: string;
};

const singInFormSchema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});

const SignIn: NextPage = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(singInFormSchema),
  });

  const { errors } = formState;

  //Tipamos a função com SubmitHandler(+generic de SignInFormData para values), pois já vem com o event tipado, caso precisamos usar, mas pode ser adicionado diretamente na props sem problems (values: SignInFormData)
  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input
            name="email"
            label="Email"
            type="email"
            {...register("email")}
            error={errors.email}
          />
          <Input
            name="password"
            label="Senha"
            type="password"
            {...register("password")}
            error={errors.password}
          />
          <Button
            type="submit"
            mt={6}
            colorScheme="pink"
            size="lg"
            isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default SignIn;
