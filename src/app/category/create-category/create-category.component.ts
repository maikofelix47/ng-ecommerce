import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

import { Category } from '../../models/category';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  public name = '';
  public description = '';


  constructor(private categoryService: CategoryService){

  }


  ngOnInit(): void {
    
  }


  submitCategoryData(){

    const payload: Category = {
        name: this.name,
        description: this.description,
        featureImg: ''
    };

    this.categoryService.createCategory(payload).subscribe((result: any)=> {
         console.log('result', result);
    },(error)=> {
      console.log('error', error);
    });

  }

}
