import { fakeApi } from "@/api/fake-api"
import type { ProductsResonse } from "../interfaces/fake-api-response.interface";


export const getProductsAction = async ():Promise<ProductsResonse[]> => {
  
 const { data } = await fakeApi.get<ProductsResonse[]>('/products');

 return data;
}