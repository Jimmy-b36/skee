import { prisma } from '../../../db';
import { withIronSessionApiRoute } from 'iron-session/next';
import bcrypt from 'bcryptjs';
import { NextApiRequest, NextApiResponse } from 'next';
import { IronSessionOptions } from 'iron-session';

// cookies set by iron session
export default withIronSessionApiRoute(
  async function loginHandler(req: NextApiRequest, res: NextApiResponse) {
    const loginData = JSON.parse(req.body);
    loginData.password = bcrypt.hashSync(loginData.password, process.env.SALT);
    // check which type of user is login in
    if (loginData.userType === 'proChecked') {
      try {
        const pro = await prisma.pros.findMany({
          where: {
            email: loginData.email,
            password: loginData.password,
          },
        });
        req.session.user = {
          id: pro[0].id,
          type: 'pro',
        };
        await req.session.save();
        res.json(pro);
      } catch (error) {
        res.json('login Error');
      }
    }
    // check which type of user is login in
    if (loginData.userType === 'clientChecked') {
      try {
        const client = await prisma.clients.findMany({
          where: {
            email: loginData.email,
            password: loginData.password,
          },
        });
        req.session.user = {
          id: client[0].id,
          type: 'client',
        };
        await req.session.save();
        res.json(client);
      } catch (error) {
        res.json('login Error');
      }
    }
  },
  {
    cookieName: 'user',
    password: process.env.COOKIE_PASS,
  }
);
