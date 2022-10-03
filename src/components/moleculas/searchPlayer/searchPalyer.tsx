import { FC, useState, useEffect } from 'react'
import { Input } from '../../atoms/input/input'
import { UserService } from '../../../services/user.service'
import './searchPlayer.scss'

export interface SearchPlayerProps {
  setSearchPlayer?: (value: string) => void
  setStateModal: (value: boolean) => void
}
export const SearchPlayer: FC<SearchPlayerProps> = (props: SearchPlayerProps) => {
  function newPlayer() {
    props.setStateModal(true)
  }

  return (
    <section className="search">
      <div className="search__input">
        <Input placeholder="Buscar por nombre" type="text" />
      </div>
      <div className="search__containerButton">
        <button className="search__button" onClick={newPlayer}>
          Agregar
        </button>
      </div>
    </section>
  )
}
