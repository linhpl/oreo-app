import React from 'react';
import {Linking} from 'react-native';
import NavigationServices from './navigation';
import {blogStack, shopStack} from 'src/config/navigator';

function action(data) {
  if (data && data.type && data.id) {
    const {type, id} = data;
    switch (type) {
      case 'link-extension':
        return Linking.openURL(id);
      case 'link-webview':
        return NavigationServices.navigate(mainStack.linking_webview, {url: id});
      default:
        const router =
          type === 'category'
            ? shopStack.products
            : type === 'blog'
            ? blogStack.blog_detail
            : type === 'product'
            ? shopStack.product
            : null;
        if (router) {
          return NavigationServices.navigate(router, {id, type});
        }
        return 0;
    }
  }
}
export default action;
