export default interface CreateRoomCommand {
  readonly id: string
  readonly userSid: string
  readonly userId: string
  readonly userName: string
  readonly issueTrackerUrl?: string
}
