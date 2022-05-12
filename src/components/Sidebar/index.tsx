import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { changeSidebarState } from '../../redux/slices/Sidebar';
import { SidebarBottomSide } from './BottomSidebar';
import { SidebarTopSide } from './TopSidebar';
import { Flex } from '@chakra-ui/react';

export function Sidebar() {
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.sidebar.open);

  function handleSidebar() {
    dispatch(changeSidebarState());
  }

  return (
    <Flex
      w={open ? '240px' : '76px'}
      borderRadius={open ? '24px' : '30px'}
      border={open ? '1px solid green' : '1px solid transparent'}
      h='95vh'
      flexDir='column'
      justifyContent='space-between'
      alignItems='center'
      pos='sticky'
      left={5}
      mt={5}
      py='28px'
      px='8px'
      bg='gray.700'
      boxShadow='0 4px 12px 0 rgba(0, 0, 0, 0.05)'
      transition='all 0.2s'
      zIndex='modal'
    >
      <SidebarTopSide open={open} onClick={handleSidebar} />
      <SidebarBottomSide />
    </Flex>
  );
}
