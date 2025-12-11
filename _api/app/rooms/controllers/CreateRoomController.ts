import newId from '../../shared/newId'
import Controller from '@api/app/shared/Controller'
import { NextApiRequest, NextApiResponse } from 'next'
import CreateRoom from '@api/rooms/application/CreateRoom'
import GetRoom from '@api/rooms/application/GetRoom'

export default class CreateRoomController extends Controller {
  private createRoom: CreateRoom
  private getRoom: GetRoom

  constructor(createRoom: CreateRoom, getRoom: GetRoom) {
    super()
    this.createRoom = createRoom
    this.getRoom = getRoom
  }

  protected async execute(
    req: NextApiRequest,
    res: NextApiResponse
  ): Promise<void> {
    const id = newId()
    const userId = this.getAuthUserId(req)
    const { userName, issueTrackerUrl } = req.body
    this.removeUserSid(res)
    const userSid = this.getUserSid(req, res)

    await this.createRoom.dispatch({
      id,
      userId,
      userSid,
      userName,
      issueTrackerUrl
    })

    const response = await this.getRoom.dispatch({
      id
    })

    res.status(201).json(response)
  }
}
