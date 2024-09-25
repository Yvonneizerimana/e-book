import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [NgFor],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
books=[
  {id:1,title:"Jack and Rose",author:"Hemgoe",description:"Love story of jack and Rose",price:200000,category:"love story",uploadedBook:"sweetBook"},
  {id:2,title:"Romeo na Julliette",author:"Hemgoe",description:"Love story of Romeo and Juliette",price:15000,category:"love story",uploadedBook:"sweetBook"},
  {id:3,title:"Ngiye Nzahindukira",author:"Hemgoe",description:"proverb of ngiye nzahindukira",price:190000,category:"proverb",uploadedBook:"mbegaa"},
  {id:4,title:"Inkuru ya Manzi",author:"Hemgoe",description:"ibyabaye kuri manzi igihe yaratangiye ishuri",price:78000,category:"Inkuru Mpimbano",uploadedBook:"so good and cool"},
]

deleteBook(id:number){
  this.books = this.books.filter(book=>book.id!=id)
  console.log("book deleted successfuly",this.books)
  alert("Book deleted successfully")
}

updateBook(id:number){
 let book=this.books.find(book=>book.id==id)
 if(book){
  book.title=""
 }
}
