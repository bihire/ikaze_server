import 'package:flutter/material.dart';
import 'package:flutter_redux/flutter_redux.dart';
import 'package:the_brand/models/cart_item.dart';
import 'package:the_brand/redux/actions.dart';

class CartDialogue extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return CartDialogueState();
  }
}

class CartDialogueState extends State<CartDialogue> {
  String itemName;
  @override
  Widget build(BuildContext context) {
    return StoreConnector<List<CartItem>, OnItemAddedCallback>(
      converter: (store) => (itemName) => store
          .dispatch(AddItemAction(CartItem(name: itemName, checked: false))),
      builder: (context, callback) => AlertDialog(
            title: Text('shopping cart'),
            contentPadding: EdgeInsets.all(16),
            content: Row(
              children: <Widget>[
                Expanded(
                  child: TextField(
                    autofocus: true,
                    decoration: InputDecoration(
                        labelText: "item Cart", hintText: "bro please"),
                    onChanged: (value) {
                      setState(() {
                        itemName = value;
                      });
                    },
                  ),
                ),
              ],
            ),
            actions: <Widget>[
              FlatButton(
                onPressed: () {
                  callback(itemName);
                  Navigator.of(context).pop();
                },
                child: Text('Add'),
              ),
              FlatButton(
                onPressed: () {
                  Navigator.of(context).pop();
                },
                child: Text('Cancel'),
              )
            ],
          ),
    );
  }
}

typedef OnItemAddedCallback = Function(String itemName);
