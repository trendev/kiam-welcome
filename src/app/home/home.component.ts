import { Feedback } from './feedback/feedback.model';
import { feedbacks } from './feedback/feedbacks.data';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: Feedback[];

  constructor() {
  }

  ngOnInit(): void {
    this.data = feedbacks.sort((fdk1, fdk2) => fdk1.author.localeCompare(fdk2.author));
  }

}
