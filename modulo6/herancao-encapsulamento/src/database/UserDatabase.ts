import { BaseDatabase } from "./BaseDatabase"; //imporrta a classe BaseDatabase de arquivo local
import { User } from "../models/User"; //importa a classe User de arquivo local
import { TABLE_USERS } from "./tableNames";

export class UserDatabase extends BaseDatabase {
  //define a classe UserDatabase, que herda da classe BaseDatabase
  private static Labe_Users = "User_Arq"; //define uma constante estática que armazena o nome da tabela correspondente aos usuários
  public async createUser(
    //Define um método público assíncrono que cria um novo usuário na tabela correspondente
    id: string,
    email: string,
    password: string
  ): Promise<void> {
    try {
      //Inicia um bloco de código a ser executado em caso de sucesso
      await this.getConnection() //Utiliza o método "getConnection" para obter uma conexão com o banco de dados
        .insert({
          //Insere um novo registro na tabela correspondente com os parâmetros recebido
          id, //Passa o parâmetro id para o banco de dados
          email, //Passa o parâmetro email para o banco de dados
          password, //Passa o parâmentro password para o banco de dados
        })
        .into(UserDatabase.Labe_Users); //Indica a tabela correspondente
    } catch (error: any) {
      //Em caso de erro, lança uma execução com a mensagem de erro
      throw new Error(error.sqlMessage || error.message); //Lança uma nova exceção com a mensagem de erro correspondente correspondente.
    }
  }

  public async getAllUsers(): Promise<User[]> {
    //Define um método público que retorna todos os usuário cadastrados na tabela
    try {
      //inicia um bloco de código a ser executados em caso de sucesso.
      const result = await this.getConnection() //Utiliza o método "getConnection" para obter uma conexão com o banco de dados.
        .select("*") //o método select e o asteriscos entre seleciona todos os campos da tabela correspondente.
        .from(UserDatabase.Labe_Users); //Indica a tabela correspondente
      return result.map((user) => User.toUserModel(user)); //Mapeia cada registro retornado para uma instância da classe User e retora uma listra com todos os usários da tabela.
    } catch (error: any) {
      //Captura uma exceção em caso de erro
      throw new Error(error.sqlMessage || error.message); //Lança uma exceção com a mensagem de erro correspondente
    }
  }

  public async getUserById(id: string): Promise<User> {
    //Define um método público assíncrono que retorna um usuário especifico com base no seu ID
    try {
      //inicia um bloco de código a ser executado em caso de sucesso
      const result = await this.getConnection() //obtem uma conexão com banco de dados
        .select("*") //O método select utiliza o * entre aspas para selecionar todos os campos da tabela correspondente
        .from(UserDatabase.Labe_Users) //Indica a tabela correspondente
        .where({ id }); //Adiciona uma cláusula WHERE para filtrar o registro com o ID correspondente.
      return User.toUserModel(result[0]); //Converte o primeiro registro retorna para uma instância da classe User e retorna o resultado
    } catch (error: any) {
      //Captura uma exceção em caso de errro
      throw new Error(error.sqlMessage || error.message); //Lança uma exceção com a mensagem de eerro correspondente
    }
  }
}
