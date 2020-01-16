import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private _http: HttpClient) {}
  getAll() {
    return this._http.get("/products");
  }
  deleteProduct(id: string) {
    return this._http.delete("/products/" + id);
  }
  createProduct(newProduct: any) {
    return this._http.post("/products", newProduct);
  }
  getProduct(id: string) {
    return this._http.get("/products/" + id);
  }
  updateProduct(id: string, productToUpdate: any) {
    return this._http.put("/products/" + id, productToUpdate);
  }
}
