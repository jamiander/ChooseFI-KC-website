import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  constructor() { }

  totalOrbits(): number {
    let total = 0;
    for(let i: number = 0; i < this.satellites.length; i++) {
      total = total + 1;
    }
    return total;
  }
  totalDebris(): number {
    let debris = 0;
    for(let i: number = 0; i < this.satellites.length; i++) {
      if(this.satellites[i].type === 'Space Debris') {
      debris = debris + 1;
    }
  }
    return debris;
}
    ngOnInit() {
  }

}
