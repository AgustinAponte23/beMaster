import {Component, Input, OnInit} from '@angular/core';
import {Movies} from '../../models/movies';

@Component({
  selector: 'app-content-category',
  templateUrl: './content-category.component.html',
  styleUrls: ['./content-category.component.scss']
})
export class ContentCategory implements OnInit {
   @Input() sliderConfig;
   @Input() movies: Movies;
   @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
