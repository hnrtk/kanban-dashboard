import { Flex } from '@chakra-ui/react';
import { TopSideClose } from './TopSidebarClose';
import { TopSideOpen } from './TopSidebarOpen';

interface Props {
  open: boolean;
  onClick: () => void;
}

export function SidebarTopSide({ open, onClick }: Props) {
  return (
    <Flex
      justifyContent={open ? 'space-between' : ''}
      p='4px'
      w='100%'
      alignItems='center'
      overflow='hidden'
    >
      {open ? (
        <TopSideOpen open={open} onClick={onClick} />
      ) : (
        <TopSideClose open={open} onClick={onClick} />
      )}
    </Flex>
  );
}
