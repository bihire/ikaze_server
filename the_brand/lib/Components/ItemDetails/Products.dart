import 'package:flutter/material.dart';

import '../../Pages/Product_details.dart';

// class Products extends StatefulWidget {
//   @override
//   State<StatefulWidget> createState() {
//     return ProductState();
//   }
// }

// class ProductState extends State<Products> {
//   @override
//   Widget build(BuildContext context) {
//     return Container(
//       child: GridView.builder(
//         itemCount: 2,
//         gridDelegate:
//             SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 2),
//         itemBuilder: (BuildContext context, index) {
//           return Text('data');
//         },
//       ),
//     );
//   }
// }

class Products extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return ProductsState();
  }
}

class ProductsState extends State<Products> {
  var Products_list = [
    {
      "name": "Blazer",
      "product_location": "assets/images/products/blazer1.jpeg",
      "old_price": 120,
      "new_price": 100,
      "added_to_cart": false
    },
    {
      "name": "Dress",
      "product_location": "assets/images/products/dress1.jpeg",
      "old_price": 122,
      "new_price": 110,
      "added_to_cart": false
    },
    {
      "name": "Hills",
      "product_location": "assets/images/products/hills1.jpeg",
      "old_price": 120,
      "new_price": 10,
      "added_to_cart": false
    },
    {
      "name": "Pants",
      "product_location": "assets/images/products/pants1.jpg",
      "old_price": 12,
      "new_price": 110,
      "added_to_cart": false
    },
    {
      "name": "Shoe",
      "product_location": "assets/images/products/shoe1.jpg",
      "old_price": 122,
      "new_price": 110,
      "added_to_cart": false
    },
    {
      "name": "Skirt",
      "product_location": "assets/images/products/skt1.jpeg",
      "old_price": 122,
      "new_price": 110,
      "added_to_cart": false
    },
  ];
  @override
  Widget build(BuildContext context) {
    return GridView.builder(
      itemCount: Products_list.length,
      gridDelegate:
          SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 2),
      itemBuilder: (BuildContext context, index) {
        return SingleProduct(
          product_name: Products_list[index]['name'],
          product_location: Products_list[index]['product_location'],
          new_price: Products_list[index]['new_price'],
          old_price: Products_list[index]['old_price'],
        );
      },
      shrinkWrap: true,
      physics: ClampingScrollPhysics(),
    );
  }
}

class SingleProduct extends StatelessWidget {
  final product_name;
  final product_location;
  final old_price;
  final new_price;
  bool added_to_cart;

  SingleProduct(
      {this.product_name,
      this.product_location,
      this.new_price,
      this.old_price,
      this.added_to_cart});

  String get getProductName => product_name;
  String get getProductLocation => product_location;
  String get getProductNewPrice => new_price;
  String get getProductOldPrice => old_price;
  bool get getAddedToCart => added_to_cart;

  set setReadAddedToCartState(bool readAddedToCartState) =>
      this.added_to_cart = readAddedToCartState;
  @override
  Widget build(BuildContext context) {
    return Card(
      child: Hero(
          tag: product_name,
          child: Material(
            child: InkWell(
              onTap: () => Navigator.of(context).push(MaterialPageRoute(
                  builder: (context) => ProductDetails(
                        product_detail_name: product_name,
                        product_detail_location: product_location,
                        product_detail_new_price: new_price,
                        product_detail_old_price: old_price,
                      ))),
              child: GridTile(
                footer: Container(
                  color: Colors.white70,
                  child: ListTile(
                    leading: Text(
                      product_name,
                      style: TextStyle(fontWeight: FontWeight.bold),
                    ),
                    title: Text(
                      '\$$new_price',
                      style: TextStyle(fontWeight: FontWeight.w800),
                    ),
                    subtitle: Text(
                      '\$$old_price',
                      style: TextStyle(
                          fontWeight: FontWeight.w600,
                          decoration: TextDecoration.lineThrough),
                    ),
                  ),
                ),
                child: Image.asset(
                  product_location,
                  fit: BoxFit.cover,
                ),
              ),
            ),
          )),
    );
  }
}
