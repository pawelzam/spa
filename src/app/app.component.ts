import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Section } from './model/section';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spa';
  sections: Array<Section>;
  systemName:string = environment.systemName;
  constructor() {
    this.sections = <Section[]>environment.sections;
  }
}
