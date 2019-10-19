import mongoose from 'mongoose';

const userStringPath = process.env.MONGO_USER
  ? `${process.env.MONGO_USER}:${process.env.MONGO_PASS}@`
  : '';

const connection = `mongodb://${userStringPath}${process.env.MONGO_HOST}:
    ${process.env.MONGO_PORT}/${process.env.MONGO_BASE}`;


const startMongo = ():Promise<void> => mongoose.connect(connection, { useNewUrlParser: true })
  .then(() => {
    console.log(`MongoDb Connected ${process.env.MONGO_PORT}`);
  }).catch((err) => console.error(err));


export default startMongo;
