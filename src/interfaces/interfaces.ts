export interface Player {
  firstName: string
  lastName: string
  image: string
  attack: 0
  defense: 0
  skills: 0
  idAuthor: 0
  idPosition: 0
}

export interface AllPlayers {
  count: number
  items: Player[]
}
