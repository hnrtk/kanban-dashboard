import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';

export function Content() {
  return (
    <Flex
      w='calc(100% - 9.5rem)'
      h='95vh'
      bg='gray.700'
      boxShadow='0 4px 12px 0 rgba(0, 0, 0, 0.05)'
      mt={5}
      p='20px'
      left='126px'
      pos='absolute'
      borderRadius='30px'
      transition='all 0.2s'
    >
      <Grid templateColumns='repeat(5, 1fr)' gap={6} width='100%'>
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
      </Grid>
    </Flex>
  );
}
