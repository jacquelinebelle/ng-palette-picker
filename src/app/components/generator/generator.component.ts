import { Component, OnInit } from '@angular/core';
import { Color } from '../../models/color';
import { ColorService } from 'src/app/services/color.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {
  // this Observable will return colors when we subscribe to it
  // we do this in the html template using 'let color of colors | async'
  public colors: Observable<Color[]>;

  constructor(private colorService: ColorService) { }

  ngOnInit(): void {
    // assigns a new Color[] Observable to the 'colors' property
    this.colors = this.colorService.generate();
  }
}
