import { Component, OnInit } from '@angular/core';
import { BbService } from './bb.service';
import { Bbs } from './models'

@Component({
  selector: 'app-bb-list',
  templateUrl: './bb-list.component.html',
  styleUrls: ['./bb-list.component.css']
})
export class BbListComponent implements OnInit {
  public bbs!: Bbs[];

  constructor(private bbservice: BbService) { }

  ngOnInit() {
    this.bbservice.getBbs().subscribe(
      (bbs: Bbs[]) => { this.bbs = bbs; }
    )
  }

}
