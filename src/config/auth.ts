export default {
  jwt: {
    secret: process.env.JWT_SECRET || 'cd07714c7e9d2e152a3d5c94a8ef8189',
    expiresIn: '1d',
  },
};
