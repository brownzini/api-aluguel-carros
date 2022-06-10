### 🚗API ALUGUEL DE CARROS

RF => Requisitos Funcionais RNF => Requisitos não Funcionais RN => Regra de Negócio

# Cadastro de carro
**RF** 
Deve ser possível cadastrar um novo carro.

**RN** 
Não deve ser possível cadastar um novo carro com placa já existente. 
O carro deve ser cadastrado com disponibilidade, por padrão. 
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de carros
**RF** 
Deve ser possível listar todos os carros disponíveis. 
Deve ser possível listar todos os carros disponíveis pelo nome da categoria. 
Deve ser possível listar todos os carros disponíveis pelo nome da marca. 
Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RN** 
O usuário não precisa estar logado no sistema para realizar a listagem.

# Cadastro de Especificações no Carro
**RF** 
Deve ser possível cadastrar uma especificação para um carro.


**RN** 
Não deve ser possível cadastrar uma especificação para um carro não cadastrado. 
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro. 
Apenas um usuário administrador tem permissão para realizar cadastro.

# Cadastro de Imagens do Carro
**RF** 
Deve ser possível cadastrar a imagem do carro.
Deve ser possível listar todos os carros

**RNF** 
Utilizar o multer para o upload dos arquivos.

**RN** 
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro. 
Apenas um usuário administrador tem permissão para realizar cadastro.

# Aluguel
**RF** 
Deve ser possível cadastrar um aluguel.

**RN** 
O aluguel deve ter duração mínima de 24 horas. 
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário. 
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro. 
O usuário deve estar logado na aplicação.
Ao realizar um aluguel, o status do carro deverá ser - alterado para indisponível.

# Devolução de carro

**RF**
Deve ser possível realizar a devolução de um carro

**RN**
Se o carro for devolvido com menos de 24 horas, deverá - ser cobrado diária completa.
Ao realizar a devolução, o carro deverá ser liberado para - outro aluguel.
Ao realizar a devolução, o usuário deverá ser liberado - para outro aluguel.
Ao realizar a devolução, deverá ser calculado o total do - aluguel.
Caso o horário de devolução seja superior ao horário - previsto de entrega, deverá ser cobrado multa - proporcional aos dias de atraso.
Caso haja multa, deverá ser somado ao total do aluguel.
O usuário deve estar logado na aplicação

# Listagem de Alugueis para usuário

**RF**1
Deve ser possível realizar a busca de todos os alugueis para o usuário

**RN**
O usuário deve estar logado na aplicação

# Recuperar Senha

**RF**
Deve ser possível o usuário recuperar a senha informando o e-mail
O usuário deve receber um e-mail com o passo a passo para a recuperação da senha
O usuário deve conseguir inserir uma nova senha

**RN**
O usuário precisa informar uma nova senha
O link enviado para a recuperação deve expirar em 3 horas
