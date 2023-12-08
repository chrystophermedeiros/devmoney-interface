import { ComponentProps, forwardRef } from 'react';

import { Container } from './styles';

type ButtonProps = ComponentProps<'button'> & {
  variant?: 'default' | 'outline';
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ children, variant = 'default', ...props }, ref) {
    return (
      <Container {...props} ref={ref} $variant={variant}>
        {children}
      </Container>
    );
  },
);
