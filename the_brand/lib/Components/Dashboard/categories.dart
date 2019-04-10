import 'package:flutter/material.dart';

class Categories extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Container(
      height: 30.0,
      child: ListView(
        scrollDirection: Axis.horizontal,
        children: <Widget>[
          Category(
            image_caption: 't-shirt',
          ),
          Category(
            image_caption: 'Accessories',
          ),
          Category(
            image_caption: 'Dress',
          ),
          Category(
            image_caption: 'Formal',
          ),
          Category(
            image_caption: 'Informal',
          ),
          Category(
            image_caption: 'Jeans',
          ),
          Category(
            image_caption: 'Shoe',
          ),
        ],
      ),
    );
  }
}

class Category extends StatelessWidget {
  final String image_caption;

  Category({this.image_caption});
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(right: 5.0),
      child: Container(
          padding: EdgeInsets.all(8.0),
          decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(50.0),
              color: Color(0xFFFD7384)),
          child: Text(
            image_caption,
            style: TextStyle(color: Colors.white),
          )),
    );
  }
}
