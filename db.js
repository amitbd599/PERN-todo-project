// const Pool = require("pg").Pool;

// const pool = new Pool({
//   user: "postgres",
//   password: "mmmm",
//   host: "localhost",
//   database: "perntodo",
//   port: 5432,
// });

// module.exports = pool;

// const Pool = require("pg").Pool;

// const pool = new Pool({
//   user: "amitjsco_perntodo_amit",
//   password: "RVuQAZfetJd", // RVuQAZfetJd
//   host: "localhost",
//   database: "amitjsco_perntodo",
//   port: 5432,
// });

// module.exports = pool;

const { Pool } = require("pg");

const pool = new Pool({
  connectionString:
    "postgresql://postgres.xsjoxaesfbjftpvxubuc:Puh49tdLQ6RZz9jQ@aws-0-us-west-1.pooler.supabase.com:6543/postgres",
  ssl: { rejectUnauthorized: false }, // Required for Supabase
});

module.exports = pool;
