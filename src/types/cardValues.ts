const cardValues = (): string[] => {
  const defaultValues = [
    '0',
    '0.5',
    '1',
    '2',
    '3',
    '5',
    '8',
    '13',
    '20',
    '40',
    '100',
    'infinite',
    '?',
    'coffee'
  ]

  const environmentValues = (process.env.NEXT_PUBLIC_CARD_VALUES ?? '').split(
    ','
  )
  if (environmentValues.length > 0) {
    const filteredVerifiedValues = environmentValues.filter(value =>
      defaultValues.includes(value)
    )
    return filteredVerifiedValues.length > 0
      ? filteredVerifiedValues
      : defaultValues
  }

  return defaultValues
}

export default cardValues
