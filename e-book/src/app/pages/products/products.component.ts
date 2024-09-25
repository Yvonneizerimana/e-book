import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  isDisabled:boolean=true
  book = {
    title: '',
    author: '',
    description: '',
    price:'',
    category:'',
    uploadBook:''
  };

  onSubmit() {
    console.log('Book added:', this.book,);
    this.book={title: '',
      author: '',
      description: '',
      price:'',
      category:'',
      uploadBook:''}
  }
}
