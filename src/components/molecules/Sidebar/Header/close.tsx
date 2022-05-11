import { Flex, Box } from '@chakra-ui/react';
import { AngularLogo } from 'phosphor-react';
import { SidebarTrigger } from '../../../atoms/Sidebar/SidebarTrigger';

interface Props {
  open: boolean;
  onClick: () => void;
}

export function HeaderClose(props: Props) {
  return (
    <Flex as='nav' flexDir='column' alignItems='center' overflow='hidden'>
      <AngularLogo size='32px' color='#f10' />
      <Box mt={5}>
        <SidebarTrigger {...props} />
      </Box>
    </Flex>
  );
}
