import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun',
  templateUrl: './fun.component.html',
  styleUrls: ['./fun.component.css']
})
export class FunComponent implements OnInit {

  heroes: string[] = ["teta","alpha","omega"]

  constructor() { }

  ngOnInit(): void {
  }

}
