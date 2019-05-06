import 'package:flutter/material.dart';
import 'package:flutter_redux/flutter_redux.dart';
import 'package:the_brand/models/cart_item.dart';

import 'package:the_brand/Pages/cart/shoppingItem.dart';

class ShoppingList extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return StoreConnector<List<CartItem>, List<CartItem>>(
      converter: (store) => store.state,
      builder: (context, list) => ListView.builder(
            itemBuilder: (context, i) => ShoppingItem(item: list[i]),
            itemCount: list.length,
          ),
    );
  }
}
