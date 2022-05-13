import { Flex, Avatar, Stack, Text, HStack } from '@chakra-ui/react';
import { SidebarThemeSwitcher } from '../ThemeSwitcher';

interface Props {
  open: boolean;
}

export function BottomSidebarOpen(props: Props) {
  return (
    <Flex flexDir='column'>
      <Stack spacing={4}>
        <SidebarThemeSwitcher {...props} />
        <HStack>
          <Avatar src='https://bit.ly/broken-link' name='Henry Gabriel' size='sm' />
          <Text whiteSpace='nowrap'>Henry Gabriel</Text>
        </HStack>
      </Stack>
    </Flex>
  );
}
