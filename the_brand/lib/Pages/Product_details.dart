import 'package:flutter/material.dart';

class ProductDetails extends StatefulWidget {
  final product_detail_name;
  final product_detail_location;
  final product_detail_new_price;
  final product_detail_old_price;

  ProductDetails(
      {this.product_detail_name,
      this.product_detail_location,
      this.product_detail_new_price,
      this.product_detail_old_price});
  @override
  State<StatefulWidget> createState() {
    return ProductDetailsState();
  }
}

class ProductDetailsState extends State<ProductDetails> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.red,
          title: Text(
            widget.product_detail_name,
          ),
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
        body: ListView(children: <Widget>[
          // ============ Top Description ==========
          Container(
            color: Colors.white,
            child: Padding(
              padding: const EdgeInsets.all(10.0),
              child: Column(
                children: <Widget>[
                  Row(
                    children: <Widget>[
                      Padding(
                        padding: const EdgeInsets.only(left: 10.0),
                        child: Text('- data'),
                      ),
                    ],
                  ),
                  Row(
                    children: <Widget>[
                      Text(
                        '${widget.product_detail_name}',
                        style: TextStyle(
                          fontWeight: FontWeight.w600,
                          fontSize: 20.0,
                          color: Colors.red,
                        ),
                      ),
                    ],
                  ),
                  Divider(
                    color: Colors.grey,
                  ),
                  Row(
                    children: <Widget>[
                      Text(
                        'Product Brand',
                        style: TextStyle(color: Colors.grey),
                      ),
                      Padding(
                        padding: EdgeInsets.only(left: 10.0),
                        child: Text('Brand bro'),
                      )
                    ],
                  ),
                  Row(
                    children: <Widget>[
                      Text(
                        'Product Condition',
                        style: TextStyle(color: Colors.grey),
                      ),
                      Padding(
                        padding: EdgeInsets.only(left: 10.0),
                        child: Text('New'),
                      )
                    ],
                  ),
                  Row(
                    children: <Widget>[
                      Text(
                        'Available sizes',
                        style: TextStyle(color: Colors.grey),
                      ),
                      Padding(
                        padding: EdgeInsets.only(left: 10.0),
                        child: Text(widget.product_detail_name),
                      )
                    ],
                  ),
                ],
              ),
            ),
          ),
          SizedBox(height: 10.0),
          Container(
            height: 300.0,
            child: GridTile(
              child: Container(
                color: Colors.white70,
                child: Image.asset(widget.product_detail_location),
              ),
              footer: Container(
                color: Colors.white70,
                child: ListTile(
                    title: Row(
                  children: <Widget>[
                    Expanded(
                      child: Text('\$${widget.product_detail_old_price}',
                          style: TextStyle(
                              fontWeight: FontWeight.w600,
                              color: Colors.grey,
                              decoration: TextDecoration.lineThrough)),
                    ),
                    Expanded(
                      child: Text(
                        '\$${widget.product_detail_new_price}',
                        style: TextStyle(
                          fontWeight: FontWeight.w800,
                          color: Colors.red,
                        ),
                      ),
                    ),
                  ],
                )),
              ),
            ),
          ),
          Row(
            children: <Widget>[
              // ========== First Button ==============
              Expanded(
                child: MaterialButton(
                  onPressed: () {
                    showDialog(
                        context: context,
                        builder: (context) {
                          return AlertDialog(
                            title: Text('Size'),
                            content: Text('Choose size'),
                            actions: <Widget>[
                              MaterialButton(
                                onPressed: () {
                                  Navigator.of(context).pop(context);
                                },
                                child: Text('close'),
                              )
                            ],
                          );
                        });
                  },
                  color: Colors.white,
                  textColor: Colors.grey,
                  elevation: 0.2,
                  child: Row(
                    children: <Widget>[
                      Expanded(
                        child: Text('Size'),
                      ),
                      Expanded(child: Icon(Icons.arrow_drop_down)),
                    ],
                  ),
                ),
              ),

              // ========== Second Button==============
              Expanded(
                child: MaterialButton(
                  onPressed: () {},
                  color: Colors.white,
                  textColor: Colors.grey,
                  elevation: 0.2,
                  child: Row(
                    children: <Widget>[
                      Expanded(
                        child: Text('Colors'),
                      ),
                      Expanded(child: Icon(Icons.arrow_drop_down)),
                    ],
                  ),
                ),
              ),

              // ========== third Button==============
              Expanded(
                child: MaterialButton(
                  onPressed: () {},
                  color: Colors.white,
                  textColor: Colors.grey,
                  elevation: 0.2,
                  child: Row(
                    children: <Widget>[
                      Expanded(
                        child: Text('Qty'),
                      ),
                      Expanded(child: Icon(Icons.arrow_drop_down)),
                    ],
                  ),
                ),
              )
            ],
          ),
          Row(
            children: <Widget>[
              Expanded(
                child: MaterialButton(
                  onPressed: () {},
                  color: Colors.red,
                  textColor: Colors.white,
                  child: Text('Add to Cart'),
                ),
              ),
              IconButton(
                icon: Icon(
                  Icons.add_shopping_cart,
                  color: Colors.red,
                ),
                onPressed: () {},
              ),
              IconButton(
                icon: Icon(
                  Icons.favorite_border,
                  color: Colors.red,
                ),
                onPressed: () {},
              ),
            ],
          ),
          Divider(),
          ListTile(
            title: Text('Product details'),
            subtitle: Text(
                'She will provide guidance and technical inputs to the support the effective use and implementation of gender-sensitive SBCC strategies, activities, media and materials that promote priority behaviors and social norms. She will provide state-of-the-art technical inputs into the design, pretesting, development, production and dissemination of materials, and support related training activities. This position may be based in Kigali or in a regional office with frequent travel to districts for supervision and coordination.  '),
          ),
        ]));
  }
}
