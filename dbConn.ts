const oracleDb = require("oracledb")
const {user, password, connectString} = require("./dbconfig.ts")

oracleDb.autoCommit = true

oracleDb.getConnection({
    user, password, connectString
  }, (err, conn) => {
    if(err) { 
      throw err
      console.log("Oracle DB 연결 성공!")
    }
  }
)

const doRelease = (conn)  => {
  conn.release( (err) => {
    if(err) { throw err}
  })
}