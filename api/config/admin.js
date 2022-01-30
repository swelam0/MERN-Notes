module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '99ced8627cfa16a59cc628813c0c02e4'),
  },
});
