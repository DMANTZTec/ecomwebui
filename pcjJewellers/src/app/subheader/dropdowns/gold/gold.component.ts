import { Component, OnInit, Input } from '@angular/core';
import  {DropdownsService} from '../dropdowns.service';
import {DropdownsComponent} from '../dropdowns.component';
import { Hero,EarRings, NewArrivals,Gold ,Child,NavigationList} from '../../../data/hero';



@Component({
  selector: 'app-gold',
  templateUrl: './gold.component.html',
  styleUrls: ['./gold.component.css']
})
export class GoldComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
 
}

