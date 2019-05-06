// import 'package:flutter/material.dart';

// import '../Components/ItemDetails/Cart_details.dart';

// class Cart extends StatefulWidget {
//   @override
//   State<StatefulWidget> createState() {
//     return CartState();
//   }
// }

// class CartState extends State<Cart> {
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(
//         backgroundColor: Colors.red,
//         title: Text('Cart'),
//         actions: <Widget>[
//           IconButton(
//             icon: Icon(
//               Icons.search,
//               color: Colors.white,
//             ),
//             onPressed: () {},
//           ),
//         ],
//       ),
//       body: Cart_details(),
//       bottomNavigationBar: Container(
//         color: Colors.white,
//         child: Row(
//           children: <Widget>[
//             Expanded(
//               child: ListTile(
//                   title: Row(
//                 children: <Widget>[
//                   Expanded(
//                     child: Text('Total:'),
//                   ),
//                   Expanded(
//                     child: Text('\$280'),
//                   )
//                 ],
//               )),
//             ),
//             Expanded(
//               child: MaterialButton(
//                 onPressed: () {},
//                 color: Colors.red,
//                 child: Text('Buy Now', style: TextStyle(color: Colors.white)),
//               ),
//             )
//           ],
//         ),
//       ),
//     );
//   }
// }

// appBar: AppBar(
//         backgroundColor: Colors.transparent,
//         elevation: 0.0,
//         iconTheme: new IconThemeData(color: Color(0xFF18D191)),
//         actions: <Widget>[
//           IconButton(
//             icon: Icon(
//               Icons.search,
//               color: Colors.red,
//             ),
//             onPressed: () {},
//           ),
//           IconButton(
//             icon: Icon(
//               Icons.notifications_active,
//               color: Colors.red,
//             ),
//             onPressed: () {},
//           )
//         ],
//       ),

import 'package:flutter/material.dart';
import 'package:redux/redux.dart';
import 'package:flutter_redux/flutter_redux.dart';
import 'package:the_brand/redux/reducers.dart';
import 'package:the_brand/models/cart_item.dart';

import 'package:the_brand/Pages/cart/shoppingCart.dart';

// class Cart extends StatefulWidget {
//   final store = Store<List<CartItem>>(cartItemsReducer, initialState: List());
//   @override
//   State<StatefulWidget> createState() {
//     return CartState(store: store);
//   }
// }

// class CartState extends State<Cart> {
//   final Store<List<CartItem>> store;
//   CartState({Key key, this.store}) : super(key: key);
//   @override
//   Widget build(BuildContext context) {
//     return StoreProvider(
//       store: store,
//       child: MaterialApp(
//         theme: ThemeData.dark(),
//         debugShowCheckedModeBanner: true,
//         home: ShoppingCart(store: store),
//       ),
//     );
//   }
// }

class Cart extends StatelessWidget {
  final Store<List<CartItem>> store;
  Cart({Key key, this.store}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return StoreProvider(
      store: store,
      child: MaterialApp(
        theme: ThemeData.dark(),
        debugShowCheckedModeBanner: true,
        home: ShoppingCart(store: store),
      ),
    );
  }
}
