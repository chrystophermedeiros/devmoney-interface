import { useCallback, useState } from 'react';

import { Button } from '../Button';
import { Dialog } from '../Dialog';
import { Input } from '../Input';
import { Title } from '../Title';
import { Container } from './styles';

export function ModalCategory() {
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
      trigger={<Button>Nova categoria</Button>}
    >
      <Container>
        <Title
          title="Nova gategoria"
          subtitle="Crie uma nova categoria para suas transações"
        />
        <form>
          <div>
            <Input label="Nome" placeholder="Nome da categoria" />
            <Input label="Nome" type="color" />
          </div>
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
