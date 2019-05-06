import 'package:flutter/material.dart';
import 'package:redux/redux.dart';
import 'package:the_brand/models/cart_item.dart';

import 'package:the_brand/Pages/cart/shoppingList.dart';
import 'package:the_brand/Pages/cart/add_cart_dialogue.dart';

class ShoppingCart extends StatelessWidget {
  final Store<List<CartItem>> store;
  ShoppingCart({Key key, this.store}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('shopping cart'),
      ),
      body: ShoppingList(),
      floatingActionButton: FloatingActionButton(
        onPressed: () => addItemDialogue(context),
        child: Icon(Icons.add),
      ),
    );
  }
}

addItemDialogue(BuildContext context) {
  showDialog(context: context, builder: (context) => CartDialogue());
}
