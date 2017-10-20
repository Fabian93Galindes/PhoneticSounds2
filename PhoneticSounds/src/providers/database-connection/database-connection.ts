import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the DatabaseConnectionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseConnectionProvider {

  db: SQLiteObject;
  constructor() { }

  getConnection(): Promise<SQLiteObject> {
    
    if(this.db){
      return Promise.resolve(this.db);
    }else{
      const sqlite = new SQLite();
      return sqlite.create({
        name: 'jugofone.db',
        location: 'default'
      }).then(db => {
        this.db = db;
        return this.init().then(res=>{
          return Promise.resolve(db);
        });        
      })
    }
  }

  init():Promise<any> {
    const sql = "CREATE TABLE IF NOT EXISTS estadisticas ("
      + "id INTEGER PRIMARY KEY AUTOINCREMENT"
      + ", nombre VARCHAR"
      + ", fecha VARCHAR"
      + ", letra VARCHAR"
      + ", nivel INTEGER"
      + ")";
    return this.db.executeSql(sql,[]);
  
  }

}
