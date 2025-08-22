import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-countries',
  imports: [CommonModule],
  templateUrl: './countries.component.html',
  styleUrl: './countries.component.css'
})
export class CountriesComponent {
  countryName = '';
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.countryName = params['name'];
    });
  }
}
