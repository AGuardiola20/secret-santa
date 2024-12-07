import { useFetchRoomUsers } from "../hooks/useFetchRoomUsers";

const RoomScreen = () => {
  const { users, loading, error } = useFetchRoomUsers("room123");

  const usersArray = Object.values(users);

  // TODO: Crear componente de error
  if (error) {
    return <p>Ocurrió un error: {error}</p>;
  }

  return (
    <div>
      <h2>Lista de invitados</h2>
      {loading ? (
        <p>Cargando los invitados...</p>
      ) : (
        <div>
          {usersArray.map((user, index) => (
            <div key={index}>
              <p>{user.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RoomScreen;
