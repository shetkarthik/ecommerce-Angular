import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup}  from "@angular/forms";
import { ProductModel } from '../productmodel';
import { ProductapiService } from '../productapi.service';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

 
  formValue! : FormGroup;
  productModelObj: ProductModel = new ProductModel();
  productData! : any;
  showAdd! :boolean;
  showUpdate! :boolean;

  constructor(private formbuilder:FormBuilder,private api:ProductapiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      pname:[''],
      pdesc:[''],
      status:[''],
      price:[''],
      pimage:[''],
      color:['']
    })
    this.getProducts();
  }

  clickAddProduct(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }


  postProductDetails(){
    this.productModelObj.pname = this.formValue.value.pname;
    this.productModelObj.pdesc = this.formValue.value.pdesc;
    this.productModelObj.price = this.formValue.value.price;
    this.productModelObj.pimage = this.formValue.value.pimage;
    this.productModelObj.status = this.formValue.value.status;
    this.productModelObj.color = this.formValue.value.color;
    this.productModelObj.isOpen = false;


    this.api.postProducts(this.productModelObj).subscribe(res=>{
      console.log(res);
      alert("New product added successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getProducts();
    },
    err=>{
      alert("Something went wrong .Please check again")
      console.log(err);
    })

  }

  getProducts(){
    this.api.getProducts().subscribe(res=>{
      this.productData = res;
    },
     err=>{
      console.log(err);
     }
    )
  }

  deleteProducts(product:any){
    this.api.deleteProducts(product.id).subscribe(res=>{
      alert("The product is deleted")
      this.getProducts();
    },  err=>{
    console.log(err);
    }),
    ({

    })
  }

  onEdit(product:any){
    this.showAdd = false;
    this.showUpdate = true;
    this.productModelObj.id = product.id;
    this.productModelObj.isOpen = false;

     this.formValue.controls['pname'].setValue(product.pname);
     this.formValue.controls['pdesc'].setValue(product.pdesc);
     this.formValue.controls['color'].setValue(product.color);
     this.formValue.controls['status'].setValue(product.status);
     this.formValue.controls['price'].setValue(product.price);
     this.formValue.controls['pimage'].setValue(product.pimage);
    }

    updateProductDetails(){
      this.productModelObj.pname = this.formValue.value.pname;
      this.productModelObj.pdesc = this.formValue.value.pdesc;
      this.productModelObj.price = this.formValue.value.price;
      this.productModelObj.pimage = this.formValue.value.pimage;
      this.productModelObj.status = this.formValue.value.status;
      this.productModelObj.color = this.formValue.value.color;
      this.productModelObj.isOpen = false;

      this.api.updateProducts(this.productModelObj,this.productModelObj.id).subscribe(res=>{
        alert("The product updated")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getProducts();
      })
    }

}

  
