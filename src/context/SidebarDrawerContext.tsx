import {
  MenuDescendantsProvider,
  useDisclosure,
  UseDisclosureReturn,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

type SidebarDrawerContextProps = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContextProps);

export function SidebarDrawerProvider({
  children,
}: SidebarDrawerProviderProps) {
  //Hook do Chakra para verificar e colocar ações no menu hamburguer.
  const disclosure = useDisclosure();

  //Toda vez que a rota MenuDescendantsProvider, fechar o menu hamburguer automático... router.asPath é a rota atual
  const router = useRouter();
  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

//Para não usar o useContext, vamos criar um hook
export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
