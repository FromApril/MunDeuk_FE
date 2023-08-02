import { rest } from 'msw';

import { BASE_URL } from '../common';

const handlers = [
  rest.post(BASE_URL + '/note/withImage', (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];

export default handlers;
