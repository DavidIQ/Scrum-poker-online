import CreateRoomCommand from '../CreateRoomCommand'
import Id from '../../../shared/domain/Id'

export default abstract class CreateRoomCommandMother {
  public static random(): CreateRoomCommand {
    return {
      id: Id.random().getValue(),
      userSid: 'random-sid',
      userId: 't1ng0jQbr4VFYy9UAAAB',
      userName: 'Jane'
    }
  }
}
