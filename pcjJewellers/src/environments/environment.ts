// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
 /* Registration_Url:'http://192.168.0.174:8080/register',
  getUserUrl:'http://192.168.0.174:8080/getUser/emailId',
  Rings_URL: './assets/data/Rings.json',
  Earrings_url:'./assets/data/earrings.json',
  NewArrivals_url:"./assets/data/newarrivals.json",
  goldcoins_url:"./assets/data/goldcoins.json",
  gold_url:"./assets/data/gold.json",
// navigation_url:"./assets/data/newfile.json",
 navigation_url:'http://192.168.0.174:8080/catalog_dir',
 ProductListUrl:'http://192.168.0.174:8080/ec/catalog',
 productDetailListUrl:"./assets/data/productDetail.json",
 createOrderUrl:'http://192.168.0.174:8080/EcommerceApp/createOrder2',
 updateOrderUrl:'http://192.168.0.174:8080/EcommerceApp/updateOrder'*/
  apiUrl:'http://localhost:8090/loginDetails',
  Registration_Url:'http://localhost:8090/register',
  getUserUrl:'http://localhost:8090/userLogin',
  resetPasswordUrl:'http://localhost:8090/resetPassword',
  checkUserEmailUrl:'http://localhost:8090/checkUserEmail',
  updatePasswordUrl:'http://localhost:8090/updatePassword',
  Rings_URL: './assets/data/Rings.json',
  Earrings_url:'./assets/data/earrings.json',
  NewArrivals_url:"./assets/data/newarrivals.json",
  goldcoins_url:"./assets/data/goldcoins.json",
  gold_url:"./assets/data/gold.json",
// navigation_url:"./assets/data/newfile.json",
 navigation_url:'http://localhost:8090/catalog_dir',
 ProductListUrl:'http://localhost:8090/ec/catalog',
 productDetailListUrl:"./assets/data/productDetail.json",
 createOrderUrl:'http://localhost:8090/EcommerceApp/createOrder2',
 updateOrderUrl:'http://localhost:8090/EcommerceApp/updateOrder'
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
