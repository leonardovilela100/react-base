import * as types from '../types';

const initialState = {
  botaoClicado: false,
};
/*
Tem um erro no retrun newState que precisa ser ajustado para que o reducer funcione.
*/
export default function (state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log('Sucesso');
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }
    case types.BOTAO_CLICADO_FAILURE: {
      console.log('Ocorreu algum erro =(');
      return state;
    }
    case types.BOTAO_CLICADO_REQUEST: {
      console.log('Estou fazendo a requisição');
      return state;
    }

    default: {
      return state; //aqui fica a modificação do reducer
    }
  }
}
