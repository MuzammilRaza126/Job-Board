import mongoose, {ConnectOptions} from 'mongoose';
import { MONGO_URI } from '.';

async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.log('Connected to MongoDB!');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1);
  }
}

export default connectDB;
