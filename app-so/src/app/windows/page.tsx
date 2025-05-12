import Header from '../componentes/header/page';
import styles from './page.module.css';
import Image from 'next/image';

export default function WindowsSection() {
  return (
    <>
    <Header />
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.imageBox}>
          <Image
            src="/windowswebp.webp"
            alt="Sistema Microsoft Windows"
            width={350}
            height={350}
            className={styles.image}
          />
        </div>

        <div className={styles.textBox}>
          <h1 className={styles.h1}>Microsoft Windows</h1>
          <p className={styles.p}>
            O <strong>Microsoft Windows</strong> é uma família de sistemas operacionais desenvolvida pela Microsoft, amplamente adotada em computadores pessoais, servidores e dispositivos embarcados. Lançado originalmente em 1985 como uma interface gráfica para o MS-DOS, o Windows passou por grandes transformações, incorporando tecnologias modernas para atender tanto usuários domésticos quanto corporativos.
          </p>

          <h2 className={styles.h2}>Características Técnicas</h2>
          <ul className={styles.ul}>
            <li className={styles.li}><strong>Arquitetura:</strong> começou com suporte a 16 bits, evoluindo para 32 bits com o Windows 95 e, a partir do Windows XP, para 64 bits. Com o Windows 11, o suporte a sistemas de 32 bits foi descontinuado.</li>
            <li className={styles.li}><strong>Sistemas de Arquivos:</strong> compatível com FAT12, FAT16, FAT32 e, principalmente, NTFS — atualmente o padrão, por oferecer mais segurança e melhor desempenho.</li>
            <li className={styles.li}><strong>Interface Gráfica:</strong> foi aprimorada ao longo dos anos, indo do icônico Menu Iniciar do Windows 95 à interface moderna e centralizada do Windows 11.</li>
            <li className={styles.li}><strong>Segurança:</strong> conta com recursos como o Controle de Conta de Usuário (UAC), o Windows Defender e atualizações constantes que ajudam a proteger o sistema contra ameaças.</li>
            <li className={styles.li}><strong>Compatibilidade:</strong> um de seus pontos fortes é a compatibilidade com uma ampla gama de hardwares e softwares, desde aplicações antigas até as mais recentes.</li>
          </ul>

          <h2 className={styles.h2}>Principais Versões do Windows</h2>

          <h3 className={styles.h3}>Linha 9x (Para Usuários Domésticos)</h3>
          <ul className={styles.ul}>
            <li className={styles.li}><strong>Windows 95 (1995):</strong> estreou o Menu Iniciar e a Barra de Tarefas, modernizando a interface.</li>
            <li className={styles.li}><strong>Windows 98 (1998):</strong> melhorou o suporte à internet e dispositivos externos.</li>
            <li className={styles.li}><strong>Windows ME (2000):</strong> focou em recursos multimídia e introduziu a Restauração do Sistema.</li>
          </ul>

          <h3 className={styles.h3}>Linha NT (Profissionais e Servidores)</h3>
          <ul className={styles.ul}>
            <li className={styles.li}><strong>Windows NT 3.1 a 4.0 (1993–1996):</strong> criado para empresas, com foco em estabilidade e segurança.</li>
            <li className={styles.li}><strong>Windows 2000 (2000):</strong> trouxe o Active Directory e avanços em redes.</li>
            <li className={styles.li}><strong>Windows XP (2001):</strong> unificou as linhas doméstica e profissional, sendo um dos sistemas mais populares da história.</li>
            <li className={styles.li}><strong>Windows Vista (2007):</strong> introduziu a interface Aero e novos recursos de segurança, mas recebeu críticas por desempenho.</li>
            <li className={styles.li}><strong>Windows 7 (2009):</strong> corrigiu os problemas do Vista e foi amplamente elogiado pela estabilidade.</li>
            <li className={styles.li}><strong>Windows 8 / 8.1 (2012–2013):</strong> apostou em uma interface voltada para toque, com recepção dividida.</li>
            <li className={styles.li}><strong>Windows 10 (2015):</strong> reintroduziu o Menu Iniciar e trouxe os aplicativos universais.</li>
            <li className={styles.li}><strong>Windows 11 (2021):</strong> interface redesenhada, Menu Iniciar centralizado e avanços em desempenho e segurança.</li>
          </ul>

          <h3 className={styles.h3}>Versões para Servidores</h3>
          <ul className={styles.ul}>
            <li className={styles.li}><strong>Windows Server (2003–2025):</strong> focados em redes corporativas, oferecem ferramentas avançadas para gerenciamento, virtualização e segurança.</li>
          </ul>

          <h3 className={styles.h3}>Versões Móveis e Embarcadas</h3>
          <ul className={styles.ul}>
            <li className={styles.li}><strong>Windows CE:</strong> um sistema leve voltado para dispositivos como PDAs e consoles.</li>
            <li className={styles.li}><strong>Windows Mobile e Windows Phone:</strong> tentativas da Microsoft no mercado de smartphones, descontinuadas devido à baixa adoção.</li>
          </ul>

          <p className={styles.closing}>
            O Windows continua a liderar o mercado de sistemas operacionais, adaptando-se continuamente às inovações tecnológicas e às necessidades dos usuários ao redor do mundo.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
