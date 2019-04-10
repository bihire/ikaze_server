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
        Padding(
            padding: EdgeInsets.symmetric(horizontal: 15.0),
            child: Container(
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
                  SizedBox(height: 20.0),
                  Row(
                    children: <Widget>[
                      Expanded(
                        child: Padding(
                          padding: const EdgeInsets.only(right: 5.0),
                          child: Container(
                            height: 100.0,
                            decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(5.0),
                                color: Color(0xFFFD7384)),
                            child: Column(
                              mainAxisAlignment: MainAxisAlignment.center,
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
                        child: Container(
                          height: 100.0,
                          child: Column(
                            children: <Widget>[
                              Expanded(
                                  child: Padding(
                                padding: const EdgeInsets.only(
                                    bottom: 2.5, right: 2.5),
                                child: Container(
                                  decoration: BoxDecoration(
                                    color: Colors.red,
                                    borderRadius: BorderRadius.circular(5.0),
                                  ),
                                  child: Row(
                                    mainAxisAlignment: MainAxisAlignment.center,
                                    children: <Widget>[
                                      Icon(
                                        Icons.beenhere,
                                        color: Colors.white,
                                      ),
                                      Text('Classified',
                                          style: TextStyle(color: Colors.white))
                                    ],
                                  ),
                                ),
                              )),
                              Expanded(
                                  child: Padding(
                                padding:
                                    const EdgeInsets.only(top: 2.5, right: 2.5),
                                child: Container(
                                  decoration: BoxDecoration(
                                    color: Color(0xFFFC7B4D),
                                    borderRadius: BorderRadius.circular(5.0),
                                  ),
                                  child: Row(
                                    mainAxisAlignment: MainAxisAlignment.center,
                                    children: <Widget>[
                                      Icon(
                                        Icons.local_offer,
                                        color: Colors.white,
                                      ),
                                      Text('Services',
                                          style: TextStyle(color: Colors.white))
                                    ],
                                  ),
                                ),
                              )),
                            ],
                          ),
                        ),
                      ),
                      Expanded(
                        child: Container(
                          height: 100.0,
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: <Widget>[
                              Expanded(
                                  child: Padding(
                                padding: const EdgeInsets.only(
                                    bottom: 2.5, left: 2.5),
                                child: Container(
                                  decoration: BoxDecoration(
                                    color: Color(0xFF53CEDB),
                                    borderRadius: BorderRadius.circular(5.0),
                                  ),
                                  child: Row(
                                    mainAxisAlignment: MainAxisAlignment.center,
                                    children: <Widget>[
                                      Icon(
                                        Icons.account_balance,
                                        color: Colors.white,
                                      ),
                                      Text('balance',
                                          style: TextStyle(color: Colors.white))
                                    ],
                                  ),
                                ),
                              )),
                              Expanded(
                                  child: Padding(
                                padding:
                                    const EdgeInsets.only(top: 2.5, left: 2.5),
                                child: Container(
                                  decoration: BoxDecoration(
                                    color: Color(0xFFF1B068),
                                    borderRadius: BorderRadius.circular(5.0),
                                  ),
                                  child: Row(
                                    mainAxisAlignment: MainAxisAlignment.center,
                                    children: <Widget>[
                                      Icon(
                                        Icons.art_track,
                                        color: Colors.white,
                                      ),
                                      Text('Jobs',
                                          style: TextStyle(color: Colors.white))
                                    ],
                                  ),
                                ),
                              ))
                            ],
                          ),
                        ),
                      ),
                    ],
                  ),
                  SizedBox(height: 10.0),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: <Widget>[
                      Text('Popular Trending',
                          style: TextStyle(fontSize: 18.0)),
                      Text('View all',
                          style: TextStyle(color: Color(0xFF2BD093))),
                    ],
                  ),
                  SizedBox(height: 10.0),
                  HorizontalView(),
                  SizedBox(height: 10.0),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: <Widget>[
                      Text('Categories', style: TextStyle(fontSize: 18.0)),
                      Text('View all',
                          style: TextStyle(color: Color(0xFF2BD093))),
                    ],
                  ),
                  SizedBox(height: 10.0),
                  Categories(),
                  Products()
                ],
              ),
            )),
      ],
    );
  }
}
