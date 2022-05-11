import { IconButton } from '@chakra-ui/react';
import { ArrowSquareLeft, ArrowSquareRight } from 'phosphor-react';

interface Props {
  open: boolean;
  onClick: () => void;
}

export function SidebarTrigger({ open, onClick }: Props) {
  return (
    <IconButton
      background='none'
      _hover={{ background: 'none' }}
      aria-label='Botão para abrir ou fechar o menu'
      icon={open ? <ArrowSquareLeft size='28px' /> : <ArrowSquareRight size='28px' />}
      onClick={onClick}
    />
  );
}
