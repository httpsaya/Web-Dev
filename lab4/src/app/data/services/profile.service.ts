import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Profile } from '../interfaces/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  http = inject(HttpClient);
  
  constructor() { }

  getTestAccounts(){
    return this.http.get<Profile[]>('https://icherniakov.ru/yt-course/account/test_accounts').pipe(
      map(() => [
        { "id": 1, "link": "https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-serebristyi-123890752/?c=750000000", "blabla": "1000 т", "price": "100000 т", "image": "https://raw.githubusercontent.com/hdpngworld/HPW/main/uploads/65038654434d0-iPhone%2015%20Pro%20Natural%20titanium%20png.png", "name": "Apple iPhone 16 Pro Max 256Gb серебристый", "description": "A powerful smartphone with an amazing camera.", "rating": 4.5 },
        { "id": 2, "link": "https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000", "blabla": "2000 т", "price": "200000 т", "image": "https://www.freepnglogos.com/uploads/airpods-png/airpods-apply-airpod-skins-mightyskins-3.png", "name": "Apple AirPods 3 with Lightning Charging Case", "description": "Noise-canceling headphones with great sound quality.", "rating": 4.7 },
        { "id": 3, "link": "https://kaspi.kz/shop/p/dlja-appy-watch-pro-49-prozrachnyi-108044140/?c=750000000", "blabla": "3000 т", "price": "23000 т","image": "https://png.pngtree.com/png-vector/20240128/ourmid/pngtree-the-smartwatch-banner-png-image_11503774.png", "name": "Для Apple Watch Pro прозрачный", "description": "A stylish smartwatch with health tracking features.", "rating": 4.3 },
        { "id": 4, "link": "https://kaspi.kz/shop/p/apple-macbook-air-13-2024-13-6-16-gb-ssd-512-gb-macos-mxcu3-120179654/?c=750000000", "blabla": "6000 т", "price": "89000 т","image": "https://imgpng.ru/d/macbook_PNG65.png", "name": "Apple MacBook Air 13 2024 13.6", "description": "High-performance laptop for gaming and work.", "rating": 4.8 },
        { "id": 5, "link": "https://kaspi.kz/shop/p/lg-gc-b399smcl-serebristyi-106378846/?c=750000000", "blabla": "2000 т", "price": "67000 т","image": "https://png.pngtree.com/png-vector/20240203/ourmid/pngtree-3d-illustration-fridge-refrigerator-png-image_11593260.png", "name": "LG GC-B399SMCL серебристый", "description": "A 55-inch 4K Ultra HD Smart TV with HDR support.", "rating": 4.6 },
        { "id": 6, "link": "https://kaspi.kz/shop/p/samsung-galaxy-a35-5g-8-gb-128-gb-temno-sinii-117420446/?c=750000000", "blabla": "4000 т", "price": "478000 т","image": "https://www.pngall.com/wp-content/uploads/13/Samsung-Galaxy-Transparent.png", "name": "Samsung Galaxy A35 5G 8 ГБ/128 ГБ темно-синий", "description": "Portable Bluetooth speaker with deep bass and long battery life.", "rating": 4.4 },
        { "id": 7, "link": "https://kaspi.kz/shop/p/elektrochainik-bereke-br-810-seryi-109981423/?c=750000000", "blabla": "6835 т", "price": "754000 т","image": "https://imgpng.ru/d/kettle_PNG8718.png", "name": "Электрочайник BEREKE BR-810 серый", "description": "Smart vacuum cleaner with AI-powered navigation.", "rating": 4.2 },
        { "id": 8, "link": "https://kaspi.kz/shop/p/samsung-vcc4520s36-xev-sinii-3701056/?c=750000000", "blabla": "8625 т", "price": "6000 т","image": "https://pngimg.com/d/vacuum_cleaner_PNG56.png", "name": "Пылесос Samsung VCC4520S36/XEV синий", "description": "Professional DSLR camera with 24.2MP sensor.", "rating": 4.7 },
        { "id": 9, "link": "https://kaspi.kz/shop/p/sport-lvl-urban-scooter-belyi-134005421/?c=750000000", "blabla": "9375 т", "price": "93000 т","image": "https://png.pngtree.com/png-vector/20240510/ourmid/pngtree-modern-electric-scooter-for-eco-friendly-transportation-png-image_12432828.png", "name": "Самокат SPORT LVL Urban Scooter белый", "description": "RGB mechanical keyboard with fast response time.", "rating": 4.5 },
        { "id": 10, "link": "https://kaspi.kz/shop/p/hoco-w35-chernyi-105261846/?c=750000000", "blabla": "7484 т", "price": "858000 т","image": "https://pngimg.com/d/headphones_PNG101980.png", "name": "Наушники Hoco W35 черный", "description": "Eco-friendly electric scooter with a 25km range.", "rating": 4.3 }
      ])
    );  
  }
}
