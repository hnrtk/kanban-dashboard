import { Flex } from '@chakra-ui/react';

interface Props {
  open: boolean;
  children: React.ReactElement[];
}

export function SidebarContainer({ open, children }: Props) {
  return (
    <Flex
      w={open ? '240px' : '76px'}
      borderRadius={open ? '24px' : '30px'}
      h='95vh'
      flexDir='column'
      justifyContent='space-between'
      alignItems='center'
      pos='sticky'
      left='5'
      mt='5'
      py='28px'
      px='8px'
      bg='red.900'
      boxShadow='0 4px 12px 0 rgba(0, 0, 0, 0.05)'
      transition='all 0.2s'
    >
      {children}
    </Flex>
  );
}
