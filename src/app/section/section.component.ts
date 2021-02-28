import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Section } from '../model/section';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() section: Section;
  css: SafeHtml;
  temp = Array;
  math = Math;

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.css = this._sanitizer.bypassSecurityTrustHtml(this.section.css);
  }

  CalculateCols() :number {
    return Math.round((12 - this.section.blocks.length)/this.section.blocks.length);    
  }
}
