import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  constructor(public entry: EntryService) { }

  ngOnInit(): void {
  }

}
