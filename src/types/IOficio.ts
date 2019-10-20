import estadoCivilEnum from './enum/estadoCivilEnum'
import { Icontato } from './IContato'
import Ifilhos from './Ifilhos'
import { Document } from 'mongoose'

export default interface Ioficio  extends Document{
  nome: string;
  rg: string;
  cpf: string;
  nascimento:  Date;
  nacionalidade: string;
  estadoCivil: estadoCivilEnum;
  filhos: Ifilhos;
  contato: Icontato;
  email: string;  
  dataCriacao: Date;
  
};
