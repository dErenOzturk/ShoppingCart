import { Component } from '@angular/core';
import { SepetServiceService } from '../sepet-service.service';

@Component({
  selector: 'app-sepet-listesi',
  templateUrl: './sepet-listesi.component.html',
  styleUrls: ['./sepet-listesi.component.css']
})
export class SepetListesiComponent {

  constructor(private sepetService: SepetServiceService) { }

  sepet = this.sepetService.sepetiGetir();

  deleteUrun(urun: any) {
    this.sepetService.sepettenCikar(urun);
  }
}
