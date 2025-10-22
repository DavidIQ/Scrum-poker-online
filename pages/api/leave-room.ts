import { NextApiRequest, NextApiResponse } from 'next'
import Container from '@api/shared/Container'

const leaveRoomHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const controller = Container.getLeaveRoomController()

  await controller.run('DELETE', req, res)
}

export default leaveRoomHandler
