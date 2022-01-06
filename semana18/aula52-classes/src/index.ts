import express, { Express } from 'express'
import cors from 'cors'
import { AddressInfo } from "net"

const app: Express = express()

app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost: ${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})

//EXERCÍCIO 1

// a) O construtor dentro de uma classe tem a finalidade de executar uma ação ao criar uma instância da classe. Para chamá-lo, utilizamos a keyword this nas propriedades.

// b) Conforme o código abaixo, a mensagem somente foi impressa uma única vez.

// c) Para acessarmos propriedades privadas de uma classe é necessário utilizarmos o método chamado getters. Para isso, é preciso criar uma função pública dentro da classe que retorne a propriedade desejada e, então, usar a função pública fora da classe.

// EXERCÍCIO 2

class Transaction {
   private description: string;
   private value: number;
   private date: string;

   constructor(
      description: string,
      value: number,
      date: string,
   ) {
      this.description = description
      this.value = value
      this.date = date
   }
   public getDescription() {
      return this.description
   }
   public getValue() {
      return this.value
   }
   public getDate() {
      return this.date
   }
}

class UserAccount {
   private cpf: string;
   private name: string;
   private age: number;
   private balance: number = 0;
   private transactions: Transaction[] = [];

   constructor(
      cpf: string,
      name: string,
      age: number,
   ) {
      console.log("Chamando o construtor da classe UserAccount")
      this.cpf = cpf;
      this.name = name;
      this.age = age;
   }
   public getCpf(): string {
      return this.cpf
   }
   public getName(): string {
      return this.name
   }
   public getAge(): number {
      return this.age
   }
   public getBalance(): number {
      return this.balance
   }
   public getTransactions(): Transaction[] {
      return this.transactions
   }

   addTransaction(): void {
      
   }

}

const userAccount1 = new UserAccount("011.900.555-32", "Guilherme", 30)

const transactions1 = new Transaction("Transferência de valores", 500, "20 de outubro de 2021")

//EXERCÍCIO 3

class Bank {

   private accounts: UserAccount[]

   constructor(
      accounts: UserAccount[],

   ){
      this.accounts = accounts
   }

}
