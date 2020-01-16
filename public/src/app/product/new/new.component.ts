import { Component, OnInit } from "@angular/core";
import { HttpService } from "../../http.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-new",
  templateUrl: "./new.component.html",
  styleUrls: ["./new.component.css"]
})
export class NewComponent implements OnInit {
  newProduct: {};
  error: {};
  constructor(private _httpService: HttpService, private router: Router) {
    this.newProduct = { title: "", price: "", image: "" };
  }

  ngOnInit() {}
  onSubmitNewProduct() {
    console.log(
      `Click event is working with event: ${JSON.stringify(this.newProduct)}`
    );
    let observable = this._httpService.createProduct(this.newProduct);
    observable.subscribe((newProduct: any) => {
      console.log("Got our new Product!", newProduct);
      //@ts-ignore
      if (newProduct.errors) {
        //@ts-ignore
        this.error = newProduct.errors;
        console.log("Error: ", this.error);
      } else {
        console.log("Product is being created");
        this.newProduct = { title: "", price: "", image: "" };
        this.router.navigate(["/products"]);
      }
    });
  }
}
