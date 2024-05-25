## Contexto do Domínio: Aluguel de Veículos

**Descrição**: Este contexto lida com o processo de aluguel de veículos por clientes, incluindo a criação de ordens de serviço, gestão de clientes e veículos

## Entidades

- **Custumer**: Representa um cliente que deseja alugar um veículo.
- **vehicle**: Representa um veículo disponível para aluguel.
- **rental**: Representa uma ordem de serviço para o aluguel de um veículo por um cliente.

## Objetos de Valor

- **Pagamento**: Representa informações de pagamento, como método de pagamento.

## Agregados

- **Agregado Aluguel**: Inclui a ordem de serviço, o cliente associado e o veículo alugado.

## Repositórios

- **customerRepository**: Fornece métodos para armazenar e recuperar clientes.
- **vehicleRepository**: Fornece métodos para armazenar e recuperar veículos.
- **rentalRepository**: Fornece métodos para armazenar e recuperar ordens de serviço.

## Serviços de Domínio

- **clienteService**: Contém a lógica de negócios relacionada aos clientes, como validação de idade.
- **veiculoService**: Contém a lógica de negócios relacionada aos veículos.
- **rentalService**: Contém a lógica de negócios para criação e atualização de ordens de serviço, incluindo aplicação de regras de desconto para pagamento via PIX.

## Regras de Negócio

1. **Desconto de 10% para Pagamento via PIX**: Quando o pagamento for feito com PIX, aplica-se um desconto de 10% no valor total.
2. **Proibição de Aluguel para Menores de Idade**: Clientes menores de 18 anos não podem alugar veículos.

## Membros

Nome: Bruno Dessimoni Ribeiro
RA: 8093458 

Nome: Lucas conceição de souza
RA: 8093476

Nome: Luis Ricardo Coelho Couto 
Ra: 8093243

Nome: Marco Antonio
RA: 8093207

Nome: Renan Gemerson Sacca
RA: 8093430
