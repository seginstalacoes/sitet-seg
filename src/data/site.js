export const SITE = {
  nome: 'SEG Instalações',
  slogan: 'Tudo conectado. Tudo sob controle.',
  cnpj: '22.129.637/0001-15',
  endereco: 'Rua Visconde de Mauá, 235 — Centro — Ilhéus/BA — CEP 45.652-042',
  foneFixo: '(73) 3017-5350',
  foneMovel: '(73) 99152-5743',
  whatsappE164: '5573991525743',
  email: 'contato@seginstalacoes.com.br',
  instagram: 'https://www.instagram.com/seg_instalacoes',
  cidades: 'Ilhéus, Itabuna, Itacaré, Barra Grande, Una, Canavieiras e região',
  mapsQuery: 'SEG Instalações, Rua Visconde de Mauá, 235, Centro, Ilhéus, BA'
};

export function waLink(msg) {
  return `https://wa.me/${SITE.whatsappE164}?text=${encodeURIComponent(msg)}`;
}

export const WA_PADRAO = 'Olá! Visitei o site da SEG Instalações e gostaria de conhecer as soluções de automação e integração.';
