import { Injectable } from '@angular/core';
import { DatabaseConnectionProvider } from '../database-connection/database-connection';
import { SQLiteObject } from '@ionic-native/sqlite';
import { Estadisticadb } from './estadisticadb';


/*
  Generated class for the EstadisticasDaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EstadisticasDaoProvider {
    db:SQLiteObject;
  constructor(public con: DatabaseConnectionProvider) { }

  ready(): Promise<boolean> {
    if (this.db) {
      return Promise.resolve(true);
    } else {
      return this.con.getConnection().then(db => {
        this.db = db;
        return Promise.resolve(true);
      });
    }
  }

  insert(esta: Estadisticadb) {
    const sql = "INSERT INTO estadisticas (nombre, fecha, letra, nivel) VALUES(?,?,?,?)";
    return this.db.executeSql(sql, [esta.nombre, esta.fecha, esta.letra, esta.nivel]);
  }

  delete(id: number) {
    const sql = "DELETE estadisticas WHERE id = ?";
    return this.db.executeSql(sql, [id]);
  }

  all(): Promise<Estadisticadb[]> {
    const sql = "SELECT *  FROM estadisticas";
    return this.db.executeSql(sql, []).then(results => {
      let data = [];
      for (let i = 0; i < results.rows.length; i++) {
        const esta = results.rows.item(i);
        data.push(esta);
      }
      return Promise.resolve(data);
    });
  }


}
