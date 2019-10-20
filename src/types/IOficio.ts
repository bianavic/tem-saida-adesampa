import estadoCivilEnum from './enum/estadoCivilEnum'
import Icontato from './IContato'

export default interface Ioficio {
  nome: string;
  rg: string;
  nascimento:  Date;
  cpf: string;
  estadoCivil: estadoCivilEnum;
  filhos: number;
  contato: Icontato;
  email: string;  
  
};
