export default function Title({ newUser, deleteUsers }) {
	const eventAddUser = () => {
	  newUser();
	};
  
	const eventDeleteUsers = () => {
	  deleteUsers();
	};
  
	return (
	  <>
		<h1 className='title'>RANDOM USER</h1>
		<div className='buttons'>
		  <button className='btn btn-add' onClick={eventAddUser}>
			Añadir usuario
		  </button>
		  <button className='btn btn-delete' onClick={eventDeleteUsers}>
			Eliminar todos los usuarios
		  </button>
		</div>
	  </>
	);
  }
  