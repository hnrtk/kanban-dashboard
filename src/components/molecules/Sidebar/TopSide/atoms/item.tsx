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
      borderRadius='8px'
      _hover={{
        background: 'blue.500',
        transform: 'scale(1.1)',
      }}
    />
  );
}
