import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../../../model/post'
import { PostService } from '../../../services/post/post.service'

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './editpost.component.html',
  styleUrls: ['./post.component.css']

})
export class NgbdModalContent implements OnInit {
  @Input() post:Post;

  constructor(private postService:PostService, public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

  saveChangesInPost(_title,_body) {
    this.post.title = _title.value;
    this.post.body = _body.value;
    this.postService.updatePost(this.post['key'],this.post);
    this.activeModal.close('Close click');
  }
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  @Input() isEditable:Boolean;

  EditModeOn:boolean = false;
  constructor(private postService:PostService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  deletePost(key:string)
  {
    this.postService.deletePost(this.post['key']);
  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);        
    modalRef.componentInstance.post = this.post;
  }
}
