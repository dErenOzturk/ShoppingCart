import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SepetServiceService {

  constructor() { }

  private sepet: any[] = [];

  sepeteEkle(urun: any): void {
    this.sepet.push(urun);
  }

  sepettenCikar(urun: any): void {
    const index = this.sepet.indexOf(urun);
    if (index !== -1) {
      this.sepet.splice(index, 1);
    }
  }

  sepetiGetir(): any[] {
    return this.sepet;
  }

  toplamTutariHesapla(): number {
    return this.sepet.reduce((total, urun) => total + urun.fiyat, 0);
  }
}
