import { Flex, HStack, Text, Box } from '@chakra-ui/react';
import { AngularLogo } from 'phosphor-react';
import { SidebarTrigger } from '../../../atoms/Sidebar/Trigger';

interface Props {
  open: boolean;
  onClick: () => void;
}

export function HeaderOpen(props: Props) {
  return (
    <Flex
      as='nav'
      flexDir='row'
      alignItems='center'
      width='100%'
      justifyContent='space-between'
      overflow='hidden'
      px='4px'
    >
      <HStack spacing={2} alignItems='center'>
        <AngularLogo size='32px' color='#f10' />
        <Text whiteSpace='nowrap'>Nome do projeto</Text>
      </HStack>
      <SidebarTrigger {...props} />
    </Flex>
  );
}
