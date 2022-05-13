import { VStack } from '@chakra-ui/react';

interface Props {
  children: React.ReactElement[];
}

export function TopSideList({ children }: Props) {
  return (
    <VStack as='nav' h='100%' w='100%'>
      {children}
    </VStack>
  );
}
