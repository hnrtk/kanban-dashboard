import { TopSideClose } from './molecules/close';
import { TopSideOpen } from './molecules/open';

interface Props {
  open: boolean;
  onClick: () => void;
}

export function SidebarTopSide({ open, onClick }: Props) {
  return open ? (
    <TopSideOpen open={open} onClick={onClick} />
  ) : (
    <TopSideClose open={open} onClick={onClick} />
  );
}
