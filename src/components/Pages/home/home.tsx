import React, { FC, useEffect, useState } from 'react'
import { DataPlayers } from '../../moleculas/dataPlayers/dataPlayers'
import { SearchPlayer } from '../../moleculas/searchPlayer/searchPalyer'
import { Player } from '../../../interfaces/interfaces'
import { PlayerInfo } from '../../Pages/playerInfo/playerInfo'
import { UserService } from '../../../services/user.service'
import DeleteIcon from '../../../assets/delete-icon.svg'
import EditIcon from '../../../assets/edit-icon.svg'
import './home.scss'

export interface HomeProps {
  some?: string
}

export const Home: FC<HomeProps> = (props: HomeProps) => {
  const [players, setPlayers] = useState<Player[]>([])
  const [statePlayerInfo, setStatePlayerInfo] = useState(false)
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
      <h1>Mi Equipo</h1>
      <SearchPlayer setStatePlayerInfo={setStatePlayerInfo} />
      <section className="home__board">
        <section className="home__card">
          {players.map((option: Player, item) => {
            console.log(option.firstName)
            return (
              <section key={item} className="home__player">
                <img className="home__image" src={option.image}></img>
                <p className="home__name-player">{option.firstName + ' ' + option.lastName}</p>
                <p className="home__second-name-player">{}</p>
                <div className="home__items-player">
                  <div>
                    <p>Ataque</p>
                    <p className="home__numbers-player">{option.attack}</p>
                  </div>
                  <div>
                    <p>Defensa</p>
                    <p className="home__numbers-player">{option.defense}</p>
                  </div>
                  <div>
                    <p>Skills</p>
                    <p className="home__numbers-player">{option.skills}</p>
                  </div>
                </div>
                <section className="home__options-player">
                  <img src={DeleteIcon} alt="delete-icon" />
                  <img src={EditIcon} alt="edit-icon" />
                </section>
              </section>
            )
          })}
        </section>
      </section>
      <PlayerInfo
        statePlayerInfo={statePlayerInfo}
        setStatePlayerInfo={setStatePlayerInfo}
        items={item}
        setItems={SetItem}
        edit={edit}
        idEdit={isEdit}
      ></PlayerInfo>
    </>
  )
}
