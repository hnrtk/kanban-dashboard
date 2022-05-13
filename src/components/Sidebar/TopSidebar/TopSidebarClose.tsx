import { Divider, VStack } from '@chakra-ui/react';
import { AngularLogo, Kanban, SquaresFour } from 'phosphor-react';
import { SidebarTrigger } from '../Trigger';
import { TopSideItem } from './Item';

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
    <VStack>
      <VStack divider={<Divider orientation='horizontal' />}>
        <AngularLogo size='36px' color='#f10' />
        <SidebarTrigger {...props} />
      </VStack>
      <VStack as='nav' p='8px'>
        {items.map((item) => (
          <TopSideItem key={item.name} {...item} />
        ))}
      </VStack>
    </VStack>
  );
}
