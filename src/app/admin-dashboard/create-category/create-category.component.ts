import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';

import { CreateCategoryPayload } from '../../models/category';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css'],
})
export class CreateCategoryComponent implements OnInit {
  createCategoryForm = new FormGroup({
    name: new FormControl<string>(''),
    description: new FormControl<string>(''),
    featureImg: new FormControl<string>(''),
    file: new FormControl<any | null>(''),
  });

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {}

  onFileChange($event: any) {
    if ($event.target.files.length) {
      const file = $event.target.files[0] || '';

      this.createCategoryForm.patchValue({
        file: file,
      });
    }
  }

  submitCategoryData() {
    const payload =
      this.createCategoryForm.getRawValue() as unknown as CreateCategoryPayload;

    const formData: any = new FormData();
    formData.append('name', this.createCategoryForm.get('name')?.value);
    formData.append(
      'description',
      this.createCategoryForm.get('description')?.value
    );
    formData.append('file', this.createCategoryForm.get('file')?.value);

    this.categoryService.createCategory(formData).subscribe(
      (result: any) => {
        console.log('result', result);
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
}
