import { environment } from '@env/environment';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first-steps-questions',
  templateUrl: './first-steps-questions.component.html',
  styleUrls: ['./first-steps-questions.component.scss']
})
export class FirstTimeQuestionsComponent implements OnInit {

  @Input() appName = 'kiam';
  @Input() expanded = true;
  support: string;

  constructor() {
  }

  ngOnInit(): void {
    this.support = environment.support;
  }

}
