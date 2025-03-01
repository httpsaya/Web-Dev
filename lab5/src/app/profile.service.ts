import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Profile } from './profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  http = inject(HttpClient);
  
  constructor() { }

  getTestAccounts1(){
    return this.http.get<Profile[]>('https://icherniakov.ru/yt-course/account/test_accounts').pipe(
      map(() => [
        { "likes":"","id": 1, "link": "https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-serebristyi-123890752/?c=750000000", "blabla": "1000 т", "price": "100000 т", "image": "https://raw.githubusercontent.com/hdpngworld/HPW/main/uploads/65038654434d0-iPhone%2015%20Pro%20Natural%20titanium%20png.png", "name": "Apple iPhone 16 Pro Max 256Gb серебристый", "description": "A powerful smartphone with an amazing camera.", "rating": 4.5 },
        { "likes":"","id": 2, "link": "https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000", "blabla": "2000 т", "price": "200000 т", "image": "https://www.freepnglogos.com/uploads/airpods-png/airpods-apply-airpod-skins-mightyskins-3.png", "name": "Apple AirPods 3 with Lightning Charging Case", "description": "Noise-canceling headphones with great sound quality.", "rating": 4.7 },
        { "likes":"","id": 3, "link": "https://kaspi.kz/shop/p/dlja-appy-watch-pro-49-prozrachnyi-108044140/?c=750000000", "blabla": "3000 т", "price": "23000 т","image": "https://png.pngtree.com/png-vector/20240128/ourmid/pngtree-the-smartwatch-banner-png-image_11503774.png", "name": "Для Apple Watch Pro прозрачный", "description": "A stylish smartwatch with health tracking features.", "rating": 4.3 },
        { "likes":"","id": 4, "link": "https://kaspi.kz/shop/p/apple-macbook-air-13-2024-13-6-16-gb-ssd-512-gb-macos-mxcu3-120179654/?c=750000000", "blabla": "6000 т", "price": "89000 т","image": "https://imgpng.ru/d/macbook_PNG65.png", "name": "Apple MacBook Air 13 2024 13.6", "description": "High-performance laptop for gaming and work.", "rating": 4.8 },
        { "likes":"","id": 5, "link": "https://kaspi.kz/shop/p/lg-gc-b399smcl-serebristyi-106378846/?c=750000000", "blabla": "2000 т", "price": "67000 т","image": "https://png.pngtree.com/png-vector/20240203/ourmid/pngtree-3d-illustration-fridge-refrigerator-png-image_11593260.png", "name": "LG GC-B399SMCL серебристый", "description": "A 55-inch 4K Ultra HD Smart TV with HDR support.", "rating": 4.6 },
        { "likes":"","id": 6, "link": "https://kaspi.kz/shop/p/samsung-galaxy-a35-5g-8-gb-128-gb-temno-sinii-117420446/?c=750000000", "blabla": "4000 т", "price": "478000 т","image": "https://www.pngall.com/wp-content/uploads/13/Samsung-Galaxy-Transparent.png", "name": "Samsung Galaxy A35 5G 8 ГБ/128 ГБ темно-синий", "description": "Portable Bluetooth speaker with deep bass and long battery life.", "rating": 4.4 },
        { "likes":"","id": 7, "link": "https://kaspi.kz/shop/p/elektrochainik-bereke-br-810-seryi-109981423/?c=750000000", "blabla": "6835 т", "price": "754000 т","image": "https://imgpng.ru/d/kettle_PNG8718.png", "name": "Электрочайник BEREKE BR-810 серый", "description": "Smart vacuum cleaner with AI-powered navigation.", "rating": 4.2 },
        { "likes":"","id": 8, "link": "https://kaspi.kz/shop/p/samsung-vcc4520s36-xev-sinii-3701056/?c=750000000", "blabla": "8625 т", "price": "6000 т","image": "https://pngimg.com/d/vacuum_cleaner_PNG56.png", "name": "Пылесос Samsung VCC4520S36/XEV синий", "description": "Professional DSLR camera with 24.2MP sensor.", "rating": 4.7 },
        { "likes":"","id": 9, "link": "https://kaspi.kz/shop/p/sport-lvl-urban-scooter-belyi-134005421/?c=750000000", "blabla": "9375 т", "price": "93000 т","image": "https://png.pngtree.com/png-vector/20240510/ourmid/pngtree-modern-electric-scooter-for-eco-friendly-transportation-png-image_12432828.png", "name": "Самокат SPORT LVL Urban Scooter белый", "description": "RGB mechanical keyboard with fast response time.", "rating": 4.5 },
        { "likes":"","id": 10, "link": "https://kaspi.kz/shop/p/hoco-w35-chernyi-105261846/?c=750000000", "blabla": "7484 т", "price": "858000 т","image": "https://pngimg.com/d/headphones_PNG101980.png", "name": "Наушники Hoco W35 черный", "description": "Eco-friendly electric scooter with a 25km range.", "rating": 4.3 }
      ])
    );  
  }
  getTestAccounts2(){
    return this.http.get<Profile[]>('https://icherniakov.ru/yt-course/account/test_accounts').pipe(
      map(() => [
        { "likes": 0,"id": 1, "link": "https://sneakerask.nl/cdn/shop/files/Adidas-Handball-Spezial-Night-Indigo-2-Photoroom.webp?v=1717682674", "blabla": "1000 т", "price": "100000 т", "image": "https://www.sneakermood.eu/cdn/shop/files/file_657abde3-b11c-46c1-8980-a7c571be780f.png?height=580&v=1720489230", "name": "Apple iPhone 16 Pro Max 256Gb серебристый", "description": "A powerful smartphone with an amazing camera.", "rating": 4.5 },
        { "likes": 0,"id": 2, "link": "https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000", "blabla": "2000 т", "price": "200000 т", "image": "https://soccerpost.com/cdn/shop/products/HS3614_clipped_rev_1.png?v=1678212436", "name": "Apple AirPods 3 with Lightning Charging Case", "description": "Noise-canceling headphones with great sound quality.", "rating": 4.7 },
        { "likes": 0,"id": 3, "link": "https://kaspi.kz/shop/p/dlja-appy-watch-pro-49-prozrachnyi-108044140/?c=750000000", "blabla": "3000 т", "price": "23000 т","image": "https://image-resizing.booztcdn.com/nike-kids/nks86l049_cblack.webp?has_grey=1&has_webp=1&dpr=2.5&size=w400", "name": "Для Apple Watch Pro прозрачный", "description": "A stylish smartwatch with health tracking features.", "rating": 4.3 },
        { "likes": 0,"id": 4, "link": "https://kaspi.kz/shop/p/apple-macbook-air-13-2024-13-6-16-gb-ssd-512-gb-macos-mxcu3-120179654/?c=750000000", "blabla": "6000 т", "price": "89000 т","image": "https://палатка.рф/image/cache/catalog/products/pulsar/palatka-pulsar-cosmo-t/1-1200x800.png", "name": "Apple MacBook Air 13 2024 13.6", "description": "High-performance laptop for gaming and work.", "rating": 4.8 },
        { "likes": 0,"id": 5, "link": "https://kaspi.kz/shop/p/lg-gc-b399smcl-serebristyi-106378846/?c=750000000", "blabla": "2000 т", "price": "67000 т","image": "https://pngicon.ru/file/uploads/velosiped-2.png", "name": "LG GC-B399SMCL серебристый", "description": "A 55-inch 4K Ultra HD Smart TV with HDR support.", "rating": 4.6 },
        { "likes": 0,"id": 6, "link": "https://kaspi.kz/shop/p/samsung-galaxy-a35-5g-8-gb-128-gb-temno-sinii-117420446/?c=750000000", "blabla": "4000 т", "price": "478000 т","image": "https://imgpng.ru/d/knife_PNG106106.png", "name": "Samsung Galaxy A35 5G 8 ГБ/128 ГБ темно-синий", "description": "Portable Bluetooth speaker with deep bass and long battery life.", "rating": 4.4 },
        { "likes": 0,"id": 7, "link": "https://kaspi.kz/shop/p/elektrochainik-bereke-br-810-seryi-109981423/?c=750000000", "blabla": "6835 т", "price": "754000 т","image": "https://lh5.googleusercontent.com/proxy/i_lLX5KyxsdabcOH_oih-wC46cLlb1scY0DDZmk6r0W4Cklz3IkFxnj61Ncrdr9hC1udrfQcJU2zVx51eGVLUhCc4As6hBn0fJS7Rd5Evz0-jDfv", "name": "Электрочайник BEREKE BR-810 серый", "description": "Smart vacuum cleaner with AI-powered navigation.", "rating": 4.2 },
        { "likes": 0,"id": 8, "link": "https://kaspi.kz/shop/p/samsung-vcc4520s36-xev-sinii-3701056/?c=750000000", "blabla": "8625 т", "price": "6000 т","image": "https://png.pngtree.com/png-vector/20240726/ourmid/pngtree-dumbbell-set-png-image_13235897.png", "name": "Пылесос Samsung VCC4520S36/XEV синий", "description": "Professional DSLR camera with 24.2MP sensor.", "rating": 4.7 },
        { "likes": 0,"id": 9, "link": "https://kaspi.kz/shop/p/sport-lvl-urban-scooter-belyi-134005421/?c=750000000", "blabla": "9375 т", "price": "93000 т","image": "https://cdn.ime.by/UserFiles/images/catalog/Goods/8091/00108091/norm/00108091.n_1.png", "name": "Самокат SPORT LVL Urban Scooter белый", "description": "RGB mechanical keyboard with fast response time.", "rating": 4.5 },
        { "likes": 0,"id": 10, "link": "https://kaspi.kz/shop/p/hoco-w35-chernyi-105261846/?c=750000000", "blabla": "7484 т", "price": "858000 т","image": "https://imgpng.ru/d/thermos_PNG22.png", "name": "Наушники Hoco W35 черный", "description": "Eco-friendly electric scooter with a 25km range.", "rating": 4.3 }
      ])
    );  
  }
  getTestAccounts3(){
    return this.http.get<Profile[]>('https://icherniakov.ru/yt-course/account/test_accounts').pipe(
      map(() => [
        { "likes": 0,"id": 1, "link": "https://sneakerask.nl/cdn/shop/files/Adidas-Handball-Spezial-Night-Indigo-2-Photoroom.webp?v=171768267", "blabla": "1000 т", "price": "100000 т", "image": "https://pngimg.com/d/jewelry_PNG6756.png", "name": "Apple iPhone 16 Pro Max 256Gb серебристый", "description": "A powerful smartphone with an amazing camera.", "rating": 4.5 },
        { "likes": 0,"id": 2, "link": "https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000", "blabla": "2000 т", "price": "200000 т", "image": "https://pngimg.com/d/jewelry_PNG6805.png", "name": "Apple AirPods 3 with Lightning Charging Case", "description": "Noise-canceling headphones with great sound quality.", "rating": 4.7 },
        { "likes": 0,"id": 3, "link": "https://kaspi.kz/shop/p/dlja-appy-watch-pro-49-prozrachnyi-108044140/?c=750000000", "blabla": "3000 т", "price": "23000 т","image": "https://static.vecteezy.com/system/resources/thumbnails/026/773/910/small/wedding-ring-with-ai-generated-free-png.png", "name": "Для Apple Watch Pro прозрачный", "description": "A stylish smartwatch with health tracking features.", "rating": 4.3 },
        { "likes": 0,"id": 4, "link": "https://kaspi.kz/shop/p/apple-macbook-air-13-2024-13-6-16-gb-ssd-512-gb-macos-mxcu3-120179654/?c=750000000", "blabla": "6000 т", "price": "89000 т","image": "https://www.freeiconspng.com/uploads/rings-silver-jewellery-png-3.png", "name": "Apple MacBook Air 13 2024 13.6", "description": "High-performance laptop for gaming and work.", "rating": 4.8 },
        { "likes": 0,"id": 5, "link": "https://kaspi.kz/shop/p/lg-gc-b399smcl-serebristyi-106378846/?c=750000000", "blabla": "2000 т", "price": "67000 т","image": "https://gallery.yopriceville.com/downloadfullsize/send/7875", "name": "LG GC-B399SMCL серебристый", "description": "A 55-inch 4K Ultra HD Smart TV with HDR support.", "rating": 4.6 },
        { "likes": 0,"id": 6, "link": "https://kaspi.kz/shop/p/samsung-galaxy-a35-5g-8-gb-128-gb-temno-sinii-117420446/?c=750000000", "blabla": "4000 т", "price": "478000 т","image": "https://pngimg.com/d/jewelry_PNG6724.png", "name": "Samsung Galaxy A35 5G 8 ГБ/128 ГБ темно-синий", "description": "Portable Bluetooth speaker with deep bass and long battery life.", "rating": 4.4 },
        { "likes": 0,"id": 7, "link": "https://kaspi.kz/shop/p/elektrochainik-bereke-br-810-seryi-109981423/?c=750000000", "blabla": "6835 т", "price": "754000 т","image": "https://pngimg.com/uploads/diamond/diamond_PNG6701.png", "name": "Электрочайник BEREKE BR-810 серый", "description": "Smart vacuum cleaner with AI-powered navigation.", "rating": 4.2 },
        { "likes": 0,"id": 8, "link": "https://kaspi.kz/shop/p/samsung-vcc4520s36-xev-sinii-3701056/?c=750000000", "blabla": "8625 т", "price": "6000 т","image": "https://png.pngtree.com/png-vector/20240228/ourmid/pngtree-ladies-gold-ring-with-natural-blue-topaz-gemstone-edinburgh-mark-png-image_11879237.png", "name": "Пылесос Samsung VCC4520S36/XEV синий", "description": "Professional DSLR camera with 24.2MP sensor.", "rating": 4.7 },
        { "likes": 0,"id": 9, "link": "https://kaspi.kz/shop/p/sport-lvl-urban-scooter-belyi-134005421/?c=750000000", "blabla": "9375 т", "price": "93000 т","image": "https://www.transparentpng.com/thumb/pearl/pure-pearl-bead-earring-necklace-jewelry-png-23.png", "name": "Самокат SPORT LVL Urban Scooter белый", "description": "RGB mechanical keyboard with fast response time.", "rating": 4.5 },
        { "likes": 0,"id": 10, "link": "https://kaspi.kz/shop/p/hoco-w35-chernyi-105261846/?c=750000000", "blabla": "7484 т", "price": "858000 т","image": "https://www.transparentpng.com/download/pearl/pure-pearls-beads-earrings--png-20.png", "name": "Наушники Hoco W35 черный", "description": "Eco-friendly electric scooter with a 25km range.", "rating": 4.3 }
      ])
    );  
  }
  getTestAccounts4(){
    return this.http.get<Profile[]>('https://icherniakov.ru/yt-course/account/test_accounts').pipe(
      map(() => [
        { "likes": 0,"id": 1, "link": "https://sneakerask.nl/cdn/shop/files/Adidas-Handball-Spezial-Night-Indigo-2-Photoroom.webp?v=171768267", "blabla": "1000 т", "price": "100000 т", "image": "https://www.pngarts.com/files/3/Trench-Coat-PNG-Image-Transparent.png", "name": "Apple iPhone 16 Pro Max 256Gb серебристый", "description": "A powerful smartphone with an amazing camera.", "rating": 4.5 },
        { "likes": 0,"id": 2, "link": "https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000", "blabla": "2000 т", "price": "200000 т", "image": "https://www.pngarts.com/files/9/Cotton-Black-T-Shirt-PNG-Pic-Background.png", "name": "Apple AirPods 3 with Lightning Charging Case", "description": "Noise-canceling headphones with great sound quality.", "rating": 4.7 },
        { "likes": 0,"id": 3, "link": "https://kaspi.kz/shop/p/dlja-appy-watch-pro-49-prozrachnyi-108044140/?c=750000000", "blabla": "3000 т", "price": "23000 т","image": "https://shop.hctorpedo.ru/upload/iblock/564/13cu3trkoom2x9ak7qcsaztjq4mv1u20/futbolka-zhen.png", "name": "Для Apple Watch Pro прозрачный", "description": "A stylish smartwatch with health tracking features.", "rating": 4.3 },
        { "likes": 0,"id": 4, "link": "https://kaspi.kz/shop/p/apple-macbook-air-13-2024-13-6-16-gb-ssd-512-gb-macos-mxcu3-120179654/?c=750000000", "blabla": "6000 т", "price": "89000 т","image": "https://www.pngmart.com/files/22/T-Shirt-PNG-Isolated-File.png", "name": "Apple MacBook Air 13 2024 13.6", "description": "High-performance laptop for gaming and work.", "rating": 4.8 },
        { "likes": 0,"id": 5, "link": "https://kaspi.kz/shop/p/lg-gc-b399smcl-serebristyi-106378846/?c=750000000", "blabla": "2000 т", "price": "67000 т","image": "https://png.pngtree.com/png-vector/20240123/ourmid/pngtree-skirt-isolated-png-image_11462835.png", "name": "LG GC-B399SMCL серебристый", "description": "A 55-inch 4K Ultra HD Smart TV with HDR support.", "rating": 4.6 },
        { "likes": 0,"id": 6, "link": "https://kaspi.kz/shop/p/samsung-galaxy-a35-5g-8-gb-128-gb-temno-sinii-117420446/?c=750000000", "blabla": "4000 т", "price": "478000 т","image": "https://www.freepnglogos.com/uploads/jeans-png/john-doe-kevlar-jeans-with-kevlar-jdd-jeans-18.png", "name": "Samsung Galaxy A35 5G 8 ГБ/128 ГБ темно-синий", "description": "Portable Bluetooth speaker with deep bass and long battery life.", "rating": 4.4 },
        { "likes": 0,"id": 7, "link": "https://kaspi.kz/shop/p/elektrochainik-bereke-br-810-seryi-109981423/?c=750000000", "blabla": "6835 т", "price": "754000 т","image": "https://static.vecteezy.com/system/resources/thumbnails/052/657/455/small_2x/rose-adorned-pink-dress-for-special-occasions-png.png", "name": "Электрочайник BEREKE BR-810 серый", "description": "Smart vacuum cleaner with AI-powered navigation.", "rating": 4.2 },
        { "likes": 0,"id": 8, "link": "https://kaspi.kz/shop/p/samsung-vcc4520s36-xev-sinii-3701056/?c=750000000", "blabla": "8625 т", "price": "6000 т","image": "https://www.pngplay.com/wp-content/uploads/3/Jacket-Download-Free-PNG.png", "name": "Пылесос Samsung VCC4520S36/XEV синий", "description": "Professional DSLR camera with 24.2MP sensor.", "rating": 4.7 },
        { "likes": 0,"id": 9, "link": "https://kaspi.kz/shop/p/sport-lvl-urban-scooter-belyi-134005421/?c=750000000", "blabla": "9375 т", "price": "93000 т","image": "https://png.pngtree.com/png-vector/20240202/ourmid/pngtree-isolated-black-cap-png-image_11590684.png", "name": "Самокат SPORT LVL Urban Scooter белый", "description": "RGB mechanical keyboard with fast response time.", "rating": 4.5 },
        { "likes": 0,"id": 10, "link": "https://kaspi.kz/shop/p/hoco-w35-chernyi-105261846/?c=750000000", "blabla": "7484 т", "price": "858000 т","image": "https://candyboards.com.ua/wp-content/uploads/2023/07/shorty-rp-shorts-black-2.png", "name": "Наушники Hoco W35 черный", "description": "Eco-friendly electric scooter with a 25km range.", "rating": 4.3 }
      ])
    );  
  }
  likeProduct(id: number) {
    return this.getTestAccounts1().pipe(
      map(products => {
        return products.map(product => {
          if (product.id === id) {
            return { ...product, likesCount: product.likes + 1 };
          }
          return product;
        });
      })
    );
  }
}
