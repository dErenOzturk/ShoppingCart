import { Component } from '@angular/core';
import { SepetServiceService } from '../sepet-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sepet-listesi',
  templateUrl: './sepet-listesi.component.html',
  styleUrls: ['./sepet-listesi.component.css']
})
export class SepetListesiComponent {
  siparisTamamlandi = false;

  constructor(private sepetService: SepetServiceService, private router: Router) { }

  sepet = this.sepetService.sepetiGetir();
   
  deleteUrun(urun: any) {
    this.sepetService.sepettenCikar(urun);
  }

  urunToplam(index:number) {
    return (this.sepet[index].fiyat * this.sepet[index].miktar);
  }

  toplamTutar(): number {
    let toplam = 0;
    for (const urun of this.sepet) {
      toplam += urun.fiyat * urun.miktar;
    }
    return toplam;
  }

  sepetDolu = ((this.sepet.length == 0) ? false : true);

  siparisiTamamla(): void {
    if(this.toplamTutar() > 0){
      
      this.sepetService.sepetiTemizle();
      this.sepetDolu = false;
      this.siparisTamamlandi = true;
      
      setTimeout(() => {
        this.siparisTamamlandi = false;
        this.router.navigate(['/ana-sayfa']);
      }, 2000);
    }
  }
  
}
