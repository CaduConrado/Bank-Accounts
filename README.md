# Bank Accounts System (Sistema de Contas Bancárias) ##

## Descrição (Description) ##

**Português**: Este é um sistema simples de contas bancárias que roda no terminal. Ele permite a criação de contas, consultas de saldo, depósitos e saques.

**English**: This is a simple bank accounts system running in the terminal. It allows for account creation, balance inquiries, deposits, and withdrawals.

## Instalação (Installation) ##

Certifique-se de ter o Node.js instalado em sua máquina. Clone o repositório e instale as dependências com o comando abaixo:

Make sure you have Node.js installed on your machine. Clone the repository and install the dependencies with the command below:

```bash
git clone https://github.com/seu_usuario/seu_repositorio.git
cd seu_repositorio
npm install
```

## Como Usar (How to Use) ##

Para iniciar o sistema, execute o seguinte comando no terminal: 

To start the system, run the following command in the terminal:

```bash
npm start
```

**Português**: Você verá o menu de operações, onde pode escolher entre criar uma conta, consultar o saldo, depositar, sacar ou sair do sistema.

**English**: You'll see the operations menu, where you can choose to create an account, check the balance, deposit, withdraw, or exit the system.

## Funcionalidades (Features)

## 1. Criar Conta / Create ## Account

**Descrição**: Permite criar uma nova conta fornecendo um novo exclusivo para a conta.

**Description**: Allows you to create a new account by providing a unique name.

## Exemplo (Example) ##

```plaintext
? Qual operação deseja realizar? (What operation do you want to perform?)
> Criar Conta (Create Account)

Primeiramente, muito obrigado por escolher o nosso banco. Parabéns, temos certeza que você acaba de fazer a melhor escolha!
Defina as opções da sua conta a seguir

? Escolha um nome para a sua conta. (Choose a name for your account.)
> MinhaConta
Parabens, sua conta foi criada com sucesso! (Congratulations, your account was successfully created!)
```

## 2.Consultar Saldo / Check Balance ##

**Descrição**: Exibe o saldo atual da conta especificada.

**Description**: Display the current balance of the specified account.

## Exemplo (Example):##

```plaintext
? Qual operação deseja realizar? (What operation do you want to perform?)
> Consultar Saldo (Check Balance)

? Informe a sua conta (Enter your account name)
> MinhaConta

Saldo: R$100,00 (Balance: R$100.00)
```

## 3. Depositar / Deposit ##

**Descrição**: Adiciona um valor especifico ao saldo da conta.

**Description**: Adds a specified amount to the account balance

## Exemplo (Example): ##

```plaintext
? Qual operação deseja realizar? (What operation do you want to perform?)
> Depositar (Deposit)

? Informe o nome da sua conta (Enter your account name)
> MinhaConta

? Informe o valor do deposito (Enter the deposit amount)
> 50

Foi depositado o valor de R$50,00 na conta de MinhaConta (A deposit of R$50.00 has been made to the account MinhaConta)
```

## 4. Sacar / Withdraw ##

**Descrição**: Retira uma quantia especificada do saldo da conta, desde que o saldo seja suficiente.

**Description**: Withdraws a specified amount from the account balance, provided there are sufficient funds.

## Exemplo (Example): ##

```plaintext
? Qual operação deseja realizar? (What operation do you want to perform?)
> Sacar (Withdraw)

? Informe o nome da sua conta (Enter your account name)
> MinhaConta

? Informe o valor do saque (Enter the withdrawal amount)
> 20

Saque realizado. Saldo atual: R$80,00 (Withdrawal successful. Current balance: R$80.00)
```

## 5. Sair / Exit ##

**Descrição**: Sai do sistema.

**Description**: Exists the system.

## Exemplo (Example): ##

```plaintext
? Qual operação deseja realizar? (What operation do you want to perform?)
> Sair (Exit)

Obrigado por usar o nosso serviço (Thank you for using our service)
```

## Estrutura do Projeto (Project Structure) ##

- **seu_arquivo.js**: Contém o código principal do sistema de contas bancárias.
- **accounts/**: Pasta onde as contas dos usuários são salvas como arquivos JSON, contendo o saldo atual de cada conta.

## Dependências (Dependencies)

- **Chalk**: Utilizado para estilizar o texto no terminal com cores.
- **Inquirer**: Utilizado para criar prompts interativos no terminal.
- **File System (fs)**: Módulo nativo do Node.js para manipulação de arquivos.

## Contribuição (Contribution) ##

**Português**: Sinta-se à vontade para contribuir com o projeto, sugerindo melhorias ou relatando problemas.

**English**: Feel free to contribute to the project by suggesting improvements or reporting issues.