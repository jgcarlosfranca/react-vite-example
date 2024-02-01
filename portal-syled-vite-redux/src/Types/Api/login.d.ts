export interface ILoginResponse {
    cidade?: string;
    email?: string;
    nomeUser?: string;
    perfil?: string;
    token: string;
    uf?: string;
}

export interface ILoginBody {
    email: string;
    senha: string;
}