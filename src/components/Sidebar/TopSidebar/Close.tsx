import { Divider, VStack } from '@chakra-ui/react';
import { AngularLogo, Kanban, SquaresFour } from 'phosphor-react';
import { SidebarTrigger } from '../Trigger';
import { TopSideItem } from './Item';

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
    <VStack w='100%' h='100%' spacing={3}>
      <AngularLogo size='58px' color='#f10' />
      <Divider orientation='horizontal' />
      <SidebarTrigger {...props} />
      <Divider orientation='horizontal' />
      <VStack as='nav' h='100%' w='100%'>
        {items.map((item) => (
          <TopSideItem key={item.name} {...item} />
        ))}
      </VStack>
    </VStack>
  );
}
