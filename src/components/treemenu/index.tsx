import {
  useState,
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
  isVisibleChildrens: boolean;
  childrensMenu: MenuDTO[];
  handleOpenSubMenu(id: number): void;
}

export const TreeMenu: React.FC<TreeMenuProps> = ({ 
  isVisible, 
  handleOpenSubMenu, 
  isVisibleChildrens,
  childrensMenu
 }) => {
  const [menuData, setMenuData] = useState<MenuDTO[]>([
    { id: 1, name: 'Hardware', parent: null },
    { id: 2, name: 'Samrtphones', parent: null },
    { id: 3, name: 'Perifericos', parent: null },
    { name: 'Placa de video', parent: 1 },
    { name: 'Memoria Ram', parent: 1 },
    { name: 'HD', parent: 1 },
    { name: 'Moto GG', parent: 2 },
    { name: 'Samnsung Gaxlai', parent: 2 },
    { name: 'Asus Rog', parent: 2 },
    { name: 'Headset', parent: 3 },
    { name: 'Teclado', parent: 3 },
    { name: 'Mouse', parent: 3 },
  ]);



  return (
    <Container >
        <ParentMenu isVisible={isVisible}>
          {menuData.map(parent => (
            parent.parent === null && (
              <button key={parent.name} onClick={() => handleOpenSubMenu(parent.id)}>
                {parent.name}
                <FiChevronRight size={20} />
              </button>
            )
          ))}
        </ParentMenu>

        <ChildrensMenu isVisible={isVisibleChildrens}>
          {menuData.map(parent =>
            childrensMenu && childrensMenu.map(children => (
              children.parent === parent.id && (
                <a href="/" key={children.name}>{children.name}</a>
              )
            ))
          )}
        </ChildrensMenu>
      </Container>
  );
};