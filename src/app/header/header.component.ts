import { Component, Input, OnInit } from '@angular/core';
import { Section } from '../model/section';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() sections: Section[];
  @Input() systemName: string;
  constructor() { }

  ngOnInit() {
  }

}
