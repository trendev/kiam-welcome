import { environment } from '@env/environment';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subscription-questions',
  templateUrl: './subscription-questions.component.html',
  styleUrls: ['./subscription-questions.component.scss']
})
export class SubscriptionQuestionsComponent implements OnInit {

  @Input() appName = 'kiam';
  @Input() expanded = true;

  tos: string;

  constructor() { }

  ngOnInit(): void {
    this.tos = environment.tos;
  }

}
