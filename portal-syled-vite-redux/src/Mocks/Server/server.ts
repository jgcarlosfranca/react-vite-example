import { createServer, Factory, Model, Response } from "miragejs";
import { factoryModels } from "../Model";
import { endPointsPaths } from "../../routes/paths";

const BASE_URL = import.meta.env.VITE_BACKEND_BASEURL;

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
            this.timing = 1000;
            this.urlPrefix = BASE_URL;

            this.get(endPointsPaths.user, async (schema) => {
                return {
                    headers: ["Name", "Age", "Gender", "Client ID"],
                    rows: schema.all("user").models,
                };
            });

            this.post(endPointsPaths.login, async (schema, request) => {
                //endPointsPaths.login
                const attrs = JSON.parse(request.requestBody);
                console.log(attrs);
                if (attrs.email !== "admin@email.com" && attrs.senha !== "admin123") {
                    return new Response(500, {}, { error: "Erro na solicitação POST" });
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
