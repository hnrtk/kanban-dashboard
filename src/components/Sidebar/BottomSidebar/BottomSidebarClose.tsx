import { Flex, VStack, Avatar } from '@chakra-ui/react';
import { SidebarThemeSwitcher } from '../ThemeSwitcher';

interface Props {
  open: boolean;
}

export function BottomSidebarClose(props: Props) {
  return (
    <Flex flexDir='column'>
      <VStack spacing={4}>
        <SidebarThemeSwitcher {...props} />
        <Avatar src='https://bit.ly/broken-link' name='Henry Gabriel' size='sm' />
      </VStack>
    </Flex>
  );
}
