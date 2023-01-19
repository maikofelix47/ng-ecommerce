import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{

  public categories$!: Observable<any>;

  constructor(private categoryService: CategoryService){

  }

  public ngOnInit(): void {
    this.getCategories();
  }

  public getCategories(){
     this.categories$ = this.categoryService.getAll();
  }

}
