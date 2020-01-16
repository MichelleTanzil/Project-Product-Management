import { Component, OnInit } from "@angular/core";
import { HttpService } from "../../http.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-all",
  templateUrl: "./all.component.html",
  styleUrls: ["./all.component.css"]
})
export class AllComponent implements OnInit {
  products = [];
  constructor(private _httpService: HttpService, private router: Router) {}

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    let observable = this._httpService.getAll();
    observable.subscribe((data: object) => {
      console.log("Got our data!", data);
      this.products = data["products"];
    });
  }
  onSubmitDeleteProduct(id: string) {
    console.log(`Click event is working with event: ${id}`);
    let observable = this._httpService.deleteProduct(id);
    observable.subscribe(data => {
      console.log("Got product to delete!", data);
    });
    this.getProducts();
  }
}
