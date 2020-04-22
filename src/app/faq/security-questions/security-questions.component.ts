import { environment } from '@env/environment';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-security-questions',
  templateUrl: './security-questions.component.html',
  styleUrls: ['./security-questions.component.scss']
})
export class SecurityQuestionsComponent implements OnInit {

  @Input() appName = 'kiam';
  @Input() expanded = true;
  tos: string;

  constructor() { }

  ngOnInit(): void {
    this.tos = environment.tos;
  }

}
