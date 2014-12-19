# Flight application demo

This is an application demo used for these blog posts [1][5], [2][6] and [3][7].

## Installation

To run the application, you will have to install [npm][3], [bower][1] and [composer][2]. The database tests use
[SQLite][4]. If you have everything installed, run the following command:

```bash
$ make setup
```

You will also need an Apache virtual host.

```apache
<VirtualHost *:80>
  ServerName shoppingcart.dev

  DocumentRoot "/path/to/flight-demo/web"

  <Directory "/path/to/flight-demo/web">
    Options Indexes FollowSymLinks MultiViews
    AllowOverride All
    Order allow,deny
    Allow from all
  </Directory>

</VirtualHost>
```

Now you can try the app in `http://shoppingcart.dev/order`

To run the tests execute:

```bash
$ php bin/phing tests:all
```

[1]: http://bower.io/#install-bower
[2]: https://getcomposer.org/doc/00-intro.md#globally
[3]: http://blog.npmjs.org/post/85484771375/how-to-install-npm
[4]: http://www.sqlite.org/download.html
[5]: http://www.montealegreluis.com/blog/2014/11/23/aplicaciones-desacopladas-con-flight-js/
[6]: http://www.montealegreluis.com/blog/2014/12/04/testing-de-componentes-flight/
[7]: http://www.montealegreluis.com/blog/2014/12/15/tests-de-aceptacion-con-codeception/
