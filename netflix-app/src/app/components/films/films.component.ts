import { FilmsInterface } from './../../models/models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  @Input() public content!: FilmsInterface;

  constructor() { }

  ngOnInit(): void {
  }

}