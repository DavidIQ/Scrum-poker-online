import { NextApiRequest, NextApiResponse } from 'next'
import Container from '@api/shared/Container'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const controller = Container.getKickRoomUserController()

  await controller.run('DELETE', req, res)
}

export default handler;
