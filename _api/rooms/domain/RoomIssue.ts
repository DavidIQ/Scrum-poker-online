import InvalidDataError from '@api/shared/domain/errors/InvalidDataError'

export default class RoomIssue {
  private readonly value: string

  constructor(value: string) {
    if (value.trim().length > 200)
      throw new InvalidDataError(
        'The issue cannot contain more than 200 characters'
      )
    this.value = value.trim()
  }

  public getValue(): string {
    return this.value
  }
}
