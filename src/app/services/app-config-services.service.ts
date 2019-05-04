import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppConfigService {
  private config: any;

  constructor(private http: HttpClient) {
    this.config = {
      host: 'http://localhost:8081',
      authSite: '',
      authId: '9f97f30d-89ac-4112-b086-05a415ae31e0',
      authType: 'token',
      authResource: ''
    };
  }

  public get(key: any) {
    return this.config[key];
  }

  public load() {
    return this.http.get('app-config.json').toPromise()
    .catch(() => {})
    .then((responseData) => Object.assign(this.config, responseData));
  }
}