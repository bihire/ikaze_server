import 'package:the_brand/models/cart_item.dart';

class AddItemAction {
  final CartItem item;
  AddItemAction(this.item);
}

class ToggleItemAction {
  final CartItem item;
  ToggleItemAction(this.item);
}

class DeleteItemAction {
  final CartItem item;
  DeleteItemAction(this.item);
}
