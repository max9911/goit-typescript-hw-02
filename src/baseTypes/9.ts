/*
  Створіть новий тип даних, який підходить для цих двох об'єктів.
*/
type myObg = {
  title: string,
  likes: number,
  accounts: [string, string | undefined, string | undefined],
  status: string,
  details?: {
    createAt: string,
    updateAt: string,
  }
}
const page1 = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}

const page2 = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}

export { };