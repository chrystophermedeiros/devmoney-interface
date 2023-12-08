import { Logo } from '../Logo';
import { ModalCategory } from '../ModalCategory';
import { ModalTransaction } from '../ModalTransaction';
import { ComponentHeader } from './styles';

export function Header() {
  return (
    <ComponentHeader>
      <Logo />
      <div>
        <ModalTransaction />
        <ModalCategory />
      </div>
    </ComponentHeader>
  );
}
