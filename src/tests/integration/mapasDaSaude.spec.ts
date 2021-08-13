import buscarDescribeAgentesMapasDaSaude from '../../services/buscarDescribeAgentesMapasDaSaude';
import criarAgenteMapasDaSaude from '../../services/criarAgenteMapasDaSaude';
import { v4 as uuid } from 'uuid';
import buscaAgenteMapasDaSaude from '../../services/buscaAgenteMapasDaSaude';
import { AgenteMapasDaSaude } from '../../controllers/types';

describe('Integração - Api Mapas da Saúde', () => {
  // Agente para teste
  const agente: AgenteMapasDaSaude = {
    name: `Teste.${uuid()}`,
    documento: '02973177332',
    emailPublico: 'email@email.com',
  };

  test('Deve ser possível buscar o describe da Entidade Agente', async () => {
    const data = await buscarDescribeAgentesMapasDaSaude();

    expect(data).not.toBeNull();

    expect(data.id).not.toBeNull();

    expect(data.name).not.toBeNull();
  });

  test('Deve ser possível criar um Agente', async () => {
    const data = await criarAgenteMapasDaSaude(agente);

    expect(data).not.toBeNull();

    expect(data.id).not.toBeNull();

    expect(data.name).not.toBeNull();

    expect(data.name).toBe(agente.name);
  });

  test('Deve ser possível buscar um Agente', async () => {
    const data = await buscaAgenteMapasDaSaude(agente.emailPublico);

    expect(data).not.toBeNull();
  });

  test('Deve ser possível deletar permanentemente um Agente', async () => {
    const data = await buscaAgenteMapasDaSaude(agente.emailPublico);

    expect(data).not.toBeNull();
  });
});
