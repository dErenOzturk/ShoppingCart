import { Component } from '@angular/core';
import { SepetServiceService } from '../sepet-service.service';

@Component({
  selector: 'app-urun-listesi',
  templateUrl: './urun-listesi.component.html',
  styleUrls: ['./urun-listesi.component.css'],
})
export class UrunListesiComponent {

  constructor(private sepetServisi: SepetServiceService) {}

  sepeteEkle(urun: any): void {
    this.sepetServisi.sepeteEkle(urun);
  }
}
