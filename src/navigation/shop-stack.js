import {shopStack} from 'src/config/navigator';

import {createStackNavigator} from 'react-navigation-stack';

import CategoryScreen from 'src/screens/shop/category';
import ProductsScreen from 'src/screens/shop/products';
import ProductScreen from 'src/screens/shop/product';

export default createStackNavigator(
  {
    [shopStack.categories]: CategoryScreen,
    [shopStack.products]: ProductsScreen,
    [shopStack.product]: ProductScreen,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);
