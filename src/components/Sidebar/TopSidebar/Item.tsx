import { IconButton } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface Props {
  name: string;
  icon: React.ReactElement;
  route: string;
}

export function TopSideItem({ name, icon, route }: Props) {
  return (
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
  );
}
