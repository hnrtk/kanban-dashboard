import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { changeSidebarState } from '../../../../redux/slices/Sidebar';

import { HeaderClose } from './close';
import { HeaderOpen } from './open';

export function SidebarHeader() {
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.sidebar.open);

  function handleSidebar() {
    dispatch(changeSidebarState());
  }

  return open ? (
    <HeaderOpen open={open} onClick={handleSidebar} />
  ) : (
    <HeaderClose open={open} onClick={handleSidebar} />
  );
}
