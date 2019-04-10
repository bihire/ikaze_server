import 'package:flutter/material.dart';

class Shops extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return ShopState();
  }
}

class ShopState extends State<Shops> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
      title: Text('Shops'),
      backgroundColor: Colors.red,
    ));
  }
}
