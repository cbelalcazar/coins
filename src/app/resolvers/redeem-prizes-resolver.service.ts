import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedeemPrizesResolverService implements Resolve<any> {

  constructor() {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return new Promise((resolve, reject) => {
      try {
        resolve([
          {
            id: 1,
            name: 'Glass',
            value: 837783,
            office: 'Medellin',
            description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis neque ultrices, commodo felis quis, finibus purus. Nullam iaculis id quam a sollicitudin. Donec metus augue, mattis sit amet dignissim non, eleifend eget nulla. Donec malesuada aliquet arcu. Phasellus at lectus et erat sagittis varius vel nec odio. Donec ',
            stock: 9,
            type: 'object',
            realValue: 12000
          },
          {
            id: 2,
            name: 'One Free Day',
            value: 837783,
            office: 'Medellin',
            description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis neque ultrices, commodo felis quis, finibus purus. Nullam iaculis id quam a sollicitudin. Donec metus augue, mattis sit amet dignissim non, eleifend eget nulla. Donec malesuada aliquet arcu. Phasellus at lectus et erat sagittis varius vel nec odio. Donec ',
            stock: 9,
            type: 'vacations',
            realValue: 12000
          },
          {
            id: 3,
            name: 'Pizza',
            value: 837783,
            office: 'Bogota',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis neque ultrices, commodo felis quis, finibus purus. Nullam iaculis id quam a sollicitudin. Donec metus augue, mattis sit amet dignissim non, eleifend eget nulla. Donec malesuada aliquet arcu. Phasellus at lectus et erat sagittis varius vel nec odio. Donec ',
            stock: 9,
            type: 'food',
            realValue: 12000
          },
          {
            id: 4,
            name: 'Uber Cash',
            value: 837783,
            office: 'Medellin',
            description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis neque ultrices, commodo felis quis, finibus purus. Nullam iaculis id quam a sollicitudin. Donec metus augue, mattis sit amet dignissim non, eleifend eget nulla. Donec malesuada aliquet arcu. Phasellus at lectus et erat sagittis varius vel nec odio. Donec ',
            stock: 9,
            type: 'vacaciones',
            realValue: 12000
          },
          {
            id: 5,
            name: 'Avengers Surprise',
            value: 837783,
            office: 'Bogota',
            description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis neque ultrices, commodo felis quis, finibus purus. Nullam iaculis id quam a sollicitudin. Donec metus augue, mattis sit amet dignissim non, eleifend eget nulla. Donec malesuada aliquet arcu. Phasellus at lectus et erat sagittis varius vel nec odio. Donec ',
            stock: 9,
            type: 'vacaciones',
            realValue: 12000
          }
        ]);
      } catch (error) {
        reject([]);
      }
    });
  }
}
