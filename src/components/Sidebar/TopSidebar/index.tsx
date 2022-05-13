import { Flex } from '@chakra-ui/react';
import { TopSideClose } from './Close';
import { TopSideOpen } from './Open';

interface Props {
  open: boolean;
  onClick: () => void;
}

export function SidebarTopSide({ open, onClick }: Props) {
  return (
    <Flex
      flexDir={open ? 'row' : 'column'}
      justifyContent={open ? 'space-between' : ''}
      px={open ? '4px' : '0px'}
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
