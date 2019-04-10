import 'package:flutter/material.dart';

class Cart_details extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return Cart_detailsState();
  }
}

class Cart_detailsState extends State<Cart_details> {
  var _productslist = [
    {
      "name": "Blazer",
      "product_location": "assets/images/products/blazer1.jpeg",
      "old_price": 120,
      "new_price": 100,
      "size": "M",
      "quantity": 1,
      "color": "blue"
    },
    {
      "name": "Dress",
      "product_location": "assets/images/products/dress1.jpeg",
      "old_price": 122,
      "new_price": 110,
      "size": "M",
      "quantity": 1,
      "color": "blue"
    },
    {
      "name": "Hills",
      "product_location": "assets/images/products/hills1.jpeg",
      "old_price": 120,
      "new_price": 10,
      "size": "M",
      "quantity": 1,
      "color": "blue"
    },
  ];
  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: _productslist.length,
      itemBuilder: (context, index) {
        return Single_cart_product(
          single_cart_name: _productslist[index]['name'],
          single_cart_location: _productslist[index]['product_location'],
          single_cart_new_price: _productslist[index]['new_price'],
          single_cart_old_price: _productslist[index]['old_price'],
          single_cart_color: _productslist[index]['color'],
          single_cart_size: _productslist[index]['size'],
          single_cart_quantity: _productslist[index]['quantity'],
        );
      },
    );
  }
}

class Single_cart_product extends StatelessWidget {
  final single_cart_name;
  final single_cart_location;
  final single_cart_new_price;
  final single_cart_old_price;
  final single_cart_size;
  final single_cart_color;
  final single_cart_quantity;

  Single_cart_product(
      {this.single_cart_name,
      this.single_cart_location,
      this.single_cart_new_price,
      this.single_cart_old_price,
      this.single_cart_size,
      this.single_cart_color,
      this.single_cart_quantity});
  @override
  Widget build(BuildContext context) {
    return Card(
      child: ListTile(
        leading: Image.asset(
          single_cart_location,
          width: 80.0,
          height: 80.0,
        ),
        title: Text(single_cart_name),
        subtitle: Column(
          children: <Widget>[
            Row(
              children: <Widget>[
                Padding(
                  padding: EdgeInsets.all(0.0),
                  child: Text('Size:'),
                ),
                Padding(
                  padding: EdgeInsets.all(0.0),
                  child: Text(single_cart_size,
                      style: TextStyle(color: Colors.red)),
                ),
                Padding(
                  padding: EdgeInsets.fromLTRB(20.0, 5.0, 5.0, 8.0),
                  child: Text('Color:'),
                ),
                Padding(
                  padding: EdgeInsets.fromLTRB(12.0, 5.0, 5.0, 8.0),
                  child: Text(single_cart_color),
                )
              ],
            ),
            Container(
              alignment: Alignment.topLeft,
              child: Text(
                '\$$single_cart_new_price',
                style: TextStyle(
                    color: Colors.red,
                    fontSize: 17.0,
                    fontWeight: FontWeight.bold),
              ),
            )
          ],
        ),
      ),
    );
  }
}
