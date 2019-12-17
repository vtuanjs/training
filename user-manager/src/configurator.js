const fs = require('fs');
const path = require('path');

const defaultConfigPath = path.join(__dirname, '../configs/default.json');
const customConfigPath = path.join(__dirname, '../configs/config.json');

exports.load = () => {
  let appConfig = {};

  if (fs.existsSync(defaultConfigPath)) {
    appConfig = JSON.parse(fs.readFileSync(defaultConfigPath, { encoding: 'utf-8' }));
  }

  if (process.env.MONGODB_USER_NAME){
    let customConfig = {
      mongodb_user_name : process.env.MONGODB_USER_NAME,
      mongodb_password : process.env.MONGODB_PASSWORD,
      mongodb_connection_string : `mongodb://user_mongo:27017/dbtest`
    }

    appConfig = Object.assign(appConfig, customConfig);
  }

  if (fs.existsSync(customConfigPath)) {
    let customConfig = JSON.parse(fs.readFileSync(customConfigPath, { encoding: 'utf-8' }));
    appConfig = Object.assign(appConfig, customConfig);
  }

  /**
   *
   * # address
   * type: string
   * default: '0.0.0.0'
   *
   * # port
   * type: number
   * default: 3000
   *
   * # debug
   * type: boolean
   * default: false
   *
   * # mongodb_connection_string
   * type: string
   * ex: mmongodb://localhost/db
   *
   * # mongodb_user_name
   * type: string
   *
   * # mongodb_password
   * type: string
   */
  process.appConfig = appConfig;
}