/* import { Button } from '../../atoms/button'
import { DataPlayers } from '../../components/moleculas/dataPlayers/dataPlayers'
import { Players } from '../../interfaces/interfaces'
import { FC } from 'react-dom'

export interface PlayerInfoProps {
  navigateFuntion: (value: string) => void
  playerById: Players
  setIsEditable: (value: boolean) => void
}

export const PlayerInfo: FC<PlayerInfoProps> = (props: PlayerInfoProps) => {
  function move() {
    props.navigateFuntion('/home')
  }
  const handleSubmit = () => {
    props.navigateFunction('./newPlayer')
    props.setInsEdited(true)
  }
  return (
    <>
      <div className="player-info__buttons-div">
        <div className="player-info__button">
          <Button size="medium" color="tertiary" onClick={move}>
            Volver
          </Button>
        </div>
        <div className="player-info__button">
          <Button size="medium" color="primary" onClick={() => handleSubmit()}>
            Editar
          </Button>
        </div>
      </div>
      <section className="player-info__info-container">
        <div className="player-info__image-div">
          <img className="player-info__img-detail" src={props.playerById.image}></img>
        </div>
        <div className="player-info__data-container">
          <DataPlayers text="firstName" info={props.playerById.firstName}></DataPlayers>
          <DataPlayers text="lastName" info={props.playerById.lastName}></DataPlayers>
          <DataPlayers text="attack" info={props.playerById.attack}></DataPlayers>
          <DataPlayers text="defese" info={props.playerById.defense}></DataPlayers>
          <DataPlayers text="skills" info={props.playerById.skills}></DataPlayers>
        </div>
      </section>
    </>
  )
}
 */
