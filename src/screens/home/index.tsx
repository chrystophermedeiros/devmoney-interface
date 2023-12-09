import { InputMask } from '@react-input/mask';

import { ButtonIcon } from '../../components/Button-icon';
import { Card } from '../../components/Card';
import { GraphicBarChar } from '../../components/GraphicBarChart';
import { GraphicPieChar } from '../../components/GraphicPieChart';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Title } from '../../components/Title';
import { Transaction } from '../../components/Transition';
import { theme } from '../../styles/theme';
import {
  Aside,
  Balance,
  CharAction,
  CharContainer,
  CharContent,
  Container,
  Filters,
  InputGroup,
  Main,
  SearchTransaction,
  Section,
  TransactionGroup,
} from './styles';

export function Home() {
  return (
    <Container>
      <Header />
      <Main>
        <Section>
          <Filters>
            <Title title="Saldo" subtitle="Receitas e despesas no periodo" />
            <InputGroup>
              <Input
                variant="dark"
                label="inicio"
                type="date"
                placeholder="dd/mm/aaaa"
              />
              <Input
                variant="dark"
                label="Fim"
                type="date"
                placeholder="dd/mm/aaaa"
              />
              <ButtonIcon />
            </InputGroup>
          </Filters>
          <Balance>
            <Card title="Saldo" amount={10000} />
            <Card title="Entradas" amount={20000} variant="incomes" />
            <Card title="Gastos" amount={10000} variant="expenses" />
          </Balance>
          <CharContainer>
            <header>
              <Title
                title="Gastos"
                subtitle="Despesas por categoria no periodo"
              />
            </header>

            <CharContent>
              <GraphicPieChar />
            </CharContent>
          </CharContainer>
          <CharContainer>
            <header>
              <Title
                title="Evolução financeira"
                subtitle="Saldo, receitas e gastos no ano"
              />
              <CharAction>
                <InputMask
                  component={Input}
                  mask="aaaa"
                  replacement={{ a: /\d/ }}
                  variant="black"
                  label="Ano"
                  placeholder="aaaa"
                />
                <ButtonIcon />
              </CharAction>
            </header>

            <CharContent>
              <GraphicBarChar />
            </CharContent>
          </CharContainer>
        </Section>
        <Aside>
          <header>
            <Title title="Transações" subtitle="Receitas e gastos do periodo" />
            <SearchTransaction>
              <Input
                variant="black"
                placeholder="Procurar transações"
                type="text"
              />
              <ButtonIcon />
            </SearchTransaction>
          </header>
          <TransactionGroup>
            <Transaction
              id={1}
              title="teste"
              amount={1000}
              date="09/10/2023"
              category={{
                title: 'aliemntação',
                color: `${theme.colors.sucess}`,
              }}
            />
            <Transaction
              variant="expense"
              id={2}
              title="teste"
              amount={2000}
              date="09/11/2023"
              category={{
                title: 'aliemntação',
                color: `${theme.colors.error}`,
              }}
            />
            <Transaction
              id={3}
              title="teste"
              amount={1000}
              date="09/10/2023"
              category={{
                title: 'aliemntação',
                color: `${theme.colors.sucess}`,
              }}
            />
            <Transaction
              variant="expense"
              id={4}
              title="teste"
              amount={2000}
              date="09/12/2023"
              category={{
                title: 'aliemntação',
                color: `${theme.colors.error}`,
              }}
            />
          </TransactionGroup>
        </Aside>
      </Main>
    </Container>
  );
}
