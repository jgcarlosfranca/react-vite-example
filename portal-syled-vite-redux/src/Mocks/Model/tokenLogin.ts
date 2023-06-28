import { fakerPT_BR, faker } from "@faker-js/faker";

export const tokenLoginFactory = {
    id_line: (i: number) => `${i}`,
    id() {
        return fakerPT_BR.number.int();
    },
    token() {
        return faker.lorem.text();
    },
    roleUser() {
        return fakerPT_BR.person.jobTitle();
    },
};
