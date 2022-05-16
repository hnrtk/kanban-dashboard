import {
  Flex,
  IconButton,
  Text,
  Tooltip,
  Link as ChakraUILink,
  Stack,
  Icon,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface Props {
  open: boolean;
  name: string;
  icon: React.ReactElement;
  route: string;
}

export function TopSideItem({ open, name, icon, route }: Props) {
  return open ? (
    <Stack
      direction='row'
      alignItems='center'
      w='100%'
      bgColor='blue.700'
      borderRadius='12px'
      py='6px'
      px='12px'
      cursor='pointer'
      _hover={{
        backgroundColor: 'blue.800',
        transition: 'all 0.4s',
      }}
    >
      {icon}
      <Text whiteSpace='nowrap'>{name}</Text>
    </Stack>
  ) : (
    <Tooltip label={name} hasArrow placement='right' aria-label={name} gutter={24}>
      <Link to={route}>
        <IconButton
          as='a'
          aria-label={name}
          icon={icon}
          background='none'
          borderRadius='8px'
          _hover={{
            background: 'blue.500',
            transform: 'scale(1.2)',
          }}
        />
      </Link>
    </Tooltip>
  );
}
