import { Feedback } from './feedback.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  @Input() feedback: Feedback;

  constructor() { }

  ngOnInit(): void {
  }

}
