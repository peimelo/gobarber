import * as dotenv from 'dotenv';

if (process.env.NODE_ENV === 'development') {
  dotenv.config();
}

export default {
  jwt: {
    secret: process.env.JWT_SECRET || 'secret',
    expiresIn: '1d',
  },
};
