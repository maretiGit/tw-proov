import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tw-tag',
  templateUrl: './tag.component.html'
})
export class TagComponent implements OnInit {

  @Input() tag: string;

  constructor() { }

  ngOnInit() {
  }

}
