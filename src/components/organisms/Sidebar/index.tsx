import { Flex } from '@chakra-ui/react';

import { SidebarFooter } from '../../molecules/SidebarFooter';
import { SidebarHeader } from '../../molecules/SidebarHeader';
import { SidebarMain } from '../../molecules/SidebarMain';

export function Sidebar() {
  return (
    <Flex>
      <SidebarHeader />
      <SidebarMain />
      <SidebarFooter />
    </Flex>
  )
}