import { createServer, Factory, Model, Response } from "miragejs";
import { factoryModels } from "../Model";
import { endPointsPaths } from "../../routes/paths";
import { userPerfilRes } from "../login/userPerfilMockRes";
import { userCredentialMatches } from "../login/userCredentialsMatch";

const BASE_URL = 'http://localhost:5579';

export function makeMirageServer() {
    const server = createServer({
        models: {
            user: Model,
            login: Model,
        },
        factories: {
            login: Factory.extend(factoryModels.tokenLoginFactory),
            user: Factory.extend(factoryModels.rowsUserFactory),
        },
        seeds(server) {
            server.create("login");
        },
        routes() {
            // * --- INITIAL SETUP --- * //
            this.timing = 10000;
            this.urlPrefix = BASE_URL;

            this.get(endPointsPaths.user, async (schema) => {
                return {
                    headers: ["Name", "Age", "Gender", "Client ID"],
                    rows: schema.all("user").models,
                };
            });

            /**
       * API DE LOGIN
       */
            this.post(endPointsPaths.login, async (schema, request) => {
                const attrs = JSON.parse(request.requestBody);
                const result = userCredentialMatches.filter((users) => {
                    if (
                        attrs.email === users.user.email &&
                        attrs.senha === users.user.password
                    ) {
                        return users.user;
                    }
                });

                if (!result.length) {
                    return;
                }

                if (
                    attrs.email === result[0].user.email &&
                    attrs.senha === result[0].user.password
                ) {
                    const perfil = userPerfilRes.filter((perfil) => {
                        if (result[0].user.email === perfil.userPerfil.email) {
                            return perfil.userPerfil;
                        }
                    });

                    if (!perfil[0]) return;
                    return perfil[0].userPerfil;
                }

                return {
                    token: schema.all("login").models,
                };
            });



            this.passthrough();
        },
    });
    return server;
}
