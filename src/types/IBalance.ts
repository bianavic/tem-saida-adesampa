import { Document } from 'mongoose';

export default interface Ibalance extends Document {
    phoneNumber: string;
    data: string;
    type: string;
};
