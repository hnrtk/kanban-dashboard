import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { changeSidebarState } from '../../../../redux/slices/Sidebar';

import { TopSideClose } from './close';
import { TopSideOpen } from './open';

export function SidebarTopSide() {
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.sidebar.open);

  function handleSidebar() {
    dispatch(changeSidebarState());
  }

  return open ? (
    <TopSideOpen open={open} onClick={handleSidebar} />
  ) : (
    <TopSideClose open={open} onClick={handleSidebar} />
  );
}
