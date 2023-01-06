import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})

export class TabComponent {
  navs = ['Active','Link 1', 'Link2'];
  @Input() linkTemplate: TemplateRef<any>;
}
