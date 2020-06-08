import { Component, OnInit } from '@angular/core';
import { Color } from '../color';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.scss']
})
export class GeneratorComponent implements OnInit {
  colors: Color[] = [
    {id: 1, value: 'red'},
    {id: 2, value: 'orange'},
    {id: 3, value: 'yellow'},
    {id: 4, value: 'green'},
    {id: 5, value: 'blue'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
