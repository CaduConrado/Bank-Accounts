const chalk = require("chalk");
const inquirer = require("inquirer");
const fs = require("fs");

console.log("Hello, Accounts Project!");
operation();
function operation() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "Qual operação deseja realizar?",
        choices: [
          "Criar Conta",
          "Consultar Saldo",
          "Depositar",
          "Sacar",
          "Sair",
        ],
      },
    ])
    .then((answer) => {
      const action = answer["action"];
      switch (action) {
        case "Criar Conta":
          createAccount();
          break;
        case "Consultar Saldo":
          getBalance();
          break;
        case "Depositar":
          deposit();
          break;
        case "Sacar":
          withDraw();
          break;
        case "Sair":
          console.log(chalk.bgBlue.black("Obrigado por usar o nosso serviço"));
          process.exit();
        default:
          console.log(chalk.bgRed.black("Erro, tente novamente mais tarde."));
      }
    })
    .catch((error) => console.log(error));
}

//função que chama build account
function createAccount() {
  console.log(
    chalk.bgGreen.black(
      "Primeiramente, muito obrigado por escolher o nosso banco.\nParabéns, temos certeza que você acaba de fazer a melhor escolha!"
    )
  );
  console.log(chalk.green("Defina as opções da sua conta a seguir"));
  buildAccount();
}

//função para criar conta
function buildAccount() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Escolha um nome para a sua conta.",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];
      console.log(accountName);

      if (!fs.existsSync("accounts")) {
        fs.mkdirSync("accounts");
      }

      if (fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(
          chalk.bgRed.black("Já existe uma conta com esse nome, escolha outro.")
        );
        buildAccount();
        return;
      }

      fs.writeFileSync(
        `accounts/${accountName}.json`,
        "{'balance': 0}",
        function (error) {
          console.log(error);
        }
      );

      console.log(chalk.green("Parabens, sua conta foi criada com sucesso!"));
      operation();
    })
    .catch((error) => console.log(error));
}

//função de deposito
function deposit() {
  inquirer
    .prompt([
      {
        name: "checkAccount",
        message: "Informe o nome da sua conta:",
      },
    ])
    .then((answer) => {
      accountName = answer["checkAccount"];

      if (!checkAccount(accountName)) {
        console.log(
          chalk.bgRed.black("Essa conta não existe, por favor informe outra!")
        );
        return deposit();
      } else {
        inquirer
          .prompt([
            {
              name: "amount",
              message: "Informe o valor do deposito: ",
            },
          ])
          .then((answer) => {
            const amount = answer["amount"];
            addAmount(accountName, amount);
            operation();
          })
          .catch();
      }
    })
    .catch();
}

//função para checar se a conta existe
function checkAccount(account) {
  if (!fs.existsSync(`accounts/${account}.json`)) {
    return false;
  } else {
    return true;
  }
}

//função de adicionar dinheiro ao saldo
function addAmount(accountName, amount) {
  const accountData = getAccount(accountName);
  if (!amount) {
    console.log(
      chalk.bgRed.black("Ocorrou um erro, tente novamente mais tarde.")
    );
  } else {
    accountData.balance = parseFloat(accountData.balance) + parseFloat(amount);
    console.log(accountData.balance);
    fs.writeFileSync(
      `accounts/${accountName}.json`,
      JSON.stringify(accountData),
      function (error) {
        console.log(error);
      }
    );
    console.log(
      chalk.bgGreen.white(
        `Foi depositado o valor de R$${amount},00 na conta de ${accountName}.`
      )
    );
  }
}

//função para pegar os dados da conta
function getAccount(accountName) {
  const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
    encoding: "utf8",
    flag: "r",
  });
  return JSON.parse(accountJSON);
}

//função de consultar saldo
function getBalance(accountName) {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Informe a sua conta: ",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];

      if (!checkAccount(accountName)) {
        console.log(
          chalk.bgRed.black("Essa conta não existe, por favor informe outra!")
        );
        getBalance();
      } else {
        const accountData = getAccount(accountName);

        console.log(chalk.bgBlue.black(`Saldo: R$${accountData.balance},00`));
        operation();
      }
    })
    .catch();
}

function withDraw() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Informe o nome da sua conta: ",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];

      if (!checkAccount(accountName)) {
        console.log(
          chalk.bgRed.black("Essa conta não existe, por favor informe outra!")
        );
        withDraw();
      } else {
        removeAmount(accountName);
      }
    })
    .catch((error) => console.log(error));
}

function removeAmount(accountName) {
  inquirer
    .prompt([
      {
        name: "amount",
        message: "Informe o valor do saque: ",
      },
    ])
    .then((answer) => {
      const accountData = getAccount(accountName);
      const amount = answer["amount"];
      if (!checkAmount(accountName, amount)) {
        console.log(chalk.bgRed.black("Saldo insuficiente."));
        operation();
      } else {
        accountData.balance = parseFloat(accountData.balance) - amount;
        fs.writeFileSync(
          `accounts/${accountName}.json`,
          JSON.stringify(accountData),
          (error) => console.log(error)
        );
        console.log(
          chalk.bgGreen.white(
            `Saque realizado.\nSaldo atual: R$${accountData.balance},00`
          )
        );

        operation();
      }
    })
    .catch();
}

function checkAmount(accountName, wdAmount) {
  const accountData = getAccount(accountName);
  if (parseFloat(accountData.balance) >= wdAmount) {
    return true;
  } else {
    return false;
  }
}
