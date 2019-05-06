import 'package:flutter/material.dart';
import 'package:the_brand/models/cart_item.dart';

class ShoppingItem extends StatefulWidget {
  final CartItem item;
  const ShoppingItem({Key key, this.item}) : super(key: key);
  @override
  State<StatefulWidget> createState() {
    return ShoppingItemState();
  }
}

class ShoppingItemState extends State<ShoppingItem> {
  @override
  Widget build(BuildContext context) {
    return Dismissible(
      key: Key(widget.item.name),
      child: ListTile(
        title: Text(widget.item.name),
        leading: Checkbox(
          value: widget.item.checked,
          onChanged: null,
        ),
        trailing: IconButton(
          icon: Icon(Icons.delete),
          onPressed: null,
        ),
      ),
    );
  }
}
