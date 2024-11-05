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
          buildAccount();
          break;
        case "Sair":
          console.log(chalk.bgBlue.black("Obrigado por usar o nosso serviço"));
          process.exit();
      }
    })
    .catch((error) => console.log(error));
}

//function createAccount
function createAccount() {
  console.log(
    chalk.bgGreen.black(
      "Primeiramente, muito obrigado por escolher o nosso banco.\nParabéns, temos certeza que você acaba de fazer a melhor escolha!"
    )
  );
  console.log(chalk.green("Defina as opções da sua conta a seguir"));
  buildAccount();
}

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
