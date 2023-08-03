import { Component } from '@angular/core';
import { SepetServiceService } from '../sepet-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private sepetService: SepetServiceService) {}

  sepet = this.sepetService.sepetiGetir();
}
