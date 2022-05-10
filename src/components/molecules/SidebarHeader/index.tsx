import { Box, Flex, IconButton } from '@chakra-ui/react';
import { AngularLogo, ArrowSquareRight } from 'phosphor-react';
import { useAppDispatch } from '../../../redux/hooks';
import { changeSidebarState } from '../../../redux/slices/Sidebar';

export function SidebarHeader() {
  const dispatch = useAppDispatch();
  return (
    <Flex as='nav' flexDir='column' alignItems='center'>
      <AngularLogo size='32px' color='#f10' />
      <Box mt='5'>
        <IconButton
          background='none'
          _hover={{ background: 'none' }}
          aria-label='Botão para abrir ou fechar o menu'
          icon={<ArrowSquareRight size='28px' />}
          onClick={() => dispatch(changeSidebarState())}
        />
      </Box>
    </Flex>
  );
}
