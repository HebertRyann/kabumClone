import {
  useState,
  useCallback,
} from 'react';
import {
  FiChevronRight
} from 'react-icons/fi';
import {
  ChildrensMenu,
  Container,
  ParentMenu
} from '../../styles/components/treeMenu';

interface MenuDTO {
  id?: number;
  name: string;
  parent: number | null;
}

interface TreeMenuProps {
  isVisible: boolean;
}

export const TreeMenu: React.FC<TreeMenuProps> = ({ isVisible }) => {

  const [childrens, setChildrens] = useState<MenuDTO[]>([]);






  return (
    
  );
};
export default TreeMenu;