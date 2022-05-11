import { Box } from '@chakra-ui/react';
import { SidebarFooter } from '../../molecules/Sidebar/Footer';
import { SidebarHeader } from '../../molecules/Sidebar/Header';
import { SidebarMain } from '../../molecules/Sidebar/Main';
import { SidebarContainer } from './container';

export function Sidebar() {
  return (
    <SidebarContainer>
      <Box>
        <SidebarHeader />
        <SidebarMain />
      </Box>
      <SidebarFooter />
    </SidebarContainer>
  );
}
