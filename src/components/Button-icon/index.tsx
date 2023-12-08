import SearchIcon from '@mui/icons-material/Search';
import { ComponentProps, forwardRef } from 'react';

import { Container } from './styles';

type ButtonProps = ComponentProps<'button'>;

export const ButtonIcon = forwardRef<HTMLButtonElement, ButtonProps>(function (
  { ...props },
  ref,
) {
  return (
    <Container {...props} ref={ref}>
      <SearchIcon />
    </Container>
  );
});
