import 'package:flutter/material.dart';

class HorizontalView extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      height: 100.0,
      child: ListView(
        scrollDirection: Axis.horizontal,
        children: <Widget>[
          Trend(
            image_location: 'assets/images/cats/tshirt.png',
            image_caption: 't-shirt',
          ),
          Trend(
            image_location: 'assets/images/cats/accessories.png',
            image_caption: 'Accessories',
          ),
          Trend(
            image_location: 'assets/images/cats/dress.png',
            image_caption: 'Dress',
          ),
          Trend(
            image_location: 'assets/images/cats/formal.png',
            image_caption: 'Formal',
          ),
          Trend(
            image_location: 'assets/images/cats/informal.png',
            image_caption: 'Informal',
          ),
          Trend(
            image_location: 'assets/images/cats/jeans.png',
            image_caption: 'Jeans',
          ),
          Trend(
            image_location: 'assets/images/cats/shoe.png',
            image_caption: 'Shoe',
          ),
        ],
      ),
    );
  }
}

class Trend extends StatelessWidget {
  final String image_location;
  final String image_caption;

  Trend({this.image_location, this.image_caption});
  @override
  Widget build(BuildContext context) {
    return Padding(
        padding: const EdgeInsets.only(top: 5.0),
        child: InkWell(
          onTap: () {},
          child: Container(
            width: 100.0,
            child: ListTile(
                title: Image.asset(
                  image_location,
                  width: 80.0,
                  height: 60.0,
                ),
                subtitle: Text(
                  image_caption,
                  textAlign: TextAlign.center,
                )),
          ),
        ));
  }
}
