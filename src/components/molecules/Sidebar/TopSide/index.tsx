import { TopSideClose } from './molecules/close';
import { TopSideOpen } from './molecules/open';
import { Flex } from '@chakra-ui/react';

interface Props {
  open: boolean;
  onClick: () => void;
}

export function SidebarTopSide({ open, onClick }: Props) {
  return open ? (
    <>
      <TopSideOpen open={open} onClick={onClick} />
    </>
  ) : (
    <Flex flexDir='column'>
      <TopSideClose open={open} onClick={onClick} />
    </Flex>
  );
}
