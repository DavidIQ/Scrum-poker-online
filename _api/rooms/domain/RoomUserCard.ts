import InvalidDataError from '@api/shared/domain/errors/InvalidDataError'
import cardValues from '@src/types/cardValues'

export default class RoomUserCard {
  readonly values = cardValues()

  private readonly value: string

  constructor(value: string) {
    if (!this.values.includes(value))
      throw new InvalidDataError(`"${value}" is not a valid card value`)

    this.value = value
  }

  public getValue(): string {
    return this.value
  }
}
