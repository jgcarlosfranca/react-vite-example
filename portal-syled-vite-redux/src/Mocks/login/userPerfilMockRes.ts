import { faker } from "@faker-js/faker";

export const userPerfilRes = [
    {
        userPerfil: {
            token: faker.string.uuid(),
            nomeUser: faker.person.fullName(),
            email: "admin@email.com",
            perfil: "ADMINISTRADOR",
            cidade: faker.location.country() + faker.location.state() + faker.location.city(),
            uf: faker.location.state()
        },
    },
    {
        userPerfil: {
            token: faker.string.uuid(),
            nomeUser: faker.person.fullName(),
            email: "user1@email.com",
            perfil: "User",
            cidade: faker.location.country() + faker.location.state() + faker.location.city(),
            uf: faker.location.state()
        },
    },

];
