import { Avatar, Flex, Stack } from '@chakra-ui/react';
import { SidebarThemeSwitcher } from '../ThemeSwitcher';

interface Props {
  open: boolean;
}

export function BottomSidebarClose(props: Props) {
  return (
    <Stack spacing={4} margin='0 auto'>
      <SidebarThemeSwitcher {...props} />
      <Flex w='100%' justifyContent='center'>
        <Avatar src='https://bit.ly/broken-link' name='Henry Gabriel' size='sm' />
      </Flex>
    </Stack>
  );
}
