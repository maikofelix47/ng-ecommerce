import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Category } from '../../../models/category';
import { SubCategory } from '../../../models/sub-category';
import { CategoryService } from '../../../services/category.service';
import { SubCategoryService } from '../../../services/sub-category.service';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from '../../../models/product';
import { AlertService } from 'src/app/services/shared/alert.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  categories$!: Observable<Category[]>;
  subCategories$!: Observable<SubCategory[]>;

  public createProductForm = new FormGroup({
    name: new FormControl<string>('', { nonNullable: true }),
    description: new FormControl<string>('', { nonNullable: true }),
    categoryId: new FormControl<number>(0, { nonNullable: true }),
    subCategoryId: new FormControl<number>(0, { nonNullable: true }),
    price: new FormControl<number>(0, { nonNullable: true }),
    inStock: new FormControl<number>(0, { nonNullable: true }),
  });

  constructor(
    private categoryService: CategoryService,
    private subCategoryService: SubCategoryService,
    private productsService: ProductsService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categories$ = this.categoryService.getAll();
  }
  onCategorySelect() {
    const categoryId = this.createProductForm.get('categoryId')?.value;
    if (categoryId) {
      this.subCategories$ =
        this.subCategoryService.getSubCategoriesByCategoryId(
          categoryId.toString()
        );
    }
  }
  submitData() {
    const formData = this.createProductForm.value;
    const payLoad: Partial<Product> = {
      name: formData?.name || '',
      description: formData.description || '',
      subCategoryId: parseInt(formData.subCategoryId as unknown as string),
      price: formData.price ? formData.price : 0,
      inStock: formData.inStock ? formData.inStock : 0,
    };
    this.productsService.createProduct(payLoad).subscribe((result) => {
      const message = 'Product Succesfully Created';
      this.alertService.alert({
        message
      });
    });
  }
}
