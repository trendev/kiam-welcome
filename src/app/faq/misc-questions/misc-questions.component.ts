import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-misc-questions',
  templateUrl: './misc-questions.component.html',
  styleUrls: ['./misc-questions.component.scss']
})
export class MiscQuestionsComponent implements OnInit {

  @Input() appName = 'kiam';
  @Input() expanded = true;

  constructor() { }

  ngOnInit(): void {
  }

}
