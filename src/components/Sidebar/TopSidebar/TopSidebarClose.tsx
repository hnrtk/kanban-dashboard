import { Divider, VStack } from '@chakra-ui/react';
import { AngularLogo, Clock, Kanban, Newspaper, SquaresFour } from 'phosphor-react';
import { SidebarTrigger } from '../Trigger';
import { TopSideItem } from './Item';

interface Props {
  open: boolean;
  onClick: () => void;
}
const items = [
  { name: 'Dashboard', icon: <SquaresFour size='28px' />, route: '/dashboard' },
  { name: 'Projetos', icon: <Kanban size='28px' />, route: '/projects' },
  { name: 'News', icon: <Newspaper size='28px' />, route: '/news' },
  { name: 'Carga horária', icon: <Clock size='28px' />, route: '/workload' },
];

export function TopSideClose(props: Props) {
  return (
    <VStack spacing={0}>
      <VStack divider={<Divider orientation='horizontal' />}>
        <AngularLogo size='36px' color='#f10' />
        <SidebarTrigger {...props} />
        <></>
      </VStack>
      <VStack as='nav' p='8px'>
        {items.map((item) => (
          <TopSideItem key={item.name} {...item} />
        ))}
      </VStack>
    </VStack>
  );
}
