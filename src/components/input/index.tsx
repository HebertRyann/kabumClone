import { InputHTMLAttributes } from 'react';
import { Container } from '../../styles/components/input';
import { IconBaseProps } from 'react-icons';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  icon?: React.ComponentType<IconBaseProps>;
  size?: number;
  color?: string;
}
export const Input: React.FC<InputProps> = ({ icon: Icon, size, color, ...rest }) => {
  return (
    <Container>
      <input
        {...rest}
      />
      {Icon && <Icon size={size} color={color} />}
    </Container>
  );
};