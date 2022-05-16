import { Flex, HStack, Stack, Text, VStack } from '@chakra-ui/react';
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

export function TopSideOpen(props: Props) {
  return (
    <Flex flexDir='column' w='100%'>
      <Stack direction='column' spacing={6}>
        <Flex justifyContent='space-between' alignItems='center' w='100%'>
          <HStack spacing={2} h='100%'>
            <AngularLogo size='32px' color='#f10' />
            <Text whiteSpace='nowrap'>Nome do projeto</Text>
          </HStack>
          <SidebarTrigger {...props} />
        </Flex>
        <Stack direction='column' as='nav' w='100%' spacing={4}>
          {items.map((item) => (
            <TopSideItem key={item.name} open={props.open} {...item} />
          ))}
        </Stack>
      </Stack>
    </Flex>
  );
}
