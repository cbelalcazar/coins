import { Injectable } from '@angular/core';
import { Router, ResolveEnd } from '@angular/router';
import { AppConfigService } from '../app-config-services.service';

@Injectable()
export class AuthService {
  private id: string;
  private site: string;
  public token: any;
  private resource: string;
  private type: string;
  private domain: string;
  private url: string;

  constructor(
    private router: Router,
    private config: AppConfigService,
  ) {
    const location = window.location;
    this.domain = location.protocol + '//' + location.host;
    this.url = location.pathname;
    router.events.subscribe((evt: ResolveEnd) => {
      if (evt instanceof ResolveEnd) {
        const url = evt.urlAfterRedirects;
        if (url['fragment']) {
          url['fragment'] = '';
        }
      }
    });
  }

  routeLogin(): string {
    const url = this.config.get('authSite') + '/authorize?client_id=' + this.config.get('authId')
      + '&response_type=' + this.config.get('authType') + '&resource=' + this.config.get('authResource')
      + '&redirect_uri=' + this.domain + this.url;
    return url;
  }

  routeLogout(): string {
    const url = this.config.get('authSite') + '/logout?post_logout_redirect_uri=' + this.domain + this.url;
    return url;
  }

  getToken() {
    if (!this.token) {
      const token: string = localStorage.getItem('token');
      if (!token) {
        return null;
      }
      this.token = JSON.parse(token);
    }
    return this.token;
  }

  getUser() {
    return this.token.user;
  }

  setToken(token = null): void {
    this.token = {
      user: token
    };
    if (token) {
      localStorage.setItem('token', JSON.stringify(this.token));
    } else {
      localStorage.removeItem('token');
      this.token = null;
    }
  }

  checkLogin(fragment = null): boolean {
    if (!this.getToken()) {
      this.router.navigate(['/login/access']);
      return false;
    }
    return true;
  }

  private base64UrlDecode(str) {
    let output = str.replace(/-/g, '+').replace(/_/g, '/');
    switch (output.length % 4) {
      case 0:
        break;
      case 2:
        output += '==';
        break;
      case 3:
        output += '=';
        break;
      default:
        throw new Error('Illegal base64url string!');
    }
    try {
      return decodeURIComponent(atob(str).replace(/(.)/g, function (m, p) {
        let code = p.charCodeAt(0).toString(16).toUpperCase();
        if (code.length < 2) {
          code = '0' + code;
        }
        return '%' + code;
      }));
    } catch (err) {
      return atob(output);
    }
  }

  private decodeJwt (token, options: any = {}) {
    if (typeof token !== 'string') {
      throw new Error('Invalid token specified');
    }
    const pos = options.header === true ? 0 : 1;
    try {
      return JSON.parse(this.base64UrlDecode(token.split('.')[pos]));
    } catch (e) {
      throw new Error('Invalid token specified: ' + e.message);
    }
  }

  private format(str: string) {
    if (!str) {
      return null;
    }
    const obj: any = {};
    let params: Array<string> = str.split('&');
    params.forEach((param) => {
      params = param.split('=');
      obj[params[0]] = params[1];
    });
    return obj;
  }
}