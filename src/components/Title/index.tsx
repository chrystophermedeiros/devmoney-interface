import { Container } from './style';

type TitleProps = {
  title: string;
  subtitle: string;
};

export function Title({ title, subtitle }: TitleProps) {
  return (
    <Container>
      <h2>{title}</h2>
      <span>{subtitle}</span>
    </Container>
  );
}
