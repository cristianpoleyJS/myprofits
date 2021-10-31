import { createStore } from 'redux';

/**
 * Esto es un reducer, una función pura con el formato
 * (state, action) => newState. Describe como una acción transforma el estado
 * en el nuevo estado.
 *
 * La forma del estado depende de tí: puede ser un primitivo, un array, un
 * objeto, o incluso una estructura de datos de Immutable.js. La única parte
 * importante es que no debes modificar el objeto del estado, en vez de eso
 * devolver una nuevo objeto si el estado cambió.
 *
 * En este ejemplo, usamos `switch` y strings, pero puedes usar cualquier forma
 * que desees si tiene sentido para tu proyecto.
 */
function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1;
  case 'DECREMENT':
    return state - 1;
  default:
    return state;
  }
}

// Creamos un store de Redux almacenando el estado de la aplicación.
// Su API es { subscribe, dispatch, getState }.
let store = createStore(counter);

// Puedes suscribirte manualmente a los cambios, o conectar tu vista
// directamente
store.subscribe(() => {
  console.log(store.getState())
});

// La única forma de modificar el estado interno es despachando acciones.
// Las acciones pueden ser serializadas, registradas o almacenadas luego para
// volver a ejecutarlas.
store.dispatch({ type: 'INCREMENT' });
// 1
store.dispatch({ type: 'INCREMENT' });
// 2
store.dispatch({ type: 'DECREMENT' });
// 1