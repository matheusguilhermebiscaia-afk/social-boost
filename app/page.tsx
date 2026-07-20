const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <header className="header shell">
        <a className="brand" href="#inicio" aria-label="Social Boost - início">
          <span>Social</span><b>Boost</b><i>↗</i>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#inicio">Início</a><a href="#solucao">O que você recebe</a><a href="#processo">Como funciona</a><a href="#sobre">Sobre</a>
        </nav>
        <a className="whatsapp small" href="https://wa.me/5541999240694?text=Olá%20Social%20Boost!%20Vi%20o%20site%20e%20gostaria%20de%20fazer%20um%20orçamento." target="_blank" rel="noreferrer">Falar no WhatsApp <Arrow /></a>
      </header>

      <section className="hero shell" id="inicio">
        <div className="hero-copy">
          <span className="eyebrow"><i /> Sites que trabalham pelo seu negócio</span>
          <h1>Seu negócio merece mais do que só um <em>perfil nas redes.</em></h1>
          <p>Criamos sites profissionais, rápidos e estratégicos que transformam visitantes em clientes.</p>
          <div className="actions">
            <a className="button primary" href="https://wa.me/5541999240694?text=Olá%20Social%20Boost!%20Quero%20criar%20um%20site%20para%20o%20meu%20negócio." target="_blank" rel="noreferrer">Quero meu site <Arrow /></a>
            <a className="button secondary" href="#processo">Como funciona <span>↓</span></a>
          </div>
          <div className="proof"><span>⚡ Sites rápidos</span><i /><span>▣ Responsivos</span><i /><span>◎ Feitos para vender</span></div>
        </div>

        <div className="hero-showcase" aria-label="Etapas da criação de um site profissional">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="build-board">
            <div className="board-top"><span>Seu novo site</span><i>•••</i></div>
            <div className="board-body">
              <div className="board-copy"><small>CRIADO PARA O SEU NEGÓCIO</small><h3>Uma presença digital<br/><b>profissional de verdade.</b></h3><span className="fake-button">Falar com sua empresa ↗</span></div>
              <div className="board-visual"><i/><i/><i/><span>✦</span></div>
            </div>
          </div>
          <article className="feature-card feature-one"><span>01</span><b>Estratégia</b><small>Entendemos seu negócio</small></article>
          <article className="feature-card feature-two"><span>02</span><b>Design exclusivo</b><small>Criado para a sua marca</small></article>
          <article className="feature-card feature-three"><span>03</span><b>Site publicado</b><small>Pronto para receber clientes</small></article>
          <div className="launch-seal"><strong>100%</strong><small>adaptado<br/>ao celular</small></div>
        </div>
      </section>

      <section className="signal"><div className="shell signal-inner"><span>Seu cliente já está procurando.</span><strong>O seu negócio está pronto para ser encontrado?</strong><a href="#contato">Vamos mudar isso <Arrow /></a></div></section>

      <section className="section discovery shell" id="presenca">
        <div className="discovery-copy">
          <span className="eyebrow"><i /> Google + site + WhatsApp</span>
          <h2>O Google ajuda o cliente a encontrar você.<br/><em>O site ajuda ele a escolher você.</em></h2>
          <p>Quando alguém pesquisa sua empresa e encontra apenas o perfil no Google Maps, normalmente analisa localização, fotos e avaliações. Isso é importante — mas muitas dúvidas ainda ficam sem resposta.</p>
          <p>Com um site profissional, o cliente pode conhecer seus serviços, ver informações completas, entender seus diferenciais e encontrar tudo organizado antes mesmo de falar com você.</p>
          <div className="discovery-note"><span>✦</span><p><b>Resultado:</b> o visitante chega ao WhatsApp mais informado, confiante e preparado para pedir um orçamento ou contratar.</p></div>
        </div>
        <div className="customer-path" aria-label="Caminho do cliente da pesquisa no Google até o atendimento no WhatsApp">
          <article className="path-card maps-card">
            <div className="path-icon google-icon">G</div>
            <div><small>1. DESCOBERTA</small><h3>Pesquisa no Google</h3><p>Localização, fotos e avaliações ajudam a empresa a ser encontrada.</p></div>
            <span className="stars">★★★★★ <b>4,9</b></span>
          </article>
          <div className="path-arrow"><span>↓</span><small>QUER SABER MAIS</small></div>
          <article className="path-card site-card">
            <div className="path-icon">▤</div>
            <div><small>2. CONFIANÇA</small><h3>Entra no seu site</h3><p>Conhece serviços, diferenciais, respostas e formas de atendimento.</p></div>
            <div className="catalog-lines"><i/><i/><i/></div>
          </article>
          <div className="path-arrow"><span>↓</span><small>DECIDIU CONVERSAR</small></div>
          <article className="path-card whats-card">
            <div className="path-icon">◉</div>
            <div><small>3. CONVERSÃO</small><h3>Clica no WhatsApp</h3><p>Chega ao atendimento já entendendo o valor do seu negócio.</p></div>
            <b className="online">Pronto para atender ↗</b>
          </article>
        </div>
      </section>

      <section className="section shell" id="solucao">
        <div className="section-head"><div><span className="eyebrow"><i /> O que você recebe</span><h2>Mais que uma página bonita:<br/><em>uma ferramenta para vender.</em></h2></div><p>Seu site será pensado para explicar seu valor com clareza, transmitir confiança e facilitar o contato de quem já está interessado.</p></div>
        <div className="benefit-grid">
          <article><span>01</span><b>Identidade profissional</b><p>Um visual coerente com sua marca, criado para valorizar o seu negócio.</p></article>
          <article><span>02</span><b>Perfeito em qualquer tela</b><p>Navegação confortável no celular, computador ou tablet.</p></article>
          <article><span>03</span><b>Contato sem dificuldade</b><p>Botões e mensagens pensados para levar o visitante direto ao seu WhatsApp.</p></article>
          <article><span>04</span><b>Conteúdo objetivo</b><p>Informações organizadas para o cliente entender rapidamente por que escolher você.</p></article>
        </div>
      </section>

      <section className="section process" id="processo"><div className="shell">
        <div className="section-head compact"><div><span className="eyebrow"><i /> Sem complicação</span><h2>Do primeiro “oi” ao seu<br/><em>site no ar.</em></h2></div><p>Você cuida do seu negócio. Nós cuidamos de transformar sua ideia em uma presença digital profissional.</p></div>
        <div className="steps">
          <article><b>01</b><span>◌</span><h3>Entendemos seu negócio</h3><p>Conversamos sobre sua marca, seus clientes e o que você quer alcançar.</p></article>
          <article><b>02</b><span>✦</span><h3>Criamos sua experiência</h3><p>Desenhamos uma proposta exclusiva, bonita e fácil de usar em qualquer tela.</p></article>
          <article><b>03</b><span>↗</span><h3>Seu site entra no ar</h3><p>Depois da sua aprovação, publicamos tudo pronto para receber clientes.</p></article>
        </div>
      </div></section>

      <section className="section shell about" id="sobre">
        <div className="about-card"><span className="eyebrow"><i /> Por que a Social Boost?</span><h2>Bonito é só o começo.</h2><p>Um bom site precisa ser claro, rápido e conduzir a pessoa até a decisão. Aqui, cada detalhe tem uma função: valorizar sua marca e facilitar o próximo passo do seu cliente.</p><div className="checks"><span>✓ Visual exclusivo para sua empresa</span><span>✓ Perfeito no celular e computador</span><span>✓ Contato fácil pelo WhatsApp</span><span>✓ Estrutura preparada para crescer</span></div></div>
        <div className="quote"><span>“</span><p>Seu site não precisa parecer uma empresa enorme. Ele precisa mostrar, com clareza, por que escolher a sua.</p><small>— Social Boost</small></div>
      </section>

      <section className="cta-section shell" id="contato"><div>
        <span className="eyebrow light"><i /> Vamos tirar sua ideia do papel?</span>
        <h2>O próximo site incrível<br/>pode ser <em>o seu.</em></h2>
        <p>Conte um pouco sobre o seu negócio e receba uma proposta sem compromisso.</p>
        <a className="button primary" href="https://wa.me/5541999240694?text=Olá%20Social%20Boost!%20Quero%20criar%20um%20site%20para%20o%20meu%20negócio." target="_blank" rel="noreferrer">Pedir meu orçamento <Arrow /></a>
      </div><div className="rocket" aria-hidden="true"><span>🚀</span><i/><b>+</b></div></section>

      <footer className="shell"><a className="brand" href="#inicio"><span>Social</span><b>Boost</b><i>↗</i></a><p>Sites que impulsionam negócios.</p><div><a href="#solucao">O que você recebe</a><a href="#processo">Como funciona</a><a href="#contato">Contato</a></div><small>© 2026 Social Boost</small></footer>
      <a className="floating" href="https://wa.me/5541999240694?text=Olá%20Social%20Boost!%20Quero%20saber%20mais%20sobre%20a%20criação%20de%20sites." target="_blank" rel="noreferrer" aria-label="Chamar no WhatsApp">◉</a>
    </main>
  );
}
