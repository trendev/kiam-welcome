import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bills-questions',
  templateUrl: './bills-questions.component.html',
  styleUrls: ['./bills-questions.component.scss']
})
export class BillsQuestionsComponent implements OnInit {

  @Input() appName = 'kiam';
  @Input() expanded = true;

  constructor() { }

  ngOnInit(): void {
  }

}
