import { fakerPT_BR, faker } from "@faker-js/faker";
import { format } from "date-fns";

export const rowsUserFactory = {
  id_line: (i: number) => `${i}`,
  id() {
    return fakerPT_BR.number.int();
  },
  time() {
    return format(
      faker.date.between({
        from: "2020-01-01T00:00:00.000Z",
        to: "2023-01-01T00:00:00.000Z",
      }),
      "dd/MM/yyyy"
    );
  },
  dataNascimento() {
    return format(
      faker.date.between({
        from: "2022-01-01T00:00:00.000Z",
        to: "2035-01-01T00:00:00.000Z",
      }),
      "dd/MM/yyyy"
    );
  },
  quantidade() {
    return fakerPT_BR.number.int({
      min: 1,
      max: 5,
    });
  },
  usuario() {
    return {
      email: fakerPT_BR.internet.email(),
      nome: fakerPT_BR.person.fullName(),
    };
  },
};
