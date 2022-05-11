import { SidebarBottomSide } from '../../molecules/Sidebar/BottomSide';
import { SidebarTopSide } from '../../molecules/Sidebar/TopSide';
import { SidebarContainer } from './container';

export function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarTopSide />
      <SidebarBottomSide />
    </SidebarContainer>
  );
}
