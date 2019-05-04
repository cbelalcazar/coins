
import { Injector, Injectable } from '@angular/core';
import { Resource, ResourceHandler } from '@ngx-resource/core';
import { AppConfigService } from '../app-config-services.service';
import { AuthService } from '../security/auth-service.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RestClient extends Resource {
  public http: HttpClient;
  private config: AppConfigService;
  protected auth: AuthService;

  constructor(injector: Injector) {
    super(injector.get(ResourceHandler));
    this.config = injector.get(AppConfigService);
    this.auth = injector.get(AuthService);
    // this.http = injector.get(HttpClient);
  }

  $getHeaders(methodOptions?: any): any {
    const headers: any = super.$getHeaders(methodOptions);
    const token = this.auth.getToken();
    if (token) {
      headers.Authorization = token.access;
    }
    return headers;
  }

  $getUrl(methodOptions?: any): string | Promise<string> {
    const resPath = super.$getPath();
    return this.config.get('host') + resPath;
  }

  getResourceOptions() {
    return {};
  }

  resolve(url: string) {
    const data = url.split('/');
    const headers: any = {headers: this.$getHeaders()};
    if (data[data.length - 1] === 'diagram') {
      headers.responseType = 'blob';
    }
    return this.http.get(url, headers).toPromise();
  }
}
