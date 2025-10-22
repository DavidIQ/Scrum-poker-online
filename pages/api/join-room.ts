import { NextApiRequest, NextApiResponse } from 'next'
import Container from '@api/shared/Container'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const controller = Container.getJoinRoomController()

  await controller.run('POST', req, res)
}

export default handler
