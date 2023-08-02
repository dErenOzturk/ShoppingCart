import { Component } from '@angular/core';
import { SepetServiceService } from '../sepet-service.service';

@Component({
  selector: 'app-sepet',
  templateUrl: './sepet.component.html',
  styleUrls: ['./sepet.component.css']
})
export class SepetComponent {
  sepet: any[] = [];

  constructor(private sepetServisi: SepetServiceService) {
    this.sepet = sepetServisi.sepetiGetir();
  }

  sepettenCikar(urun: any): void {
    this.sepetServisi.sepettenCikar(urun);
  }

  toplamTutar(): number {
    return this.sepetServisi.toplamTutariHesapla();
  }
}
