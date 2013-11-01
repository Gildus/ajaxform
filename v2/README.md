ajaxform (version 2)
========

Demo de Formulario con Ajax.

### Instalación


- Crea un base de datos (con el nombre que deseas) y luego ejecuta dentro de esa base datos el archivo database.sql que es el siguiente contenido: 

```sql
CREATE TABLE `tabla` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `comentario` longtext COLLATE utf8_unicode_ci NOT NULL,
  `piepagina` longtext COLLATE utf8_unicode_ci NOT NULL,
  `logotipo` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `imagen` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
```

- Luego cambia los parametros de coneccion a tu base de datos que esta en el archivo config_db.php:

```php 
define('__SERVIDOR','localhost');
define('__PUERTO','3306');
define('__USUARIO','usuario');
define('__PASSWORD','password');
define('__BASEDATOS','basedatos');
```

- Si estan en linux deben de dar permisos de escritura al directorio upload en forma recursiva.

### Localmente

Y luego ejecuta la aplicacion, y si es posible lo puedes hace con PHP 5.4 :

php -S localhost:8080


### Demo

El resultado lo puedes ver [aquí](http://gildusnetworks.com/demo/)

