import { Component } from '@angular/core';
import { UrunlerService } from '../urunler.service';
import { SepetServiceService } from '../sepet-service.service';

@Component({
  selector: 'app-urun',
  templateUrl: './urun.component.html',
  styleUrls: ['./urun.component.css'],
})
export class UrunComponent {
  eklenenUrunler = [];
  urunEklendi = false;
  miktar = 1;

  constructor(
    private urunlerService: UrunlerService,
    private sepetService: SepetServiceService
  ) {}

  urunler = this.urunlerService.getUrunler();

  sepeteEkle(i: number) {
    this.sepetService.sepeteEkle(this.urunler[i]);
  }
}
