export const isAuthenticated = (): boolean => {
    const token = sessionStorage.getItem('token');
    return !!token; // Retorna true se o token existir na sessionStorage
  };
  