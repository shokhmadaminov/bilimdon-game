import useFetch from "../hooks/useFetch"


function Game() {

    const {data, loading, error} = useFetch()

  return (
    <div>Game</div>
  )
}

export default Game