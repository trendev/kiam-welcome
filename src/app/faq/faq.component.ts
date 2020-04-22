import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FAQComponent implements OnInit {

  appName = 'kiam';
  expanded = true;

  constructor() { }

  ngOnInit(): void {
  }

}
