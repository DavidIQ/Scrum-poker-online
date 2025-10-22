import { NextApiRequest, NextApiResponse } from 'next'
import Container from '@api/shared/Container'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const controller = Container.getRevealCardsController()

  await controller.run('PUT', req, res)
}

export default handler;
