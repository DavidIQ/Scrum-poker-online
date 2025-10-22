import { NextApiRequest, NextApiResponse } from 'next'
import Container from '@api/shared/Container'

// export const config = {
//   api: {
//     bodyParser: false
//   }
// }

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const controller = Container.getChannelPresenceController()

  await controller.run('POST', req, res)
}

export default handler
