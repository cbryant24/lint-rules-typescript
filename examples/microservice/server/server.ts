import express from 'express';
import middleware from './level-one/middleware';
import { mongooseConnection, BlogPost } from './model';

const app = express();
const port = 3000;

const val = 9;

const func = (vals: string) => {
  return null;
};

console.log('IM MIDDLE', middleware);
console.log('IM MONGOOSE', mongooseConnection);
console.log('IM BLOG', BlogPost);
console.log('IM THE FUNC', func);
// console.log('IM THE VAL', val);

app.listen(port, () => console.log(`App is listening on ${3000}`));
