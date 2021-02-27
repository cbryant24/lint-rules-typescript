import mongoose from 'mongoose';

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const mongooseConnection = async () => {
  const connect = await mongoose.connect('mongodb://localhost/my_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

  return connect;
};

const BlogPost = new Schema({
  author: ObjectId,
  title: String,
  body: String,
  date: Date,
});

export { mongooseConnection, BlogPost };
