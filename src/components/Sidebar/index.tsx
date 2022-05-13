import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { changeSidebarState } from '../../redux/slices/Sidebar';
import { SidebarBottomSide } from './BottomSidebar';
import { SidebarTopSide } from './TopSidebar';
import { SidebarContainer } from './Container';

export function Sidebar() {
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.sidebar.open);

  function handleSidebar() {
    dispatch(changeSidebarState());
  }

  return (
    <SidebarContainer open={open}>
      <SidebarTopSide open={open} onClick={handleSidebar} />
      <SidebarBottomSide open={open} />
    </SidebarContainer>
  );
}
