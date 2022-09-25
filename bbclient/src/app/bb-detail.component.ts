import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BbService } from './bb.service';
import { Bb } from './models';
import { Comments } from './models';

@Component({
  selector: 'app-bb-detail',
  templateUrl: './bb-detail.component.html',
  styleUrls: ['./bb-detail.component.css']
})
export class BbDetailComponent implements OnInit {
  public bb!: Bb;
  public comments: Comments[] = [];
  public author: String = '';
  public password: String = '';
  public content: String = '';

  constructor(private bbservice: BbService, private ar: ActivatedRoute) { }

  ngOnInit() {
    const pk = this.ar.snapshot.params['pk'];
    this.bbservice.getBb(pk).subscribe((bb: Bb) => {
      this.bb = bb;
      this.getComments();
    });
  }

  getComments() {
    this.bbservice.getComments(this.bb.id).subscribe((comments: Comments[]) => { this.comments = comments; })
  }

  submitComment() {
    this.bbservice.addComment(this.bb.id, this.author, this.password, this.content).subscribe((comment: Object|null) => {
      if (comment) {
        this.content = '';
        this.getComments();
      }
    });
  }
}
