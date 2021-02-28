import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Block } from '../model/block';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {
  @Input() block:Block;
  safeContent: SafeHtml;
  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.safeContent = this._sanitizer.bypassSecurityTrustHtml(this.block.content);
  }

}
