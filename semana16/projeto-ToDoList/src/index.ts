// Dependencies
import express, { Express } from "express";

// Connection setup
import { AddressInfo } from "net";

// Routes
import endpoints from './routes/endpoints'

const app: Express = express();
app.use("/", endpoints)

// Server configuration
const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});
