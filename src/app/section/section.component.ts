import { Component, Input, OnInit } from '@angular/core';
import { Section } from '../model/section';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() section: Section;
  constructor() { }

  ngOnInit() {
  }

}
