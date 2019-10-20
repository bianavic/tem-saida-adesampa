import mongoose from 'mongoose';

const userStringPath = process.env.MONGO_USER
  ? `${process.env.MONGO_USER}:${process.env.MONGO_PASS}@`
  : '';

const connection = `mongodb://${userStringPath}${process.env.MONGO_HOST || 'localhost'}:
    ${process.env.MONGO_PORT || '27017'}/${process.env.MONGO_BASE || 'adesampa'}`;

const startMongo = (): Promise<void> => mongoose.connect(connection, { useNewUrlParser: true })
  .then(() => {
    console.log(`MongoDb Connected ${process.env.MONGO_PORT}`);
  }).catch((err) => console.error(err));


export default startMongo;
