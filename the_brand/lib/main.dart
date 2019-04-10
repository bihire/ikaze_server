import 'package:flutter/material.dart';

import './Components/Dashboard/MainContent.dart';
import './Pages/Cart.dart';
import './Pages/Shops.dart';
import './Pages/Account.dart';

void main() {
  runApp(MaterialApp(title: 'The Brand', home: HomePage()));
}

class HomePage extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return HomePageState();
  }
}

class HomePageState extends State<HomePage> {
  int _currentTab = 0;

  MainContent one;
  Shops two;
  Cart three;
  Account four;

  List<Widget> pages;

  Widget currentPage;

  @override
  void initState() {
    one = MainContent();
    two = Shops();
    three = Cart();
    four = Account();

    pages = [one, two, three, four];

    currentPage = one;

    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      bottomNavigationBar: BottomNavigationBar(
        type: BottomNavigationBarType.fixed,
        fixedColor: Color(0xFF29D091),
        currentIndex: _currentTab,
        onTap: (index) {
          setState(() {
            _currentTab = index;
            currentPage = pages[index];
          });
        },
        items: <BottomNavigationBarItem>[
          BottomNavigationBarItem(title: Text('home'), icon: Icon(Icons.home)),
          BottomNavigationBarItem(
              // add a brand option too in the shops options
              // near by shops(sort by city then province then country)
              title: Text('shops'),
              icon: Icon(Icons.shop_two)),
          BottomNavigationBarItem(
              title: Text('cart'), icon: Icon(Icons.shopping_cart)),
          BottomNavigationBarItem(
              title: Text('account'), icon: Icon(Icons.person))
        ],
      ),
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0.0,
        iconTheme: new IconThemeData(color: Color(0xFF18D191)),
        actions: <Widget>[
          IconButton(
            icon: Icon(
              Icons.search,
              color: Colors.red,
            ),
            onPressed: () {},
          ),
          IconButton(
            icon: Icon(
              Icons.notifications_active,
              color: Colors.red,
            ),
            onPressed: () {},
          )
        ],
      ),
      body: currentPage,
    );
  }
}
