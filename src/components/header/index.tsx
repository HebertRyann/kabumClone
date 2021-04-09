import {
  useState,
  useCallback,
} from 'react';
import {
  Container,
  HeaderContent,
} from '../../styles/components/header';
import Search from '../../components/Search';
import {
  FiUser,
  FiChevronDown,
} from 'react-icons/fi'

interface Products {
  id: number;
  title: string;
  discount: number;
  description: string;
  old_price: number;
  price: number;
  quantity: number;
}


export const Header: React.FC = ({ children }) => {

  return (
    
  );
};

export default Header;