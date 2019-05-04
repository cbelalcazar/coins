import { Injectable, Injector } from '@angular/core';
import { IResourceMethod, ResourceAction, ResourceRequestMethod, ResourceParams } from '@ngx-resource/core';

import { RestClient } from '../connection/rest-client.service';

@Injectable()
@ResourceParams({
  pathPrefix: '/main/path'
})
export class WorkDirectiveRepository extends RestClient {
  constructor(
    injector: Injector
  ) {
    super(injector);
  }

  @ResourceAction({
    method: ResourceRequestMethod.Post,
    path: '/'
  })
  create: IResourceMethod<any, any>;

  @ResourceAction({
    method: ResourceRequestMethod.Get,
    path: '/{id}'
  })
  get: IResourceMethod<any, any>;

  @ResourceAction({
    method: ResourceRequestMethod.Put,
    path: '/{id}'
  })
  update: IResourceMethod<any, any>;
}
