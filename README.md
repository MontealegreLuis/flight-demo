# Flight application demo

## Installation

To run the application, you will have to install [bower][1] and [composer][2] globally, then run the following commands:

```bash
$ npm install & bower install & composer install
```

You will also need an Apache virtual host similar to the following. 

```apache
<VirtualHost *:80>
  ServerName flight.dev

  DocumentRoot "/path/to/flight-demo/web"

  <Directory "/path/to/flight-demo/web">
    Options Indexes FollowSymLinks MultiViews
    AllowOverride All
    Order allow,deny
    Allow from all
  </Directory>

</VirtualHost>
```

Now you can try the app in `http://flight.dev/order.html`

To run the tests execute:

```bash
$ npm test
```

[1]: http://bower.io/#install-bower
[2]: https://getcomposer.org/doc/00-intro.md#globally
