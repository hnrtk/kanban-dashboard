import { Flex } from '@chakra-ui/react';
import { Content } from './components/organisms/Content';
import { Sidebar } from './components/organisms/Sidebar';

export function App() {
  return (
    <Flex width='100%'>
      <Sidebar />
      <Content />
    </Flex>
  );
}
