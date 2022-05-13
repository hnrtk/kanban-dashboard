import { HStack, Text } from '@chakra-ui/react';
import { AngularLogo } from 'phosphor-react';
import { SidebarTrigger } from '../Trigger';

interface Props {
  open: boolean;
  onClick: () => void;
}

export function TopSideOpen(props: Props) {
  return (
    <>
      <HStack spacing={2}>
        <AngularLogo size='32px' color='#f10' />
        <Text whiteSpace='nowrap'>Nome do projeto</Text>
      </HStack>
      <SidebarTrigger {...props} />
    </>
  );
}
