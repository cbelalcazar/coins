import { Injectable, Injector } from '@angular/core';
import { IResourceMethod, ResourceAction, ResourceRequestMethod, ResourceParams } from '@ngx-resource/core';

import { RestClient } from '../connection/rest-client.service';

@Injectable()
@ResourceParams({
  pathPrefix: '/'
})
export class ProductsRepositoryService extends RestClient {
  constructor(
    injector: Injector
  ) {
    super(injector);
  }

  // @ResourceAction({
  //   method: ResourceRequestMethod.Post,
  //   path: '/'
  // })
  // create: IResourceMethod<any, any>;

  @ResourceAction({
    method: ResourceRequestMethod.Get,
    path: 'products'
  })
  get: IResourceMethod<any, any>;

  @ResourceAction({
    method: ResourceRequestMethod.Post,
    path: 'registerTransaction'
  })
  registerTransaction: IResourceMethod<any, any>;

  // @ResourceAction({
  //   method: ResourceRequestMethod.Put,
  //   path: '/{id}'
  // })
  // update: IResourceMethod<any, any>;
}
