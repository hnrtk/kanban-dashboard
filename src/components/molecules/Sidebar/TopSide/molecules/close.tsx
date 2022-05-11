import { Flex, Divider, VStack } from '@chakra-ui/react';
import { AngularLogo, Kanban, SquaresFour } from 'phosphor-react';
import { SidebarTrigger } from '../../../../atoms/Sidebar/Trigger';
import { TopSideItem } from '../atoms/item';
import { TopSideList } from '../atoms/list';

interface Props {
  open: boolean;
  onClick: () => void;
}
const items = [
  { name: 'Dashboard', icon: <SquaresFour size='28px' /> },
  { name: 'Projects', icon: <Kanban size='28px' /> },
];

export function TopSideClose(props: Props) {
  return (
    <Flex as='nav' flexDir='column' alignItems='center' overflow='hidden' w='100%'>
      <VStack w='100%' h='100%'>
        <AngularLogo size='52px' color='#f10' />
        <Divider orientation='horizontal' />
        <SidebarTrigger {...props} />
        <Divider orientation='horizontal' />
        <TopSideList>
          {items.map((item) => (
            <TopSideItem key={item.name} {...item} />
          ))}
        </TopSideList>
      </VStack>
    </Flex>
  );
}
