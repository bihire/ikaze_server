import 'package:flutter/material.dart';

import './horizontalView.dart';
import './categories.dart';
import '../ItemDetails/Products.dart';

class MainContent extends StatefulWidget {
  MainContent({
    Key key,
  }) : super(key: key);
  @override
  MainContentState createState() {
    return new MainContentState();
  }
}

class MainContentState extends State<MainContent> {
  @override
  Widget build(BuildContext context) {
    return ListView(
      shrinkWrap: true,
      physics: ClampingScrollPhysics(),
      children: <Widget>[
        Container(
          child: Column(
            children: <Widget>[
              Container(
                child: Column(
                  children: <Widget>[
                    Padding(
                      padding: EdgeInsets.symmetric(
                          vertical: 20.0, horizontal: 10.0),
                      child: Container(
                        height: 140.0,
                        decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(10.0),
                            gradient: new LinearGradient(
                              stops: [0.98, 0.02],
                              colors: [Colors.white, Colors.red],
                            ),
                            border: Border.all(color: Colors.grey),
                            color: Color(0xFFFD7384)),
                        child: Column(
                          children: <Widget>[
                            Row(
                              children: <Widget>[
                                Expanded(
                                  child: Container(
                                      decoration: BoxDecoration(
                                          border: Border(
                                              bottom: BorderSide(
                                                  color: Colors.grey))),
                                      height: 50,
                                      // top cards
                                      child: Padding(
                                        padding: const EdgeInsets.all(3.0),
                                        child: Row(
                                          children: <Widget>[
                                            Expanded(
                                                child: Center(
                                              child: Container(
                                                child: Text(
                                                  'Ibikoresho',
                                                  style:
                                                      TextStyle(fontSize: 16.0),
                                                ),
                                              ),
                                            )),
                                            Center(
                                              heightFactor: 40.0,
                                              child: Container(
                                                child: Image.asset(
                                                    'assets/images/firstcard/HOME-APPLIANCES-2.PNG'),
                                              ),
                                            ),
                                          ],
                                        ),
                                      )),
                                ),
                                Expanded(
                                  child: Container(
                                    decoration: BoxDecoration(
                                        border: Border(
                                      left: BorderSide(color: Colors.grey),
                                      right: BorderSide(color: Colors.grey),
                                    )),
                                    height: 50,
                                    child: Padding(
                                      padding: const EdgeInsets.all(3.0),
                                      child: Row(
                                        children: <Widget>[
                                          Expanded(
                                              child: Center(
                                            child: Container(
                                              child: Text(
                                                'Ibiribwa',
                                                style:
                                                    TextStyle(fontSize: 16.0),
                                              ),
                                            ),
                                          )),
                                          Center(
                                            heightFactor: 40.0,
                                            child: Container(
                                              child: Image.asset(
                                                  'assets/images/firstcard/Food-PNG-High-Quality-Image.png'),
                                            ),
                                          ),
                                        ],
                                      ),
                                    ),
                                  ),
                                ),
                              ],
                            ),
                            Row(
                              children: <Widget>[
                                Expanded(
                                  child: Container(
                                    decoration: BoxDecoration(
                                        border: Border(
                                            bottom: BorderSide(
                                                color: Colors.grey))),
                                    height: 50,
                                    child: Padding(
                                      padding: const EdgeInsets.all(3.0),
                                      child: Row(
                                        children: <Widget>[
                                          Expanded(
                                              child: Center(
                                            child: Container(
                                              child: Text(
                                                'Inzu',
                                                style:
                                                    TextStyle(fontSize: 16.0),
                                              ),
                                            ),
                                          )),
                                          Center(
                                            heightFactor: 40.0,
                                            child: Container(
                                              child: Image.asset(
                                                  'assets/images/firstcard/HOME-APPLIANCES-2.PNG'),
                                            ),
                                          ),
                                        ],
                                      ),
                                    ),
                                  ),
                                ),
                                Expanded(
                                  child: Container(
                                    decoration: BoxDecoration(
                                        border: Border.all(color: Colors.grey)),
                                    height: 50,
                                    child: Padding(
                                      padding: const EdgeInsets.all(3.0),
                                      child: Row(
                                        children: <Widget>[
                                          Expanded(
                                              child: Center(
                                            child: Container(
                                              child: Text(
                                                'service',
                                                style:
                                                    TextStyle(fontSize: 16.0),
                                              ),
                                            ),
                                          )),
                                          Center(
                                            heightFactor: 40.0,
                                            child: Container(
                                              child: Image.asset(
                                                  'assets/images/firstcard/services-png-7.png'),
                                            ),
                                          ),
                                        ],
                                      ),
                                    ),
                                  ),
                                ),
                              ],
                            ),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              //  second table
              Container(
                child: Column(
                  children: <Widget>[
                    Padding(
                      padding: EdgeInsets.symmetric(
                          vertical: 20.0, horizontal: 10.0),
                      child: Container(
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(10.0),
                          border: Border.all(color: Colors.grey),
                          // color: Color(0xFFFD7384)
                        ),
                        child: Column(
                          children: <Widget>[
                            Padding(
                              padding: EdgeInsets.symmetric(
                                  horizontal: 10.0, vertical: 15.0),
                              child: Column(
                                children: <Widget>[
                                  Row(
                                    children: <Widget>[
                                      Text(
                                        'Explore',
                                        style: TextStyle(
                                          fontSize: 30.0,
                                          color: Colors.black,
                                        ),
                                      )
                                    ],
                                  ),
                                  SizedBox(height: 10.0),
                                  Row(
                                    children: <Widget>[
                                      Expanded(
                                        child: Container(
                                          height: 60.0,
                                          decoration: BoxDecoration(
                                              borderRadius:
                                                  BorderRadius.circular(5.0),
                                              color: Color(0xFFFD7384)),
                                          child: Column(
                                            mainAxisAlignment:
                                                MainAxisAlignment.center,
                                            children: <Widget>[
                                              Icon(
                                                Icons.drive_eta,
                                                color: Colors.white,
                                              )
                                            ],
                                          ),
                                        ),
                                      ),
                                    ],
                                  ),
                                  SizedBox(height: 10.0),
                                  Row(
                                    children: <Widget>[
                                      Expanded(
                                        child: Padding(
                                          padding:
                                              const EdgeInsets.only(right: 2.5),
                                          child: Container(
                                            height: 40.0,
                                            decoration: BoxDecoration(
                                                borderRadius:
                                                    BorderRadius.circular(5.0),
                                                color: Color(0xFFFD7384)),
                                            child: Column(
                                              mainAxisAlignment:
                                                  MainAxisAlignment.center,
                                              children: <Widget>[
                                                Icon(
                                                  Icons.drive_eta,
                                                  color: Colors.white,
                                                )
                                              ],
                                            ),
                                          ),
                                        ),
                                      ),
                                      Expanded(
                                        child: Padding(
                                          padding:
                                              const EdgeInsets.only(left: 2.5),
                                          child: Container(
                                            height: 40.0,
                                            decoration: BoxDecoration(
                                                borderRadius:
                                                    BorderRadius.circular(5.0),
                                                color: Color(0xFFFD7384)),
                                            child: Column(
                                              mainAxisAlignment:
                                                  MainAxisAlignment.center,
                                              children: <Widget>[
                                                Icon(
                                                  Icons.drive_eta,
                                                  color: Colors.white,
                                                )
                                              ],
                                            ),
                                          ),
                                        ),
                                      )
                                    ],
                                  ),
                                  SizedBox(height: 10.0),
                                  Row(
                                    children: <Widget>[
                                      Expanded(
                                        child: Container(
                                          height: 100.0,
                                          decoration: BoxDecoration(
                                              borderRadius:
                                                  BorderRadius.circular(5.0),
                                              color: Color(0xFFFD7384)),
                                          child: Column(
                                            mainAxisAlignment:
                                                MainAxisAlignment.center,
                                            children: <Widget>[
                                              Icon(
                                                Icons.drive_eta,
                                                color: Colors.white,
                                              )
                                            ],
                                          ),
                                        ),
                                      ),
                                    ],
                                  ),
                                ],
                              ),
                            )
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ),

              SizedBox(height: 10.0),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 10.0),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: <Widget>[
                    Text('Popular Trending', style: TextStyle(fontSize: 18.0)),
                    Text('View all',
                        style: TextStyle(color: Color(0xFF2BD093))),
                  ],
                ),
              ),
              SizedBox(height: 10.0),
              HorizontalView(),
              SizedBox(height: 10.0),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 10.0),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: <Widget>[
                    Text('Categories', style: TextStyle(fontSize: 18.0)),
                    Text('View all',
                        style: TextStyle(color: Color(0xFF2BD093))),
                  ],
                ),
              ),
              SizedBox(height: 10.0),
              Categories(),
              Products()
            ],
          ),
        ),
      ],
    );
  }
}
