import { Component } from '@angular/core';
import { API_CONFIG_TOKEN } from '../configs.token';
import { Injectable, Inject } from '@angular/core';
import {configs} from '../../services/configuration.service'
import { environment } from '../../../environoments/environoment';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css',
  providers:[{
    provide:API_CONFIG_TOKEN,
    useValue:{
      apiTitle:environment.API_TITLE,
      apiUrl:environment.API_URL
    }
  }]
})
export class ContactusComponent {

  configuration=''

constructor(@Inject(API_CONFIG_TOKEN) public config:configs){
  this.configuration=this.config.apiTitle +"   "+ this.config.apiUrl
  console.log(this.configuration)
}

}
 