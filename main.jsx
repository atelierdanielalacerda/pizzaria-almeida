const WHATSAPP_PIZZARIA = '5575999179765';
const PIX_CHAVE = '5575999179765';
const PIX_NOME = 'Marilane Jesus de Almeida';
const PIX_BANCO = 'Nubank';
const ADMIN_SENHA = '816521';
const TAXA_CARTAO_PERCENTUAL = 0.05;

const imagens = {
  tradicional: "/tradicional.png",
  especial: "/especial.png",
  doce: "/doce.png",
  miniPizza: "/minipizza.jpg",
};

const LOGO_URL = "/Logo.png";

const pizzas = [
  { id: 'a-moda', categoria: 'Pizza Tradicional', nome: 'A moda', descricao: 'Molho, queijo mussarela, presunto, calabresa moída e orégano', precos: { pequena: 25, media: 35, grande: 40, familia: 50 } },
  { id: 'calabresa', categoria: 'Pizza Tradicional', nome: 'Calabresa', descricao: 'Molho, queijo mussarela, calabresa, cebola e orégano', precos: { pequena: 25, media: 35, grande: 40, familia: 50 } },
  { id: 'frango', categoria: 'Pizza Tradicional', nome: 'Frango', descricao: 'Molho, queijo mussarela, frango, cebola e orégano', precos: { pequena: 25, media: 35, grande: 40, familia: 50 } },
  { id: 'frango-milho', categoria: 'Pizza Tradicional', nome: 'Frango com milho', descricao: 'Molho, queijo mussarela, frango, milho verde e orégano', precos: { pequena: 25, media: 35, grande: 40, familia: 50 } },
  { id: 'genova', categoria: 'Pizza Tradicional', nome: 'Genova', descricao: 'Molho, queijo mussarela, presunto, ovo, tomate e orégano', precos: { pequena: 25, media: 35, grande: 40, familia: 50 } },
  { id: 'mexicana', categoria: 'Pizza Tradicional', nome: 'Mexicana', descricao: 'Molho, queijo mussarela, calabresa moída, pimenta, pimentão, cebola e orégano', precos: { pequena: 25, media: 35, grande: 40, familia: 50 } },
  { id: 'mista', categoria: 'Pizza Tradicional', nome: 'Mista', descricao: 'Molho, queijo mussarela, presunto, cebola e orégano', precos: { pequena: 25, media: 35, grande: 40, familia: 50 } },
  { id: 'portuguesa', categoria: 'Pizza Tradicional', nome: 'Portuguesa', descricao: 'Molho, queijo mussarela, presunto, ovo, pimentão, tomate, cebola e orégano', precos: { pequena: 25, media: 35, grande: 40, familia: 50 } },
  { id: 'quatro-estacoes', categoria: 'Pizza Tradicional', nome: 'Quatro Estações', descricao: 'Molho, queijo mussarela, ovo, ervilha, milho verde, cebola e orégano', precos: { pequena: 25, media: 35, grande: 40, familia: 50 } },
  { id: 'queijo', categoria: 'Pizza Tradicional', nome: 'Queijo', descricao: 'Molho, queijo mussarela, cebola e orégano', precos: { pequena: 25, media: 35, grande: 40, familia: 50 } },
  { id: 'americana', categoria: 'Pizza Tradicional', nome: 'Americana', descricao: 'Molho, queijo mussarela, bacon, milho verde, ovo e orégano', precos: { pequena: 30, media: 40, grande: 45, familia: 55 } },
  { id: 'atum', categoria: 'Pizza Especial', nome: 'Atum', descricao: 'Molho, queijo mussarela, atum, cebola e orégano', precos: { pequena: 30, media: 40, grande: 45, familia: 55 } },
  { id: 'baiana', categoria: 'Pizza Especial', nome: 'Baiana', descricao: 'Molho, queijo mussarela, calabresa, frango, pimenta, tomate, cebola e orégano', precos: { pequena: 30, media: 40, grande: 45, familia: 55 } },
  { id: 'bacon', categoria: 'Pizza Especial', nome: 'Bacon', descricao: 'Molho, queijo mussarela, bacon, cebola e orégano', precos: { pequena: 30, media: 40, grande: 45, familia: 55 } },
  { id: 'carne-seca', categoria: 'Pizza Especial', nome: 'Carne Seca', descricao: 'Molho, queijo mussarela, carne seca, tomate, cebola e orégano', precos: { pequena: 30, media: 40, grande: 45, familia: 55 } },
  { id: 'beijinho', categoria: 'Pizza Doce', nome: 'Beijinho', descricao: 'Leite condensado e coco ralado', precos: { pequena: 25, media: 35, grande: 40, familia: 50 } },
  { id: 'brigadeiro', categoria: 'Pizza Doce', nome: 'Brigadeiro', descricao: 'Brigadeiro, calda de chocolate e granulado', precos: { pequena: 25, media: 35, grande: 40, familia: 50 } },
  { id: 'chocolate-adicoes', categoria: 'Pizza Doce', nome: 'Chocolate com adições', descricao: 'Chocolate, coco ralado, morango e banana', precos: { pequena: 25, media: 35, grande: 40, familia: 50 } },
  { id: 'doce-leite', categoria: 'Pizza Doce', nome: 'Doce de leite', descricao: 'Doce de leite', precos: { pequena: 25, media: 35, grande: 40, familia: 50 } },
  { id: 'romeu-julieta', categoria: 'Pizza Doce', nome: 'Romeu e Julieta', descricao: 'Queijo mussarela e goiabada', precos: { pequena: 25, media: 35, grande: 40, familia: 50 } },
];

const miniPizzas = [
  { id: 'mp-a-moda', nome: 'A moda', descricao: 'Molho, queijo mussarela, presunto, calabresa moída e orégano' },
  { id: 'mp-calabresa', nome: 'Calabresa', descricao: 'Molho, queijo mussarela, calabresa, cebola e orégano' },
  { id: 'mp-frango-milho', nome: 'Frango com milho', descricao: 'Molho, queijo mussarela, frango, cebola e orégano' },
  { id: 'mp-genova', nome: 'Genova', descricao: 'Molho, queijo mussarela, frango, milho verde e orégano' },
  { id: 'mp-mexicana', nome: 'Mexicana', descricao: 'Molho, queijo mussarela, presunto, ovo, tomate e orégano' },
  { id: 'mp-mista', nome: 'Mista', descricao: 'Molho, queijo mussarela, calabresa moída, pimenta, pimentão, cebola e orégano' },
  { id: 'mp-portuguesa', nome: 'Portuguesa', descricao: 'Molho, queijo mussarela, presunto, ovo, pimentão, tomate, cebola e orégano' },
  { id: 'mp-quatro-estacoes', nome: 'Quatro Estações', descricao: 'Molho, queijo mussarela, ovo, ervilha, milho verde, cebola e orégano' },
  { id: 'mp-queijo', nome: 'Queijo', descricao: 'Molho, queijo mussarela, cebola e orégano' },
];

const bordas = [
  { id: 'catupiry', nome: 'Catupiry', valor: 5 },
  { id: 'cheddar', nome: 'Cheddar', valor: 5 },
];

const bebidas = [
  { id: 'coca-1l', nome: 'Coca-Cola 1L', valor: 7 },
  { id: 'pepsi-1l', nome: 'Pepsi 1L', valor: 6 },
  { id: 'kuat-1l', nome: 'Kuat 1L', valor: 6 },
];

const bairros = [
  { id: 'jequitiba', nome: 'Jequitibá', frete: 2 },
  { id: 'estacao', nome: 'Estação', frete: 5 },
  { id: 'alagoinhas', nome: 'Alagoinhas', frete: 8 },
  { id: 'indai', nome: 'Indaí', frete: 10 },
];

const tamanhosPizza = {
  pequena: { label: 'Pequena', fatias: 4, maxSabores: 1 },
  media: { label: 'Média', fatias: 8, maxSabores: 2 },
  grande: { label: 'Grande', fatias: 8, maxSabores: 3 },
  familia: { label: 'Família', fatias: 16, maxSabores: 4 },
};

const kitsMiniPizza = {
  10: { maxSabores: 1, valor: 12 },
  20: { maxSabores: 2, valor: 24 },
  30: { maxSabores: 2, valor: 36 },
  40: { maxSabores: 3, valor: 48 },
  50: { maxSabores: 3, valor: 60 },
  60: { maxSabores: 3, valor: 72 },
};

function moeda(valor) {
  return Number(valor || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function gerarId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

function nomesSabores(lista, base) {
  return lista.map((id) => base.find((item) => item.id === id)?.nome).filter(Boolean).join(', ');
}

function normalizarWhatsApp(numero) {
  const limpo = String(numero || '').replace(/[^0-9]/g, '');
  if (!limpo) return '';
  return limpo.startsWith('55') ? limpo : `55${limpo}`;
}

function usePedidosAdmin() {
  const [pedidos, setPedidos] = useState(() => {
    try { return JSON.parse(localStorage.getItem('pa_pedidos') || '[]'); } catch { return []; }
  });
  useEffect(() => localStorage.setItem('pa_pedidos', JSON.stringify(pedidos)), [pedidos]);
  return [pedidos, setPedidos];
}

function App() {
  const [modoAdmin, setModoAdmin] = useState(false);
  const [adminLogado, setAdminLogado] = useState(false);
  const [pedidosAdmin, setPedidosAdmin] = usePedidosAdmin();
  const [etapa, setEtapa] = useState(1);
  const [toast, setToast] = useState('');
  const [carrinho, setCarrinho] = useState([]);
  const [whatsUrl, setWhatsUrl] = useState('');

  const [pizzaSize, setPizzaSize] = useState('media');
  const [pizzaSabores, setPizzaSabores] = useState([]);
  const [bordaSelecionada, setBordaSelecionada] = useState('');
  const [filtroPizza, setFiltroPizza] = useState('Todos');

  const [mostrarMini, setMostrarMini] = useState(false);
  const [miniQtd, setMiniQtd] = useState(20);
  const [miniSabores, setMiniSabores] = useState([]);

  const [bebidaSelecionada, setBebidaSelecionada] = useState('coca-1l');
  const [bebidaQtd, setBebidaQtd] = useState(1);

  const [cliente, setCliente] = useState({ nome: '', whatsapp: '', endereco: '', bairro: '', tipoEntrega: 'entrega' });
  const [pagamento, setPagamento] = useState('pix');

  const totalItens = useMemo(() => carrinho.reduce((soma, item) => soma + item.valor, 0), [carrinho]);
  const bairroAtual = bairros.find((b) => b.id === cliente.bairro);
  const frete = cliente.tipoEntrega === 'entrega' ? (bairroAtual?.frete || 0) : 0;
  const taxaCartao = pagamento === 'cartao' ? (totalItens + frete) * TAXA_CARTAO_PERCENTUAL : 0;
  const totalGeral = totalItens + frete + taxaCartao;
  const pizzasFiltradas = filtroPizza === 'Todos' ? pizzas : pizzas.filter((p) => p.categoria === filtroPizza);

  function avisar(msg) {
    setToast(msg);
    clearTimeout(window.__toastTimer);
    window.__toastTimer = setTimeout(() => setToast(''), 2500);
  }

  function togglePizzaSabor(id) {
    const limite = tamanhosPizza[pizzaSize].maxSabores;
    setPizzaSabores((atual) => {
      if (atual.includes(id)) return atual.filter((s) => s !== id);
      if (atual.length >= limite) {
        avisar(`Esse tamanho permite até ${limite} sabor(es).`);
        return atual;
      }
      return [...atual, id];
    });
  }

  function toggleMiniSabor(id) {
    const limite = kitsMiniPizza[miniQtd].maxSabores;
    setMiniSabores((atual) => {
      if (atual.includes(id)) return atual.filter((s) => s !== id);
      if (atual.length >= limite) {
        avisar(`Esse kit permite até ${limite} sabor(es).`);
        return atual;
      }
      return [...atual, id];
    });
  }

  function addPizza() {
    if (!pizzaSabores.length) return avisar('Escolha pelo menos um sabor de pizza.');
    const nomes = nomesSabores(pizzaSabores, pizzas);
    const valorBase = Math.max(...pizzaSabores.map((id) => pizzas.find((p) => p.id === id)?.precos[pizzaSize] || 0));
    const borda = bordas.find((b) => b.id === bordaSelecionada);
    setCarrinho((old) => [...old, {
      id: gerarId(), tipo: 'Pizza', nome: `${tamanhosPizza[pizzaSize].label} - ${nomes}`,
      detalhe: `${tamanhosPizza[pizzaSize].fatias} fatias${borda ? ` + borda de ${borda.nome}` : ''}`,
      valor: valorBase + (borda?.valor || 0),
    }]);
    setPizzaSabores([]);
    setBordaSelecionada('');
    avisar('Pedido adicionado');
  }

  function addMiniPizza() {
    if (!miniSabores.length) return avisar('Escolha pelo menos um sabor de mini pizza.');
    setCarrinho((old) => [...old, {
      id: gerarId(), tipo: 'Mini Pizza', nome: `${miniQtd} unidades - ${nomesSabores(miniSabores, miniPizzas)}`,
      detalhe: `Kit festa com ${miniSabores.length} sabor(es)`,
      valor: kitsMiniPizza[miniQtd].valor,
    }]);
    setMiniSabores([]);
    avisar('Pedido adicionado');
  }

  function addBebida() {
    const bebida = bebidas.find((b) => b.id === bebidaSelecionada);
    if (!bebida) return;
    setCarrinho((old) => [...old, { id: gerarId(), tipo: 'Bebida', nome: `${bebidaQtd}x ${bebida.nome}`, detalhe: 'Bebida', valor: bebida.valor * bebidaQtd }]);
    avisar('Bebida adicionada');
  }

  function validarCliente() {
    if (!cliente.nome || !cliente.whatsapp || (cliente.tipoEntrega === 'entrega' && (!cliente.endereco || !cliente.bairro))) {
      avisar('Preencha os dados necessários.');
      return false;
    }
    return true;
  }

  function resumoTexto() {
    const itens = carrinho.map((item, i) => `${i + 1}. ${item.tipo}: ${item.nome} (${item.detalhe}) - ${moeda(item.valor)}`).join('\n');
    return `*Novo pedido - Pizzaria Almeida*\n\n*Cliente:* ${cliente.nome}\n*WhatsApp:* ${cliente.whatsapp}\n*Tipo:* ${cliente.tipoEntrega === 'entrega' ? 'Entrega' : 'Retirada'}\n${cliente.tipoEntrega === 'entrega' ? `*Endereço:* ${cliente.endereco}\n*Bairro:* ${bairroAtual?.nome || cliente.bairro}\n` : ''}\n*Itens:*\n${itens}\n\nSubtotal: ${moeda(totalItens)}\nFrete: ${moeda(frete)}\nTaxa cartão: ${moeda(taxaCartao)}\n*Total: ${moeda(totalGeral)}*`;
  }

  function finalizarPedido() {
    if (!carrinho.length) return avisar('Seu carrinho está vazio.');
    if (!validarCliente()) return;
    const pedido = { id: gerarId(), data: new Date().toLocaleString('pt-BR'), status: 'Novo', cliente: { ...cliente, bairroNome: bairroAtual?.nome }, carrinho, pagamento, totalItens, frete, taxaCartao, totalGeral };
    const url = `https://wa.me/${WHATSAPP_PIZZARIA}?text=${encodeURIComponent(resumoTexto())}`;
    setPedidosAdmin((old) => [pedido, ...old]);
    setWhatsUrl(url);
    window.open(url, '_blank', 'noopener,noreferrer');
    avisar('Pedido preparado para o WhatsApp');
  }

  if (modoAdmin && !adminLogado) return <AdminLogin entrar={() => setAdminLogado(true)} voltar={() => setModoAdmin(false)} />;
  if (modoAdmin && adminLogado) return <AdminView pedidos={pedidosAdmin} setPedidos={setPedidosAdmin} voltar={() => { setModoAdmin(false); setAdminLogado(false); }} />;

  return <div className="app">
    <header className="topbar">
      <div className="brand"><div className="logo">🍕</div><div><h1>Pizzaria Almeida</h1><p>Pizzas • Mini Pizzas • Bebidas</p></div></div>
      <button className="admin-btn" onClick={() => setModoAdmin(true)}>🔒 Admin</button>
    </header>

    <main className="layout">
      <section className="content">
        <div className="steps">
          {['Pedido', 'Entrega', 'Pagamento'].map((s, i) => <button key={s} className={etapa === i + 1 ? 'active' : ''} onClick={() => setEtapa(i + 1)}>{i + 1}. {s}</button>)}
        </div>

        {etapa === 1 && <>
          <Card title="1. Escolha sua pizza">
            <div className="size-grid">
              {Object.entries(tamanhosPizza).map(([key, info]) => <button key={key} className={pizzaSize === key ? 'selected' : ''} onClick={() => { setPizzaSize(key); setPizzaSabores([]); }}><b>{info.label}</b><small>{info.fatias} fatias • até {info.maxSabores} sabor(es)</small></button>)}
            </div>
            <div className="filters">
              {['Todos', 'Pizza Tradicional', 'Pizza Especial', 'Pizza Doce'].map(cat => <button key={cat} className={filtroPizza === cat ? 'active' : ''} onClick={() => setFiltroPizza(cat)}>{cat.replace('Pizza ', '')}</button>)}
            </div>
            <div className="products">
              {pizzasFiltradas.map((p) => <ProductCard key={p.id} item={{ ...p, imagem: p.categoria === 'Pizza Doce' ? imagens.doce : p.categoria === 'Pizza Especial' ? imagens.especial : imagens.tradicional }} selected={pizzaSabores.includes(p.id)} onClick={() => togglePizzaSabor(p.id)} extra={`${moeda(p.precos[pizzaSize])} • ${p.categoria}`} />)}
            </div>
            <div className="box"><h3>Borda recheada</h3><div className="option-grid"><button className={bordaSelecionada === '' ? 'selected' : ''} onClick={() => setBordaSelecionada('')}>Sem borda</button>{bordas.map(b => <button key={b.id} className={bordaSelecionada === b.id ? 'selected' : ''} onClick={() => setBordaSelecionada(b.id)}>{b.nome}<br /><small>+ {moeda(b.valor)}</small></button>)}</div></div>
            <button className="primary" onClick={addPizza}>Adicionar pedido</button>
          </Card>

          <Card title="2. Complemente seu pedido">
            <div className="box"><h3>Bebidas</h3><div className="drink-row"><select value={bebidaSelecionada} onChange={(e) => setBebidaSelecionada(e.target.value)}>{bebidas.map(b => <option key={b.id} value={b.id}>{b.nome} - {moeda(b.valor)}</option>)}</select><div className="qty"><button onClick={() => setBebidaQtd(Math.max(1, bebidaQtd - 1))}>-</button><b>{bebidaQtd}</b><button onClick={() => setBebidaQtd(bebidaQtd + 1)}>+</button></div><button className="yellow" onClick={addBebida}>Adicionar bebida</button></div></div>
            <div className="box"><button className="brown full" onClick={() => setMostrarMini(!mostrarMini)}>{mostrarMini ? 'Ocultar cardápio de Mini Pizza' : 'Quero escolher Mini Pizza'}</button>{mostrarMini && <MiniPizzaMenu miniQtd={miniQtd} setMiniQtd={setMiniQtd} setMiniSabores={setMiniSabores} miniSabores={miniSabores} toggleMiniSabor={toggleMiniSabor} addMiniPizza={addMiniPizza} />}</div>
          </Card>
          <button className="next" onClick={() => carrinho.length ? setEtapa(2) : avisar('Adicione pelo menos um item ao carrinho.')}>Avançar</button>
        </>}

        {etapa === 2 && <Card title="Dados do cliente e entrega">
          <div className="form-grid"><Input label="Nome" value={cliente.nome} onChange={(v) => setCliente({ ...cliente, nome: v })} /><Input label="WhatsApp" value={cliente.whatsapp} onChange={(v) => setCliente({ ...cliente, whatsapp: v })} /></div>
          <div className="option-grid"><button className={cliente.tipoEntrega === 'entrega' ? 'selected' : ''} onClick={() => setCliente({ ...cliente, tipoEntrega: 'entrega' })}>Entrega</button><button className={cliente.tipoEntrega === 'retirada' ? 'selected' : ''} onClick={() => setCliente({ ...cliente, tipoEntrega: 'retirada' })}>Retirada</button></div>
          {cliente.tipoEntrega === 'entrega' && <div className="form-grid"><Input label="Endereço" value={cliente.endereco} onChange={(v) => setCliente({ ...cliente, endereco: v })} /><label><span>Bairro</span><select value={cliente.bairro} onChange={(e) => setCliente({ ...cliente, bairro: e.target.value })}><option value="">Selecione seu bairro</option>{bairros.map(b => <option key={b.id} value={b.id}>{b.nome} - frete {moeda(b.frete)}</option>)}</select></label></div>}
          <button className="next" onClick={() => validarCliente() && setEtapa(3)}>Avançar</button>
        </Card>}

        {etapa === 3 && <Card title="Resumo e pagamento">
          <Resumo carrinho={carrinho} cliente={cliente} bairroAtual={bairroAtual} frete={frete} taxaCartao={taxaCartao} totalItens={totalItens} totalGeral={totalGeral} />
          <div className="option-grid"><button className={pagamento === 'pix' ? 'selected' : ''} onClick={() => setPagamento('pix')}>Pix</button><button className={pagamento === 'cartao' ? 'selected' : ''} onClick={() => setPagamento('cartao')}>Cartão via link</button></div>
          {pagamento === 'pix' ? <PixBox avisar={avisar} /> : <p className="notice">Finalize o pedido e solicite o link de pagamento pelo WhatsApp. A taxa do cartão será somada automaticamente.</p>}
          <button className="whats" onClick={finalizarPedido}>💬 Finalizar pedido no WhatsApp</button>{whatsUrl && <a className="brown full center" href={whatsUrl} target="_blank" rel="noreferrer">Abrir WhatsApp novamente</a>}
        </Card>}
      </section>
      <Cart carrinho={carrinho} removerItem={(id) => setCarrinho(old => old.filter(item => item.id !== id))} totalItens={totalItens} frete={frete} taxaCartao={taxaCartao} totalGeral={totalGeral} />
    </main>
    {toast && <div className="toast">{toast}</div>}
  </div>;
}

function Card({ title, children }) { return <section className="card"><h2>{title}</h2>{children}</section>; }
function Input({ label, value, onChange }) { return <label><span>{label}</span><input value={value} onChange={(e) => onChange(e.target.value)} /></label>; }
function ProductCard({ item, selected, onClick, extra }) { return <button onClick={onClick} className={`product ${selected ? 'selected' : ''}`}><img src={item.imagem} alt={item.nome} /><div><span className="badge">{extra}</span><h3>{item.nome}</h3><p>{item.descricao}</p></div></button>; }
function MiniPizzaMenu(props) { return <div className="mini-menu"><div className="size-grid">{Object.keys(kitsMiniPizza).map(qtd => <button key={qtd} className={Number(qtd) === props.miniQtd ? 'selected' : ''} onClick={() => { props.setMiniQtd(Number(qtd)); props.setMiniSabores([]); }}>{qtd}<small>{moeda(kitsMiniPizza[qtd].valor)}</small></button>)}</div><p>Esse kit permite até {kitsMiniPizza[props.miniQtd].maxSabores} sabor(es).</p><div className="products">{miniPizzas.map(e => <ProductCard key={e.id} item={{ ...e, imagem: imagens.miniPizza }} selected={props.miniSabores.includes(e.id)} onClick={() => props.toggleMiniSabor(e.id)} extra="Mini Pizza" />)}</div><button className="primary" onClick={props.addMiniPizza}>Adicionar Mini Pizza</button></div>; }
function Cart({ carrinho, removerItem, totalItens, frete, taxaCartao, totalGeral }) { return <aside className="cart"><h2>🛒 Carrinho</h2>{!carrinho.length ? <p>Nenhum item adicionado ainda.</p> : <>{carrinho.map(item => <div className="cart-item" key={item.id}><div><b>{item.nome}</b><small>{item.detalhe}</small><strong>{moeda(item.valor)}</strong></div><button onClick={() => removerItem(item.id)}>🗑️</button></div>)}<div className="totals"><p>Subtotal: {moeda(totalItens)}</p><p>Frete: {moeda(frete)}</p><p>Taxa cartão: {moeda(taxaCartao)}</p><h3>Total: {moeda(totalGeral)}</h3></div></>}</aside>; }
function Resumo({ carrinho, cliente, bairroAtual, frete, taxaCartao, totalItens, totalGeral }) { return <div className="summary"><h3>Resumo do pedido</h3>{carrinho.map(item => <p key={item.id}>• {item.nome} — {moeda(item.valor)}</p>)}<div className="notice"><p>Cliente: {cliente.nome}</p><p>WhatsApp: {cliente.whatsapp}</p><p>Tipo: {cliente.tipoEntrega === 'entrega' ? 'Entrega' : 'Retirada'}</p>{cliente.tipoEntrega === 'entrega' && <p>Endereço: {cliente.endereco}, {bairroAtual?.nome}</p>}</div><h3>Total: {moeda(totalGeral)}</h3><p>Subtotal: {moeda(totalItens)} • Frete: {moeda(frete)} • Taxa: {moeda(taxaCartao)}</p></div>; }
function PixBox({ avisar }) {
  const [copiado, setCopiado] = useState(false);
  async function copiar() {
    try {
      await navigator.clipboard.writeText(PIX_CHAVE);
      setCopiado(true);
      avisar('Chave Pix copiada');
    } catch {
      avisar('Toque no campo da chave e copie manualmente.');
    }
  }
  return <div className="pix">
    <p><b>Recebedor:</b> {PIX_NOME}</p>
    <p><b>Banco:</b> {PIX_BANCO}</p>
    <p><b>Chave Pix:</b></p>
    <textarea readOnly value={PIX_CHAVE} onFocus={(e) => e.target.select()} />
    <button className="brown" onClick={copiar}>{copiado ? 'Copiado' : 'Copiar chave Pix'}</button>
  </div>;
}
function AdminLogin({ entrar, voltar }) { const [senha, setSenha] = useState(''); const [erro, setErro] = useState(''); function submit(e) { e.preventDefault(); if (senha === ADMIN_SENHA) entrar(); else setErro('Senha incorreta.'); } return <div className="admin-screen"><form className="login" onSubmit={submit}><h1>Área administrativa</h1><input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Senha do admin" />{erro && <p className="error">{erro}</p>}<button className="primary">Entrar</button><button type="button" className="brown" onClick={voltar}>Voltar</button></form></div>; }
function AdminView({ pedidos, setPedidos, voltar }) { const hoje = new Date().toLocaleDateString('pt-BR'); const mesAtual = hoje.slice(3); const pedidosHoje = pedidos.filter(p => String(p.data || '').startsWith(hoje)); const pedidosMes = pedidos.filter(p => String(p.data || '').slice(3, 10) === mesAtual); const fatHoje = pedidosHoje.reduce((s, p) => s + Number(p.totalGeral || 0) - Number(p.taxaCartao || 0), 0); const fatMes = pedidosMes.reduce((s, p) => s + Number(p.totalGeral || 0) - Number(p.taxaCartao || 0), 0); function abrirAviso(pedido, status) { const msg = status === 'Em produção' ? `Olá, ${pedido.cliente.nome}! Seu pedido na Pizzaria Almeida já entrou em produção. Em breve avisaremos quando estiver a caminho.` : `Olá, ${pedido.cliente.nome}! Seu pedido da Pizzaria Almeida saiu para entrega e já está indo até você.`; window.open(`https://wa.me/${normalizarWhatsApp(pedido.cliente.whatsapp)}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer'); } function mudarStatus(pedido, status) { setPedidos(old => old.map(p => p.id === pedido.id ? { ...p, status } : p)); if (status === 'Em produção' || status === 'Saiu para entrega') abrirAviso(pedido, status); } return <div className="admin-screen"><header className="admin-head"><h1>Admin • Pizzaria Almeida</h1><button onClick={voltar}>Voltar</button></header><div className="kpis"><div><span>Pedidos hoje</span><b>{pedidosHoje.length}</b></div><div><span>Faturamento líquido hoje</span><b>{moeda(fatHoje)}</b></div><div><span>Pedidos mês</span><b>{pedidosMes.length}</b></div><div><span>Faturamento líquido mês</span><b>{moeda(fatMes)}</b></div></div>{!pedidos.length ? <p className="empty">Nenhum pedido registrado ainda.</p> : pedidos.map(p => <div className="order" key={p.id}><h2>Pedido de {p.cliente.nome}</h2><p>{p.data} • {p.status}</p><p>WhatsApp: {p.cliente.whatsapp}</p>{p.cliente.tipoEntrega === 'entrega' && <p>{p.cliente.endereco}, {p.cliente.bairroNome}</p>}<b>{moeda(p.totalGeral)}</b><ul>{p.carrinho.map(item => <li key={item.id}>{item.tipo}: {item.nome} — {moeda(item.valor)}</li>)}</ul><div className="admin-actions">{['Novo', 'Em produção', 'Saiu para entrega', 'Finalizado'].map(st => <button key={st} onClick={() => mudarStatus(p, st)}>{st}{(st === 'Em produção' || st === 'Saiu para entrega') ? ' + WhatsApp' : ''}</button>)}<button className="danger" onClick={() => setPedidos(old => old.filter(x => x.id !== p.id))}>Excluir</button></div></div>)}</div>; }

createRoot(document.getElementById('root')).render(<App />);
