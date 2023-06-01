function Card({ id, name = 'Desconocida', size = '', photo, activo, selected, handleUserSelection }) {
	const cambiandoEstado = (id) => {
	  handleUserSelection(id);
	};
  
	let className = activo ? '' : ' disabled ';
  
	className +=
	  size === 'small'
		? 'is-small'
		: size === 'large'
		? 'is-large'
		: '';
  
	return (
	  <article className='card'>
		<picture>
		  {id ? (
			<img
			  onClick={() => cambiandoEstado(id)}
			  src={photo}
			  className={'card-img-top ' + className}
			  alt=''
			/>
		  ) : (
			<img
			  src='https://cuv.upc.edu/es/shared/imatges/fotos-professorat-i-professionals/anonimo.jpg'
			  className={'card-img-top ' + className}
			  alt=''
			/>
		  )}
		  <h3 className='card-title-user'>
			{activo ? name : 'Suspendida'}
		  </h3>
		  {selected && <span className='selected-indicator'>Seleccionado</span>}
		</picture>
	  </article>
	);
  }
  
  export default Card;
  