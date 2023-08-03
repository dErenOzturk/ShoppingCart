import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UrunlerService {
  urunler = [
    {
      urunAdi: 'İç Saha Forma',
      fiyat: 1499.9,
      fotoURL:
        'https://cdn.gsstore.org/UPLOAD/PRODUCT/thumb/FN0200-836-202-1_medium.jpg',
      miktar: 1,
    },
    {
      urunAdi: 'Deplasman Forma',
      fiyat: 1499.9,
      fotoURL:
        'https://cdn.gsstore.org/UPLOAD/PRODUCT/thumb/FJ7948-100-11_medium.jpg',
      miktar: 1,
    },
    {
      urunAdi: '2023 Şampiyonluk T-Shirt Siyah',
      fiyat: 299.99,
      fotoURL:
        'https://cdn.gsstore.org/UPLOAD/PRODUCT/thumb/E231285-010_medium.jpg',
      miktar: 1,
    },
    {
      urunAdi: '2023 Şampiyonluk T-Shirt Beyaz',
      fiyat: 299.99,
      fotoURL:
        'https://cdn.gsstore.org/UPLOAD/PRODUCT/thumb/beyaz-t-shirt_medium.jpg',
      miktar: 1,
    },
    {
      urunAdi: '2023 Şampiyonluk T-Shirt Kırmızı',
      fiyat: 349.99,
      fotoURL:
        'https://cdn.gsstore.org/UPLOAD/PRODUCT/thumb/E231306-101-1_medium.jpg',
      miktar: 1,
    },
    {
      urunAdi: 'Icardi T-Shirt',
      fiyat: 399.99,
      fotoURL:
        'https://cdn.gsstore.org/UPLOAD/PRODUCT/thumb/E231364-050-1_medium.jpg',
      miktar: 1,
    },
    {
      urunAdi: 'Zaha T-Shirt',
      fiyat: 399.99,
      fotoURL:
        'https://cdn.gsstore.org/UPLOAD/PRODUCT/thumb/E231372-101-2_medium.jpg',
      miktar: 1,
    },
    {
      urunAdi: 'Futbol Şort Kırmızı',
      fiyat: 949.90,
      fotoURL:
        'https://cdn.gsstore.org/UPLOAD/PRODUCT/thumb/FJ6344-613-101-1_medium.jpg',
      miktar: 1,
    },
    {
      urunAdi: 'Futbol Şort Beyaz',
      fiyat: 949.90,
      fotoURL:
        'https://cdn.gsstore.org/UPLOAD/PRODUCT/thumb/FJ7939-043-1_medium.jpg',
      miktar: 1,
    },
    {
      urunAdi: 'Deniz Şort Siyah',
      fiyat: 529.99,
      fotoURL:
        'https://cdn.gsstore.org/UPLOAD/PRODUCT/thumb/E221467-010-mankenli-1_medium.jpg',
      miktar: 1,
    },
    {
      urunAdi: 'Deniz Şort Kırmızı',
      fiyat: 529.99,
      fotoURL:
        'https://cdn.gsstore.org/UPLOAD/PRODUCT/thumb/E221467-101-mankenli-1_medium.jpg',
      miktar: 1,
    }
  ];

  getUrunler() {
    return this.urunler;
  }

  constructor() {}
}
