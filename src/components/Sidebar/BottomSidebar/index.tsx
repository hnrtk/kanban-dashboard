import { Avatar, Flex, VStack } from '@chakra-ui/react';
import { SidebarThemeSwitcher } from '../ThemeSwitcher';

export function SidebarBottomSide() {
  return (
    <Flex flexDir='column'>
      <VStack spacing={4}>
        <SidebarThemeSwitcher />
        <Avatar src='https://bit.ly/broken-link' name='Henry Gabriel' w='40px' h='40px' />
      </VStack>
    </Flex>
  );
}
