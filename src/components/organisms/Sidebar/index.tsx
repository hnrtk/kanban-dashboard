import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { changeSidebarState } from '../../../redux/slices/Sidebar';
import { SidebarBottomSide } from '../../molecules/Sidebar/BottomSide';
import { SidebarTopSide } from '../../molecules/Sidebar/TopSide';
import { SidebarContainer } from './container';

export function Sidebar() {
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.sidebar.open);

  function handleSidebar() {
    dispatch(changeSidebarState());
  }

  return (
    <SidebarContainer>
      <SidebarTopSide open={open} onClick={handleSidebar} />
      <SidebarBottomSide />
    </SidebarContainer>
  );
}
