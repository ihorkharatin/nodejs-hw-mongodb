import { initMongoConnection } from './db/initMongoConnection.js';
import { setupServer } from './server.js';
//first commit
const bootstrap = async () => {
  await initMongoConnection();
  setupServer();
};

bootstrap();
