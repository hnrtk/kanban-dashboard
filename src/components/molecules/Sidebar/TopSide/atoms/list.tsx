import { VStack } from '@chakra-ui/react';

interface Props {
  children: React.ReactElement[];
}

export function TopSideList({ children }: Props) {
  return (
    <VStack as='nav' overflow='hidden'>
      {children}
    </VStack>
  );
}
