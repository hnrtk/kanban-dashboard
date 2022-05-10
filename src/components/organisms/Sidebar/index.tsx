import { useAppSelector } from '../../../redux/hooks';

import { SidebarFooter } from '../../molecules/SidebarFooter';
import { SidebarHeader } from '../../molecules/SidebarHeader';
import { SidebarMain } from '../../molecules/SidebarMain';
import { SidebarContainer } from './container';

export function Sidebar() {
  const open = useAppSelector((state) => state.sidebar.open);

  return (
    <SidebarContainer open={open}>
      <SidebarHeader />
      <SidebarMain />
      <SidebarFooter />
    </SidebarContainer>
  );
}
