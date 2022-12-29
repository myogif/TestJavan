# ITAT-RFID 


### Prerequisites

* npm
  ```sh
  $ npm install npm@latest -g
  ```
* node js v14
  ```sh 
  $ curl -sL https://deb.nodesource.com/setup_14.x -o /tmp/nodesource_setup.sh
  ```
  
  ```sh
  $ sudo apt install nodejs -y
  ```

* mysql 
  ```sh
  $ sudo apt install mysql-server
  ```

## Installation

### Backend 
1. Clone the repo
   ```sh
   git clone https://github.com/myogif/TestJavan
   ```
2. Install NPM packages
   ```sh
   cd TestJavan
   npm install
   ```
3. Config `.env`
   ```js
   PORT='ENTER YOUR PORT',
 
   DB_USERNAME= 'ENTER YOUR DATABASE USERNAME',
   DB_PASSWORD= 'ENTER YOUR DATABASE PASSWORD',
   DB_HOST= 'ENTER YOUR DATABASE HOSTNAME',
   DB_NAME= 'ENTER YOUR DATABASE NAME'
 
   ```
4. Run Migragration your Database
   ```sh
   $ npx sequelize db:migrate
   ```
5. Run Seeder 
   ```sh
   $ npx sequelize db:seed:all
   ```
6. Runing APP 
   ```sh 
   npm run start
   ```