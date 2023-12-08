import { InputMask } from '@react-input/mask';
import { useCallback, useState } from 'react';

import { Button } from '../Button';
import { Dialog } from '../Dialog';
import { Input } from '../Input';
import { Title } from '../Title';
import {
  Container,
  Content,
  CurrecyInput,
  InputGroup,
  RadioForm,
  RadioGroup,
} from './styles';

export function ModalTransaction() {
  const [open, setOpen] = useState(false);
  const handClose = useCallback(() => {
    setOpen(false);
  }, []);

  const onSubmit = useCallback(() => {
    handClose();
  }, [handClose]);

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
      trigger={<Button>Nova transação</Button>}
    >
      <Container>
        <Title
          title="Nova transação"
          subtitle="Crie uma nova transação para seu  controle financeiro"
        />
        <form>
          <Content>
            <InputGroup>
              <label htmlFor="">Categoria</label>
              <select name="" id="">
                <option value="null">Selecione uma categoria</option>
                <option value="null">Alimentação</option>
              </select>
            </InputGroup>
            <Input label="Nome" placeholder="Nome da transação" />
            <InputGroup>
              <label>Valor</label>
              <CurrecyInput
                placeholder="R$ 0,00"
                currency="BRL"
                format="currency"
              />
            </InputGroup>

            <InputMask
              component={Input}
              mask="dd/mm/aaaa"
              replacement={{ d: /\d/, m: /\d/, a: /\d/ }}
              label="Data"
              placeholder="dd/mm/aaaa"
              type="date"
            />
            <RadioForm>
              <RadioGroup>
                <input type="radio" id="income" value="income" name="type" />
                <label htmlFor="income">Receita</label>
              </RadioGroup>
              <RadioGroup>
                <input type="radio" id="expense" value="expense" name="type" />
                <label htmlFor="expense">Gasto</label>
              </RadioGroup>
            </RadioForm>
          </Content>

          <footer>
            <Button onClick={handClose} type="button" variant="outline">
              Cancelar
            </Button>
            <Button onClick={onSubmit}>Cadastrar</Button>
          </footer>
        </form>
      </Container>
    </Dialog>
  );
}
