import {
  useState,
  useCallback,
} from 'react';
import {
  FiMenu,
} from 'react-icons/fi';
import {
  Container,
  MenuContent,
} from '../../styles/components/menu';

interface MenuProps {
  handleOpen(): void;
}
export const Menu: React.FC<MenuProps> = ({ handleOpen }) => {
  return (
    <Container>
      <button type="button" onClick={handleOpen}>
        <FiMenu size={20} color="#ff9000" />
        Todas as Categorias
      </button>
    </Container>
  );
};