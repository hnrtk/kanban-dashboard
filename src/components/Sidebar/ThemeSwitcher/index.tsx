import { useColorMode, useColorModeValue, IconButton, IconButtonProps } from '@chakra-ui/react';
import { Moon, Sun } from 'phosphor-react';

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>;

export function SidebarThemeSwitcher(props: ColorModeSwitcherProps) {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(Moon, Sun);

  return (
    <IconButton
      background='none'
      _hover={{ background: 'none' }}
      onClick={toggleColorMode}
      icon={<SwitchIcon size='28px' />}
      aria-label={`Switch to ${text} mode`}
      {...props}
    />
  );
}
