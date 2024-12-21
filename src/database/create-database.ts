import { Client } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

async function createDatabse() {
  const client = new Client({
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT!,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'postgres',
  });

  try {
    await client.connect();
    await client.query('CREATE DATABASE "nrmDB";');
    console.log('Database nrmDB created successfully');
  } catch (error) {
    console.log('Error creating database', error);
  } finally {
    await client.end();
  }
}

createDatabse();
