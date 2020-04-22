import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-application-questions',
  templateUrl: './application-questions.component.html',
  styleUrls: ['./application-questions.component.scss']
})
export class ApplicationQuestionsComponent implements OnInit {

  @Input() appName = 'kiam';
  @Input() expanded = true;

  constructor() { }

  ngOnInit(): void {
  }

}
