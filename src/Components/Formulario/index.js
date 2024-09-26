import React, { useState } from 'react';
import Input from '../InputTexto';
import './Formulario.css';
import ModalTerms from '../ModalTerms';
import { useNavigate } from 'react-router-dom';



const Formulario = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Terms Accepted:', termsAccepted);
    navigate('./painelGeral');
  };
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  // Funções para abrir e fechar os modais
  const openTermsModal = () => setIsTermsOpen(true);
  const closeTermsModal = () => setIsTermsOpen(false);

  const openPrivacyModal = () => setIsPrivacyOpen(true);
  const closePrivacyModal = () => setIsPrivacyOpen(false);

  return (
    <section className="estrutura">
      <div className="estrutura_login">
        <form onSubmit={handleSubmit}>
          <div className="estrutura_login_login_email">
            <Input 
              nome="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              Style="email-label"
            />
          </div>
          <div className="estrutura_login_senha">
            <Input 
              nome="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              Style="password-label"
            />
          </div>
          <div className="estrutura_login_terms">
            <input className='check_terms'
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)} 
              required
            />  
            <span className='link_link1'>Aceito os</span>
            <span className="link_link2" onClick={openTermsModal}>Termos de Uso</span> 
            <span className='link_link3'> e </span> 
            <span className="link_link4" onClick={openPrivacyModal}>Política de Privacidade</span>       
          </div>
          <div className="style_botao">
            <button type="submit" className="submit-button">
              Entrar
            </button>
          </div> 
          <div className="forgot-password">
              <a href="/esqueci-minha-senha">Esqueci minha senha</a>
          </div>
        </form>
      </div>
      {isTermsOpen && (
        <div className='modalTerms'>
          <ModalTerms title="Termos de Uso" closeModal={closeTermsModal}>
              <p>TERMOS DE USO — SBR PRIME
 A SBR Prime, pessoa jurídica de direito privado, descreve através deste documento as
 regras de uso das suas plataformas, sites, aplicativos e soluções desenvolvidas por
 ela.
 Ao navegar em nossas plataformas, consideramos que você está de acordo com os
 Termos de Uso abaixo.
 Se modificarmos nossos Termos de Uso, publicaremos o novo texto com a data de
 revisão atualizada. Podemos alterar este documento a qualquer momento. Caso haja
 alteração significativa nos termos deste contrato, podemos informá-lo por meio das
 informações de contato que tivermos em nosso banco de dados ou por meio de
 notificações.
 A utilização das nossas plataformas após as alterações significa que você aceitou os
 Termos de Uso revisados. Caso, após a leitura da versão revisada, você não esteja de
 acordo com seus termos, favor encerrar o seu acesso.
 Seção 1– Usuário
 A utilização das nossas plataformas, aplicativos e soluções atribui automaticamente a
 condição de Usuário e implica a plena aceitação de todas as diretrizes e condições
 incluídas nestes Termos.
 Seção 2- Adesão em conjunto com a Política de Privacidade
 A utilização das nossas plataformas acarreta a adesão aos presentes Termos de Uso
 e àversão mais atualizada da Política de Privacidade da SBR Prime.
 Seção 3- Condições de acesso
 O acesso às plataformas da SBR Prime é condicionado a prévio registro e autorização
 para clientes, seus parceiros ou associados e para prestadores de serviços. É de total
 responsabilidade do Usuário fornecer apenas informações corretas, autênticas,
 válidas, completas e atualizadas, bem como não divulgar o seu login e senha para
 terceiros.
 É vedada qualquer publicação de conteúdos pelos Usuários nas plataformas da SBR
 Prime, incluindo imagens, mensagens e comentários, sem prévia autorização da SBR
 Prime.
 Seção 4– Cookies
 Informações sobre o seu uso das nossas plataformas podem ser coletadas a partir de
 cookies. Cookies são informações armazenadas diretamente no computador que você
 está utilizando. Os cookies permitem a coleta de informações, tais como o tipo de
 navegador, o tempo despendido no website, as páginas visitadas, as preferências de
 idioma e outros dados de tráfego anônimos.
 Nós e nossos prestadores de serviços utilizamos informações para proteção de
 segurança, para facilitar a navegação, exibir informações de modo mais eficiente e
personalizar sua experiência ao utilizar este website, assim como para rastreamento
 online. Também coletamos informações estatísticas sobre o uso do website para
 aprimoramento contínuo do nosso design e funcionalidade, para entender como o
 website é utilizado e para auxiliá-lo a solucionar questões relevantes.
 Caso não deseje que suas informações sejam coletadas por meio de cookies, há um
 procedimento simples na maioria dos navegadores que permite que os cookies sejam
 automaticamente rejeitados ou oferece a opção de aceitar ou rejeitar a transferência
 de um cookie (ou cookies) específico(s) de um site determinado para o seu
 computador. Entretanto, isso pode gerar inconvenientes no uso do website.
 As definições que escolher podem afetar sua experiência de navegação e o
 funcionamento que exige a utilização de cookies. Neste sentido, rejeitamos qualquer
 responsabilidade pelas consequências resultantes do funcionamento limitado deste
 website provocado pela desativação de cookies no seu dispositivo (incapacidade de
 definir ou ler um cookie).
 Seção 5- Propriedade Intelectual
 Todos os elementos de SBR Prime são de propriedade intelectual da mesma ou de
 seus licenciados. Estes Termos ou a utilização do nosso website e das nossas
 plataformas não concedem a você qualquer licença ou direito de uso dos direitos de
 propriedade intelectual da SBR Prime ou de terceiros.
 Seção 6- Dados pessoais
 Durante a utilização do nosso website e das nossas plataformas, certos dados
 pessoais serão coletados e tratados pela SBR Prime e/ou pelos Parceiros. As regras
 relacionadas ao tratamento de dados pessoais pela SBR Prime estão estipuladas na
 Política de Privacidade, que está de acordo com a Lei Geral de Proteção de Dados
 Pessoais (LGPD).
 Seção 7– Contato
 Caso você tenha qualquer dúvida sobre os Termos de Uso, por favor, entre em contato
 pelo e-mail contato@sbrprime.com.br.
 Data da aprovação: 02
 4 de ago. de 2024
 </p>
          </ModalTerms>
        </div>
      )}

      {isPrivacyOpen && (
        <div className='modalTerms'>  
          <ModalTerms title="Política de Privacidade" closeModal={closePrivacyModal}>
              <p>
 A SBR SERVIÇOS EM TI PARA AGRONEGÓCIOS,sociedade limitada, com sede na
 Cidade de Indaiatuba, Estado de São Paulo/SP, na Rua 11 de junho, 1674, Vila Vitória,
 CEP 13339-245, inscrita no CNPJ/MF sob nº 13.900.891/0001-84 (“nós” ou
 “Empresa”) leva sua privacidade a sério e zela pela segurança e proteção de dados de
 todos os seus clientes, parceiros, fornecedores e usuários (“Usuários” ou “você”) do
 site [nome do site] e qualquer outro site, loja, ou aplicativo operado pela Empresa (aqui
 designados, simplesmente, “Plataforma”).
 Esta Política de Privacidade (“Política”) destina-se a informá-lo sobre o modo como
 utilizamos e divulgamos informações coletadas em suas visitas à nossa Plataforma e
 em mensagens que trocamos com você (“Comunicações”).
 AO ACESSAR A PLATAFORMA, ENVIAR COMUNICAÇÕES OU FORNECER
 QUALQUER TIPO DE DADO PESSOAL, VOCÊ DECLARA ESTAR CIENTE E DE
 ACORDO COM ESTA POLÍTICA, A QUAL DESCREVE AS FINALIDADES E
 FORMAS DE TRATAMENTO DE SEUS DADOS PESSOAIS.
 Esta Política fornece uma visão geral de nossas práticas de privacidade, as escolhas
 que você pode fazer, bem como os direitos que pode exercer em relação aos Dados
 Pessoais tratados por nós. Se você tiver alguma dúvida sobre o uso de Dados
 Pessoais, entre em contato com contato@sbrprime.com.br.
 Além disso, esta Política não se aplica a quaisquer aplicativos, produtos, serviços,
 sites ou recursos de mídia social de terceiros que possam ser oferecidos ou
 acessados por meio da Plataforma. O acesso a esses links fará com que você deixe a
 Plataforma e possa resultar na coleta ou compartilhamento de informações sobre você
 por terceiros. Nós não controlamos, endossamos ou fazemos quaisquer
 representações sobre esses sites de terceiros ou suas práticas de privacidade, que
 podem ser diferentes das nossas. Recomendamos que você revise a política de
 privacidade de qualquer site com o qual você interaja antes de permitir a coleta e o
 uso de seus Dados Pessoais.
 Caso você nos envie Dados Pessoais referentes a outras pessoas físicas, você
 declara ter a competência para fazê-lo e ter obtido o consentimento necessário para
 autorizar o uso de tais informações nos termos desta Política.
 Definições
 Para os fins desta Política:
 <ul>
  <li>● Dados Pessoais: Qualquer informação que, direta ou indiretamente,
 identifique ou possa identificar uma pessoa natural, como nome, CPF, data de
 nascimento, endereço IP, entre outros.</li>

  <li>● Dados Pessoais Sensíveis: Qualquer informação que revele, em relação a
 uma pessoa natural, origem racial ou étnica, convicção religiosa, opinião
 política, filiação a sindicato ou a organização de caráter religioso, filosófico ou
 político, dado referente à saúde ou à vida sexual, dado genético ou biométrico.</li>

 <li>● Tratamento de Dados Pessoais: Qualquer operação efetuada no âmbito dos
 Dados Pessoais, por meio de meios automáticos ou não, tal como a coleta,
 gravação, organização, estruturação, armazenamento, adaptação ou alteração,
recuperação, consulta, utilização, divulgação por transmissão, disseminação
 ou, alternativamente, disponibilização, harmonização ou associação, restrição,
 eliminação ou destruição. Também é considerado Tratamento de Dados
 Pessoais qualquer outra operação prevista nos termos da legislação aplicável.</li>

 <li>● Leis de Proteção de Dados: Todas as disposições legais que regulam o
 Tratamento de Dados Pessoais, incluindo, porém sem se limitar, a Lei nº
 13.709/18, Lei Geral de Proteção de Dados Pessoais (“LGPD”).</li>

 Uso de Dados Pessoais
 Coletamos e usamos Dados Pessoais para acessos a nossas plataformas, gerenciar
 seu relacionamento conosco e melhor atendê-lo quando você estiver adquirindo
 produtos e/ou serviços na Plataforma, personalizando e melhorando sua experiência.
 Exemplos de como usamos os dados incluem:
 <li>● Viabilizar que você adquira produtos e/ou serviços na Plataforma.</li>
 <li>● Confirmar ou corrigir as informações que temos sobre você.</li>
 <li>● Enviar informações que acreditamos ser do seu interesse.</li>
 <li>● Personalizar sua experiência de uso da Plataforma.</li>
 <li>● Personalizar o envio de publicidades para você, baseada em seu interesse em
 nossa Plataforma.</li>
 <li>● Entrar em contato por um número de telefone e/ou endereço de e-mail
 fornecido. Podemos entrar em contato com você pessoalmente, por
 mensagens de voz, através de equipamentos de discagem automática, por
 mensagens de texto (SMS), por e-mail, ou por qualquer outro meio de
 comunicação que seu dispositivo seja capaz de receber, nos termos da lei e
 para fins comerciais razoáveis.
 Além disso, os Dados Pessoais fornecidos também podem ser utilizados na forma que
 julgarmos necessária ou adequada: (a) nos termos das Leis de Proteção de Dados; (b)
 para atender exigências de processo judicial; (c) para cumprir decisão judicial, decisão
 regulatória ou decisão de autoridades competentes, incluindo autoridades fora do país
 de residência; (d) para proteger nossas operações; (e) para proteger direitos,
 privacidade, segurança nossos, seus ou de terceiros; (f) para detectar e prevenir
 fraude; (g) permitir-nos usar as ações disponíveis ou limitar danos que venhamos a
 sofrer; (h) de outros modos permitidos por lei.
 Não fornecimento de Dados Pessoais
 Você não é obrigado a compartilhar os Dados Pessoais que solicitamos, no entanto,
 se você optar por não os compartilhar, em alguns casos, não poderemos fornecer a
 você acesso completo à Plataforma, alguns recursos especializados ou ser capaz de
 prestar a assistência necessária ou, ainda, viabilizar a entrega do produto ou prestar o
 serviço contratado por você.
 Dados coletados</li>
 No contato com a Plataforma, nós podemos coletar:
 <li>● Dados de contato: Nome, sobrenome, número de telefone, cidade, Estado,
 endereço de e-mail e código de registro profissional.</li>
 <li>● Informações que você envia: Informações que você envia via formulário
 (cadastro, dúvidas, reclamações, sugestões, críticas, elogios etc.).</li>
Na navegação geral na Plataforma, nós poderemos coletar:
 <li>● Dados de localização: Dados de geolocalização quando você acessa a
 Plataforma.</li>
 <li>● Preferências: Informações sobre suas preferências e interesses em relação
 aos produtos/serviços (quando você nos diz o que eles são ou quando os
 deduzimos do que sabemos sobre você).</li>
 <li>● Dados de navegação na Plataforma: Informações sobre suas visitas e
 atividades na Plataforma, incluindo o conteúdo (e quaisquer anúncios) com os
 quais você visualiza e interage, informações sobre o navegador e o dispositivo
 que você está usando, seu endereço IP, sua localização, o endereço do site a
 partir do qual você chegou. Algumas dessas informações são coletadas
 usando nossas Ferramentas de Coleta Automática de Dados, que incluem
 cookies, web beacons e links da web incorporados. Para saber mais, leia como
 nós usamos Ferramentas de Coleta Automática de Dados no item 7 abaixo.</li>
 <li>● Dados anônimos ou agregados: Respostas anônimas para pesquisas ou
 informações anônimas e agregadas sobre como a Plataforma é usufruída.
 Durante nossas operações, em certos casos, aplicamos um processo de
 Desidentificação ou Pseudonimização aos seus dados para que seja
 razoavelmente improvável que você identifique você através do uso desses
 dados com a tecnologia disponível.</li>
 <li>● Outras informações que podemos coletar: Outras informações que não
 revelem especificamente a sua identidade ou que não são diretamente
 relacionadas a um indivíduo, tais como informações sobre navegador e
 dispositivo; dados de uso da Plataforma; e informações coletadas por meio de
 cookies, pixel tags e outras tecnologias.
 Ao menos que você informe em algum formulário livre preenchido por você, nós não
 coletamos Dados Pessoais Sensíveis. Compartilhamento de Dados Pessoais com terceiros</li>
 Nós poderemos compartilhar seus Dados Pessoais:
 <li>● Com a(s) empresa(s) parceira(s) que você selecionar ou optar em enviar os
 seus dados, dúvidas, perguntas etc., bem como com provedores de serviços
 ou parceiros para gerenciar ou suportar certos aspectos de nossas operações
 comerciais em nosso nome. Esses provedores de serviços ou parceiros podem
 estar localizados nos Estados Unidos, na Argentina, no Brasil ou em outros
 locais globais, incluindo servidores para homologação e produção, e
 prestadores de serviços de hospedagem e armazenamento de dados,
 gerenciamento de fraudes, suporte ao cliente, vendas em nosso nome,
 atendimento de pedidos, personalização de conteúdo, atividades de
 publicidade e marketing (incluindo publicidade digital e personalizada) e
 serviços de TI, por exemplo.</li>
 <li>● Comterceiros, com o objetivo de nos ajudar a gerenciar a Plataforma.</li>
 <li>● Comterceiros, caso ocorra qualquer reorganização, fusão, venda, joint venture,
 cessão, transmissão ou transferência de toda ou parte da nossa empresa, ativo
 ou capital (incluindo os relativos à falência ou processos semelhantes).
 Transferências internacionais de Dados
 Dados Pessoais e informações de outras naturezas coletadas por nós podem ser
 transferidos ou acessados por entidades pertencentes ao grupo corporativo das
empresas parceiras em todo o mundo de acordo com esta Política de Privacidade. As
 leis de privacidade e proteção de dados variam entre os países, podendo oferecer
 níveis diferentes de proteção. Independentemente de onde seus Dados Pessoais são
 coletados, usados, transferidos ou armazenados, se eles foram coletados através da
 Plataforma, eles serão protegidos de acordo com esta Política de Privacidade, com o
 uso apropriado das medidas técnicas e organizacionais.
 Ferramentas de Coleta Automática de Dados
 Nós utilizamos cookies, web beacons e outras tecnologias semelhantes para coletar
 Dados Pessoais e informações quando você acessa a Plataforma.</li>
 <li>● Cookies: Pequenos arquivos de dados armazenados no disco rígido do seu
 computador ou dispositivo móvel por meio do navegador de Internet e são
 necessários para o correto funcionamento da Plataforma.</li>
 <li>● Webbeacons e tecnologias similares: Web beacons (também chamados de
 “gifs”) e tecnologias similares são pequenos fragmentos de código que são
 colocados em páginas da web, anúncios e e-mails que comunicam ao servidor
 da web informações do navegador.
 Armazenamento de Dados
 Nós armazenamos seus Dados Pessoais somente pelo tempo necessário para cumprir
 as finalidades para as quais foram coletados, incluindo para atender a quaisquer
 obrigações legais, contratuais, prestação de contas ou requisição de autoridades
 competentes.
 Segurança de Dados
 Implementamos medidas técnicas e organizacionais apropriadas para proteger os
 Dados Pessoais que coletamos e tratamos contra acesso não autorizado, uso
 indevido, perda ou destruição.</li>
 Seus Direitos
 Você pode, a qualquer momento, solicitar:
 <li>● Aconfirmação da existência de tratamento de seus Dados Pessoais.</li>
 <li>● OacessoaseusDados Pessoais.</li>
 <li>● Acorreção de dados incompletos, inexatos ou desatualizados.</li>
 <li>● Aanonimização, bloqueio ou eliminação de dados desnecessários, excessivos
 ou tratados em desconformidade com a legislação aplicável.</li>
 <li>● Aportabilidade dos dados a outro fornecedor de serviço ou produto, mediante
 requisição expressa.</li>
 <li>● Aeliminação dos dados tratados com seu consentimento.</li>
 <li>● A obtenção de informações sobre as entidades públicas ou privadas com as
 quais compartilhamos seus dados.</li>
 <li>● Ainformação sobre a possibilidade de não fornecer o seu consentimento, bem
 como de ser informado sobre as consequências, em caso de negativa.</li>
 <li>● Arevogação do consentimento.
 Para exercer os seus direitos, entre em contato conosco através do e-mail
 contato@sbrprime.com.br. Responderemos à sua solicitação em um prazo razoável e
 de acordo com a legislação aplicável.</li>
Alterações a esta Política
 Nós podemos modificar esta Política de Privacidade de tempos em tempos para refletir
 mudanças em nossas práticas de tratamento de Dados Pessoais. Quando fizermos
 alterações a esta Política, revisaremos a data da última atualização no início da
 Política. Se as alterações forem significativas, podemos fornecer um aviso mais
 proeminente (incluindo, para certos serviços, notificação por e-mail das alterações da
 Política de Privacidade). Recomendamos que você verifique regularmente esta página
 para obter as informações mais recentes sobre nossas práticas de privacidade.
 Contato
 Se você tiver quaisquer dúvidas sobre esta Política de Privacidade ou sobre o
 tratamento dos seus Dados Pessoais, entre em contato conosco pelo e-mail
 contato@sbrprime.com.br.
 Data da Aprovação
 5 de ago. de 2024
 </ul>
    </p>
          </ModalTerms>
        </div>
      )}
    </section>
  );
};

export default Formulario;