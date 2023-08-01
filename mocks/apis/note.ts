import { rest } from 'msw';

const handlers = [
  rest.post('/note/withImage', (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];

export default handlers;
