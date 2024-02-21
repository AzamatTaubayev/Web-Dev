export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: string;
  link: string;
}

export const products = [
  {
    id: 1,
    name: 'Google Pixel 8 Pro',
    price: 799,
    description: 'Pixel 8 Pro\'s 6.7-inch Super Actua display features our brightest display yet.' +
      ' So even in direct sunlight, you\'ll love how true-to-life your Ultra HDR images look.' +
      ' It also has a matte glass back with a polished aluminum frame and comes in three colors: Porcelain, Bay and Obsidian.',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h72/h19/84136286191646.jpg?format=preview-large',
    rating: '5',
    link: 'https://kaspi.kz/shop/p/google-pixel-8-pro-12-gb-128-gb-bezhevyi-113692579/?c=750000000'
  },
  {
    id: 2,
    name: 'Samsung Galaxy S23',
    price: 699,
    description: 'The Samsung Galaxy S23 specs are top-notch including a Snapdragon 8 Gen 2 chipset, 8GB RAM coupled with 128/256GB storage, and a 3900mAh battery.' +
      ' The phone sports a 6.1-inch Dynamic AMOLED display with an adaptive 120Hz refresh rate',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h9b/h20/69065028435998.jpg?format=preview-large',
    rating: '3.9',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-5g-8-gb-256-gb-zelenyi-108915923/?c=750000000'
  },
  {
    id: 3,
    name: 'Sony Xperia',
    price: 700,
    description: 'With the 21:9 CinemaWide 6.1” FHD+ HDR OLED display, triple lens camera, and cinematic Dolby Atmos® multi-dimensional sound, the Xperia 5 brings the best experiences only Sony can deliver.',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hab/h1f/82300139110430.jpg?format=preview-large',
    rating: '4',
    link: 'https://kaspi.kz/shop/p/sony-xperia-5-v-8-gb-256-gb-chernyi-113935361/?c=750000000'
  },
  {
    id: 4,
    name: 'Samsung Galaxy S23 Ultra',
    price: 700,
    description: 'The Samsung Galaxy S23 Ultra is powered by Snapdragon 8 Gen 2 for Galaxy, the fastest Snapdragon ever. It features an accelerated Qualcomm® Kryo™ CPU with up to 3.36GHz peak speeds, providing superior performance when you need it most.',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hb0/hf3/69635680239646.jpg?format=preview-large',
    rating: '4.9',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-256-gb-chernyi-109174566/?c=750000000'
  },
  {
    id: 5,
    name: 'Google Pixel 7a',
    price: 700,
    description: 'Pixel 7a brings amazing clarity and vibrant details to every photo – even in low light. With a 120° field of view, 6 get more of the landscape or fit more friends in the frame. Spend less time getting the perfect selfie with a 95° ultrawide field of view.',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h7f/80879192539166.jpg?format=preview-large',
    rating: '5',
    link: 'https://kaspi.kz/shop/p/google-pixel-7a-8-gb-128-gb-chernyi-110489765/?c=750000000'
  },
  {
    id: 6,
    name: 'Galaxy S23 FE',
    price: 700,
    description: 'The Samsung Galaxy S23 FE comes with 6.4-inch AMOLED display with 120Hz refresh rate and Qualcomm Snapdragon 8 Gen 1 processor. Specs also include 4500mAh battery with 25W charging speed and Triple camera setup on the back.',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h85/h84/84251429535774.jpg?format=preview-large',
    rating: '4.6',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-fe-8-gb-256-gb-seryi-113977470/?c=750000000'
  },
  {
    id: 7,
    name: 'Samsung Galaxy S22',
    price: 700,
    description: 'The Samsung Galaxy S22 specs are top-notch including a Snapdragon 8 Gen 1 chipset, 8GB RAM coupled with 128/256GB storage, and a 3700mAh battery with 25W charging speed. The phone sports a 6.1-inch Dynamic AMOLED display with an adaptive 120Hz refresh rate.',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h5f/hda/64408125472798.jpg?format=preview-large',
    rating: '4.2',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s22-8-gb-256-gb-chernyi-103667959/?c=750000000'
  },
  {
    id: 8,
    name: 'Realme GT NEO 3T Dragon Ball Z',
    price: 700,
    description: 'With the 21:9 CinemaWide 6.1” FHD+ HDR OLED display, triple lens camera, and cinematic Dolby Atmos® multi-dimensional sound, the Xperia 5 brings the best experiences only Sony can deliver.',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hd6/h17/64405347663902.jpg?format=preview-large',
    rating: '4.4',
    link: 'https://kaspi.kz/shop/p/realme-gt-neo-3t-dragon-ball-z-edition-8-gb-256-gb-oranzhevyi-106284099/?c=750000000'
  },
  {
    id: 9,
    name: 'Redmi Note 12 Pro',
    price: 700,
    description: 'The Note 12 Pro — with no “Plus” tailing on the name — is one of the latest Redmi flagships.',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h02/ha0/79846423199774.jpg?format=preview-large',
    rating: '4',
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-12-pro-5g-8-gb-256-gb-chernyi-109734243/?c=750000000'
  },
  {
    id: 10,
    name: 'Poco X6 Pro',
    price: 700,
    description: 'Xiaomi\'s Poco X6 Pro is one of the better devices in the mid-range category. It doesn\'t offer extraordinary capabilities, but its memory and storage volume are usually found in significantly more expensive devices. It doesn\'t heat up even when it\'s burdened and it has a good screen. ',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha0/h4f/85019946319902.jpg?format=preview-large',
    rating: '3.8',
    link: 'https://kaspi.kz/shop/p/poco-x6-pro-12-gb-512-gb-seryi-115961088/?c=750000000'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
