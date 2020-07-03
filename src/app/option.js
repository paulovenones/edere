class Option {
    constructor(user, message) {
        this.user = user;
        this.message = message;        
    }

    execute() {
        if (this.message === "Curitiba") {
            database.db[this.user].stage = 3
            return [
                "Legal! Eu visito Curitiba direto, é uma cidade muito bonita. Em que bairro você está agora?"
            ]
        }
    }
}

exports.Option = Option;