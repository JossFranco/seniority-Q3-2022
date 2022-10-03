import React, { FC, useEffect, useState } from 'react'
import { DataPlayers } from '../../moleculas/dataPlayers/dataPlayers'
import { SearchPlayer } from '../../moleculas/searchPlayer/searchPalyer'
import { Player } from '../../../interfaces/interfaces'
import { UserService } from '../../../services/user.service'
import DeleteIcon from '../../../assets/delete-icon.svg'
import EditIcon from '../../../assets/edit-icon.svg'
import './home.scss'

export interface HomeProps {
  some?: string
}

export const Home: FC<HomeProps> = (props: HomeProps) => {
  const [players, setPlayers] = useState<Player[]>([])
  const [stateModal, setStateModal] = useState(false)
  const [item, SetItem] = useState({})
  const [edit, setEdit] = useState(false)
  const [isEdit, SetIsEdit] = useState('')

  useEffect(() => {
    UserService.getPlayers()
      .then((response) => {
        console.log(response)
        setPlayers(response)
      })
      .catch(() => {})
  }, [])
  return (
    <>
      <h1>'Mi Equipo'</h1>
      <SearchPlayer setStateModal={setStateModal} />
    </>
  )
}
