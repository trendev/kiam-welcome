import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subscription-questions',
  templateUrl: './subscription-questions.component.html',
  styleUrls: ['./subscription-questions.component.scss']
})
export class SubscriptionQuestionsComponent implements OnInit {

  @Input() appName = 'kiam';
  @Input() expanded = true;

  constructor() { }

  ngOnInit(): void {
  }

}
