import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  TABLE_NAME: string;
  private static TABLE_NAME = "LABEFLIX_USER";

  async create({ id, name, email, password }: any): Promise<void> {
    await UserDatabase.connection
      .insert({
        id,
        name,
        email,
        password,
      })
      .into(UserDatabase.TABLE_NAME);
  }

   async pegarUsuario(id: string) {
    return super.pegarUsuario(id)
  }
}

