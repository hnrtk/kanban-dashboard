import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
  Flex,
  Text,
  HStack,
} from '@chakra-ui/react';
import { Moon, Sun } from 'phosphor-react';

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'> & { open: boolean };

export function SidebarThemeSwitcher(props: ColorModeSwitcherProps) {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(Moon, Sun);

  return (
    <Flex alignItems='center'>
      {props.open ? (
        <HStack
          onClick={toggleColorMode}
          cursor="pointer"
        >
          <IconButton
            background='none'
            minW='32px'
            _hover={{ background: 'none' }}
            icon={<SwitchIcon size='28px' />}
            aria-label={`Switch to ${text} mode`}
            {...props}
          />
          <Text whiteSpace='nowrap'>Modo Escuro</Text>
        </HStack>
      ) : (
        <IconButton
          background='none'
          _hover={{ background: 'none' }}
          onClick={toggleColorMode}
          icon={<SwitchIcon size='28px' />}
          aria-label={`Switch to ${text} mode`}
          {...props}
        />
      )}
    </Flex>
  );
}
