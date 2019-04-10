# [Hinge Wordpress](https://github.com/hingeltd/wordpress-starter)

This repository is a boilerplate for setting up a Wordpress project on a Mac or Linux host machine and is based on the following stack:

* [Bedrock](https://roots.io/bedrock/)
* [Lumberjack](https://lumberjack.rareloop.com/)
* [Laravel Mix](https://laravel-mix.com/)
* [Docker](https://www.docker.com/) using docker-compose generated with [PHPDocker.io](https://phpdocker.io/generator)

## Requirements

* Docker engine >= v1.13
* Docker compose >= v1.12
* node >= v10.8.0
* npm >= 6.3.0
* PHP >= 7.1
* Composer - [Install](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx)

## Installation

- Create a new project:
    ```sh
    $ composer create-project hingeltd/wordpress-starter
    ```
- Run the following command to setup docker containers for your project. Unless the .env details are change as per the following step, make sure that ```PORT 80``` and ```PORT 3306``` is not being currently used by any other services 
    ```sh
        $ docker-compose up -d
    ```
- Initial variables are already setup to be used both by Wordpress and docker but you can update environment variables in the `.env` file:
  * Database variables
    * `DB_NAME` - Database name
    * `DB_USER` - Database user
    * `DB_PASSWORD` - Database password
    * `DB_HOST` - Database host
  * `WP_ENV` - Set to environment (`development`, `staging`, `production`)
  * `WP_HOME` - Full URL to WordPress home (http://localhost)
  * `WP_SITEURL` - Full URL to WordPress including subdirectory (http://localhost/wp)
  * `AUTH_KEY`, `SECURE_AUTH_KEY`, `LOGGED_IN_KEY`, `NONCE_KEY`, `AUTH_SALT`, `SECURE_AUTH_SALT`, `LOGGED_IN_SALT`, `NONCE_SALT`
    * Generate with [wp-cli-dotenv-command](https://github.com/aaemnnosttv/wp-cli-dotenv-command)
    * Generate with [Roots WordPress salts generator](https://roots.io/salts.html)
  * `MYSQL_PORT` - Docker Mysql Container port
  * `WEB_PORT` - Docker Web Server (nginx) port if you want to use any other port than port 80. If you use any other port, make sure to change the ```WP_HOME``` from ```http://localhost``` to ```http://localhost:PORT```
- Rebuild the container if the `.env` variables is updated with the following command
  ```sh docker-compose up --build``` 
- Setup Wordpress locally following the standard wordpress installation steps or import an existing database locally to skip this step.
- Access the Wordpress site at [http://localhost](http://localhost) and access WordPress admin at [http://localhost/wp/wp-admin/](http://localhost/wp/wp-admin/)
