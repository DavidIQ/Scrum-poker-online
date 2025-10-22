export default interface JoinRoomCommand {
  readonly roomId: string
  readonly userId: string
  readonly userSid: string
  readonly userName: string
}
