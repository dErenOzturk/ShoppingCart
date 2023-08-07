import { Component } from '@angular/core';
import { SepetServiceService } from '../sepet-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sepet-listesi',
  templateUrl: './sepet-listesi.component.html',
  styleUrls: ['./sepet-listesi.component.css'],
})
export class SepetListesiComponent {
  siparisTamamlandi = false;

  constructor(
    private sepetService: SepetServiceService,
    private router: Router
  ) {}

  sepet = this.sepetService.sepetiGetir();
  sepetDolu = this.sepet.length == 0 ? false : true;

  deleteUrun(urun: any) {
    this.sepetService.sepettenCikar(urun);
    if (this.sepet.length == 0) {
      this.sepetDolu = false;
    }
  }

  urunToplam(index: number) {
    return this.sepet[index].fiyat * this.sepet[index].miktar;
  }

  toplamTutar(): number {
    let toplam = 0;
    for (const urun of this.sepet) {
      toplam += urun.fiyat * urun.miktar;
    }
    return toplam;
  }

  odemeyeGec() {
    if (this.toplamTutar() > 0) {
      this.siparisTamamlandi = true;
      this.sepetService.sepetiTemizle();
    }
  }

  siparisiTamamla(): void {
    if (this.toplamTutar() > 0) {
      this.siparisTamamlandi = true;
      this.sepetService.sepetiTemizle();

      setTimeout(() => {
        this.router.navigate(['/ana-sayfa']);
      }, 2000);
    }
  }
  
}
