import { Component, Input } from '@angular/core';
import { User } from 'src/app/model/user-model';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.css']
})
export class UserImageComponent{
  @Input()
  user:User;
}
