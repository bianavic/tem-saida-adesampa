import mongoose from 'mongoose';
import Ibalance from '../types/IBalance';

const balanceSchema = new mongoose.Schema({
  phoneNumber: { type: String, index: true, unique: true },
  data: JSON,
  type: String,
});

const balance = mongoose.model<Ibalance>('balances', balanceSchema);

export { balanceSchema, balance };
