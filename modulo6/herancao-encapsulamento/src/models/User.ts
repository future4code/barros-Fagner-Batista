export type TUser = {
    id: string,
    email: string,
    password: string
}

export class User {
    static toUserModel(user: any): any {
        throw new Error("Method not implemented.")
    }
    constructor(
        protected id: string,
        private email: string,
        private password: string
    ) {
        this.id = id
        this.email = email
        this.password = password
    }

    public getId() {
        return this.id
    }

    public getEmail() {
        return this.email
    }

    public getPassword() {
        return this.password
    }

    public setId(newId: string) {
        this.id = newId
    }

    public setEmail(newEmail: string) {
        this.email = newEmail
    }

    public setPassword(newPassword: string) {
        this.password = newPassword
    }
}