import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // TODO: return the decoded token\
    const token = this.getToken();
    return jwtDecode<JwtPayload>(token);
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in\
    const token = this.getToken();
    return token && !this.isTokenExpired
  }
  
  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired\
    const decoded = jwtDecode<JwtPayload>(token);
    return decoded.exp !== undefined && decoded.exp < Date.now() / 1000;
  }

  getToken(): string {
    // TODO: return the token\
    return localStorage.getItem('token') || '';
  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    // TODO: redirect to the home page\
    localStorage.setItem('token', idToken);
    window.location.assign('/');
  }

  logout() {
    // TODO: remove the token from localStorage
    // TODO: redirect to the login page\
    localStorage.removeItem('token');
    window

    window.location.assign('/login');

  }
}

export default new AuthService();
