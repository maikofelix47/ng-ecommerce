import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { CategoryService } from '../services/category.service';

interface Category{
  name: string;
  featureImg: string;
  id: number;
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{

  public categories: Category[] = [];

  constructor(private categoryService: CategoryService, private router: Router){

  }

  public ngOnInit(): void {
    this.getCategories();
  }

  public getCategories(){
     this.categoryService.getAll().subscribe((categories: any)=> {
         console.log('categories', categories);
         this.categories = categories;
     });
  }

  public goToCategory(categoryName: string){
     this.router.navigate([`/category/${categoryName}`]);
  }

}
