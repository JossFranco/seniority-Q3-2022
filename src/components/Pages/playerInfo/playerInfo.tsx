import './playerInfo.css'
import { useRef, useState } from 'react'
import { UserService } from '../../../services/user.service'
import CloseIcon from '../../../assets/close-icon.svg'

export function PlayerInfo({ statePlayerInfo, setStatePlayerInfo, items, setItems, edit, idEdit }) {
  const nameRef = useRef()
  const secondNameRef = useRef()
  const urlRef = useRef()
  const attackRef = useRef()
  const defenseRef = useRef()
  const skillsRef = useRef()
  const [nameError, setNameError] = useState('')
  const [urlError, setUrlError] = useState('')

  function closePlayerInfo() {
    setStatePlayerInfo(false)
    setNameError('')
    setUrlError('')
  }
  function createPlayer() {
    setNameError('')
    setUrlError('')
    if (nameRef.current.value === '') {
      setNameError('* Campo requerido')
    }
    if (urlRef.current.value === '') {
      setUrlError('* Campo requerido')
    }
    if (nameRef.current.value !== '' && urlRef.current.value !== '') {
      if (!edit) {
        const playerNew = {
          id: Math.floor(Math.random() * (1000 - 1) + 1),
          firstName: nameRef.current.value,
          lastName: string,
          image: urlRef.current.value,
          attack: parseInt(attackRef.current.value),
          defense: parseInt(defenseRef.current.value),
          skills: parseInt(skillsRef.current.value),
          idAuthor: 51,
          idPosition: 7
        }
        UserService.createPlayer(playerNew)
      } else {
        const playerNew = {
          id: idEdit,
          name: nameRef.current.value,
          image: urlRef.current.value,
          attack: parseInt(attackRef.current.value),
          defense: parseInt(defenseRef.current.value),
          hp: 1000,
          type: 'n/a',
          idAuthor: 1
        }
        console.log(playerNew)
        console.log(idEdit)
        //editPlayer(playerNew, idEdit)
      }
      setStatePlayerInfo(false)
    }
  }

  return (
    <>
      {statePlayerInfo && (
        <section className="overlay">
          <div className="playerInfo-Container">
            <h2>Agregar Jugador</h2>
            <img src={CloseIcon} alt="close-icon" className="closeIcon" onClick={closePlayerInfo} />
            <div className="setPlayer">
              <label>Nombre:</label>
              <input
                ref={nameRef}
                type="text"
                placeholder="nombre"
                onChange={(e) => setItems(e.target.value)}
                value={items.name}
              ></input>
              <label>Apellido:</label>
              <input
                ref={secondNameRef}
                type="text"
                placeholder="apellido"
                onChange={(e) => setItems(e.target.value)}
                value={items.name}
              ></input>
              <label>Ataque:</label>
              <div className="setPlayer">
                <label>0</label>
                <input
                  ref={attackRef}
                  onChange={(e) => setItems(e.target.value)}
                  type="range"
                  min="0"
                  max="100"
                  value={items.attack}
                ></input>
                <label>100</label>
              </div>
            </div>
            <p className="textError">{nameError}</p>
            <div className="setPlayer">
              <label>Imagen:</label>
              <input
                ref={urlRef}
                type="text"
                placeholder="Ej. https//:somedir.com"
                onChange={(e) => setItems(e.target.value)}
                value={items.image}
              ></input>
              <label>Defensa:</label>
              <div className="setPlayer">
                <label>0</label>
                <input
                  ref={defenseRef}
                  type="range"
                  min="0"
                  max="100"
                  onChange={(e) => setItems(e.target.value)}
                  value={items.defense}
                ></input>
                <label>100</label>
              </div>
            </div>
            <p className="textError">{urlError}</p>
            <div className="buttonsNewPlayer">
              <button onClick={createPlayer}>Guardar</button>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
