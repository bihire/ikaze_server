import 'package:flutter/material.dart';

import '../Components/ItemDetails/Cart_details.dart';

class Cart extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return CartState();
  }
}

class CartState extends State<Cart> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.red,
        title: Text('Cart'),
        actions: <Widget>[
          IconButton(
            icon: Icon(
              Icons.search,
              color: Colors.white,
            ),
            onPressed: () {},
          ),
        ],
      ),
      body: Cart_details(),
      bottomNavigationBar: Container(
        color: Colors.white,
        child: Row(
          children: <Widget>[
            Expanded(
              child: ListTile(
                  title: Row(
                children: <Widget>[
                  Expanded(
                    child: Text('Total:'),
                  ),
                  Expanded(
                    child: Text('\$280'),
                  )
                ],
              )),
            ),
            Expanded(
              child: MaterialButton(
                onPressed: () {},
                color: Colors.red,
                child: Text('Buy Now', style: TextStyle(color: Colors.white)),
              ),
            )
          ],
        ),
      ),
    );
  }
}
