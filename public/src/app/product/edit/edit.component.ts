import { Component, OnInit } from "@angular/core";
import { HttpService } from "../../http.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  id: string;
  selectedProduct = {};
  error: {};

  constructor(
    private _httpService: HttpService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.selectedProduct = { title: "", price: "", image: "" };
  }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.getProduct();
  }
  getProduct() {
    console.log("id is:" + this.id);
    let observable = this._httpService.getProduct(this.id);
    observable.subscribe((data: object) => {
      console.log("Got our data!", data);
      this.selectedProduct = data;
    });
  }
  onSubmitEditProduct() {
    console.log(
      `Click event is working with event: ${JSON.stringify(
        this.selectedProduct
      )}`
    );
    let observable = this._httpService.updateProduct(
      this.id,
      this.selectedProduct
    );
    observable.subscribe(updateproduct => {
      console.log("Got our update product!", updateproduct);
      //@ts-ignore
      if (updateproduct.errors) {
        //@ts-ignore
        this.error = updateproduct.errors;
        console.log("Errors: ", this.error);
      } else {
        console.log("Product is being updated");
        this.selectedProduct = { title: "", price: "", image: "" };
        this.router.navigate(["/products", "all"]);
      }
    });
  }
}
