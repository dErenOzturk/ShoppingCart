import { Component } from '@angular/core';
import { UrunlerService } from '../urunler.service';
import { SepetServiceService } from '../sepet-service.service';

@Component({
  selector: 'app-urun',
  templateUrl: './urun.component.html',
  styleUrls: ['./urun.component.css'],
})
export class UrunComponent {
  urunEklendi = false;

  constructor(
    private urunlerService: UrunlerService,
    private sepetService: SepetServiceService
  ) {}

  urunler = this.urunlerService.getUrunler();
  sepet = this.sepetService.sepetiGetir();

  sepeteEkle(index: number) {

    if(this.sepet.includes(this.urunler[index])) {
      this.sepet[index].miktar += this.urunler[index].miktar + 1
    }

    else if(this.urunler[index].miktar >= 0){
      this.sepetService.sepeteEkle(this.urunler[index]);

      this.urunEklendi = true;

      setTimeout(() => {
        this.urunEklendi = false;
      }, 2000);
    }
  }

}
