const express = require('express')
const app = express()

const server = app.listen(3000, () => {
  console.log('server start, port 3000')
  console.log('서버 시작입니다.')
})

const oracleDb = require("oracledb")
const {user, password, connectString} = require("./dbconfig.ts")

app.get('/', function(request, response) {
  getSelect(request, response)
})

async function getSelect(request, response) {
  let connection
  console.log('test')
  try {
      connection = await oracleDb.getConnection({user, password, connectString})

      const result = await connection.execute(
          `SELECT * 
          FROM SHINBOM.MEMBER
          `
      )

      console.log('result :: ', result)
      response.send(result.rows)
  } catch (error) {
      console.log(error)
  } finally {
      if (connection) {
          try {
              await connection.close()
          } catch (error) {
              console.log(error)
          }
      }
  }
}