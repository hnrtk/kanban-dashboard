import { Flex } from '@chakra-ui/react';
import { BottomSidebarClose } from './BottomSidebarClose';
import { BottomSidebarOpen } from './BottomSidebarOpen';

interface Props {
  open: boolean;
}

export function SidebarBottomSide({ open }: Props) {
  return (
    <Flex flexDir='column' p={open ? '4px' : '0px'} w='100%' overflow='hidden'>
      {open ? <BottomSidebarOpen open={open} /> : <BottomSidebarClose open={open} />}
    </Flex>
  );
}
