import { IconButton } from '@chakra-ui/react';

interface Props {
  name: string;
  icon: React.ReactElement;
  // route: string;
}

export function TopSideItem({ name, icon }: Props) {
  return (
    <IconButton
      aria-label={name}
      icon={icon}
      background='none'
      _hover={{ background: 'blue.500' }}
    />
  );
}
