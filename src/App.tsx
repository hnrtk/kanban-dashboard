import { Flex } from '@chakra-ui/react';
import { Content } from './components/Content';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <Flex width='100vw'>
      <Sidebar />
      <Content />
    </Flex>
  );
}
