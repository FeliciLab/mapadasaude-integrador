import FormData from 'form-data';
import { apiMapasSaude } from '../api';

// TODO: colocar aqui as informações necessárias
export interface AgenteMapasDaSaude {
  name: string;
  documento: string; // CPF
  emailPublico: string;
}

const criarAgenteMapasDaSaude = async (agente: AgenteMapasDaSaude) => {
  const agenteFromData = new FormData();

  // Criando o FormData
  agenteFromData.append('name', agente.name);
  agenteFromData.append('documento', agente.documento);
  agenteFromData.append('emailPublico', agente.emailPublico);

  // 🔥 Diferenciado 🔥
  agenteFromData.append('type', String(1));

  const { data } = await apiMapasSaude.post('/agent/index', agenteFromData, {
    headers: agenteFromData.getHeaders(),
  });

  return data;
};

export default criarAgenteMapasDaSaude;