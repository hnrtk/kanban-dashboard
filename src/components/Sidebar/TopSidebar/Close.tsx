import { Flex, Divider, VStack } from '@chakra-ui/react';
import { AngularLogo, Kanban, SquaresFour } from 'phosphor-react';
import { SidebarTrigger } from '../Trigger';
import { TopSideItem } from './Item';
import { TopSideList } from './List';

interface Props {
  open: boolean;
  onClick: () => void;
}
const items = [
  { name: 'Dashboard', icon: <SquaresFour size='28px' />, route: '/dashboard' },
  { name: 'Projects', icon: <Kanban size='28px' />, route: '/projects' },
];

export function TopSideClose(props: Props) {
  return (
    <Flex as='nav' flexDir='column' alignItems='center' overflow='hidden' w='100%'>
      <VStack w='100%' h='100%' spacing={3}>
        <AngularLogo size='58px' color='#f10' />
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
