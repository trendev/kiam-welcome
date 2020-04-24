import { environment } from './../../../environments/environment';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  @Input() appName = 'kiam';
  @Input() expanded = true;
  support: string;

  constructor() { }

  ngOnInit(): void {
    this.support = environment.support;
  }

}
