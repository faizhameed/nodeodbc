const odbc = require("odbc");

async function queryTally() {
  try {
    const connection = await odbc.connect(`DSN=TallyODBC64_9000`);
    let data = await connection.query("SHOW DATABASES");
    console.log(data);
    data = await connection.query("SELECT Name, Address FROM Company");
    console.log(data);
  } catch (error) {
    console.log("Handle error", error);
  }
}

queryTally();
