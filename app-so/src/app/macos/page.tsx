import Header from '../componentes/header/page';
import styles from './page.module.css';
import Image from 'next/image';

export default function MacOSSection() {
  return (
    <>
    <Header />
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.imageBox}>
          <Image
            src="/macos.png"
            alt="Sistema macOS"
            width={350}
            height={350}
            className={styles.image}
          />
        </div>

        <div className={styles.textBox}>
          <h1 className={styles.h1}>macOS</h1>
          <p className={styles.p}>
            O <strong>macOS</strong> é o sistema operacional desenvolvido pela Apple Inc. para os computadores Macintosh. Ele evoluiu a partir do antigo Mac OS Classic, passando por uma grande reformulação após a Apple adquirir a NeXT em 1997. A partir daí, o macOS passou a se basear no sistema NeXTSTEP, incorporando o kernel Darwin — que combina tecnologias do BSD, Mach e outros componentes de código aberto.
          </p>

          <h2 className={styles.h2}>Características Principais</h2>
          <ul className={styles.ul}>
            <li className={styles.li}><strong>Interface Gráfica (Aqua):</strong> moderna, elegante e consistente, oferece uma experiência visual refinada, com animações suaves e navegação intuitiva.</li>
            <li className={styles.li}><strong>Sistema de Arquivos (APFS):</strong> o Apple File System traz melhorias em velocidade, segurança e confiabilidade, especialmente em unidades SSD.</li>
            <li className={styles.li}><strong>Segurança Avançada:</strong> recursos como Gatekeeper protegem contra softwares maliciosos, enquanto o FileVault criptografa o conteúdo do disco.</li>
            <li className={styles.li}><strong>Integração com o Ecossistema Apple:</strong> funcionalidades como Handoff, Continuity e Área de Transferência Universal permitem uma experiência contínua entre iPhone, iPad, Apple Watch e Mac.</li>
            <li className={styles.li}><strong>Atualizações Gratuitas:</strong> desde o OS X Mavericks, o sistema recebe atualizações gratuitas via Mac App Store.</li>
          </ul>

          <h2 className={styles.h2}>Evolução das Versões</h2>
          <ul className={styles.ul}>
            <li className={styles.li}><strong>10.0 “Cheetah” (2001):</strong> primeira versão oficial, com a nova interface Aqua e introdução do Dock.</li>
            <li className={styles.li}><strong>10.1 “Puma” (2001):</strong> melhorias no desempenho e suporte à gravação de CDs.</li>
            <li className={styles.li}><strong>10.2 “Jaguar” (2002):</strong> inclusão do iChat e avanços gráficos.</li>
            <li className={styles.li}><strong>10.3 “Panther” (2003):</strong> introdução do Exposé, novo Finder e FileVault.</li>
            <li className={styles.li}><strong>10.4 “Tiger” (2005):</strong> chegada do Spotlight e Dashboard.</li>
            <li className={styles.li}><strong>10.5 “Leopard” (2007):</strong> lançamento do Time Machine, Spaces e suporte a 64 bits.</li>
            <li className={styles.li}><strong>10.6 “Snow Leopard” (2009):</strong> foco em desempenho e otimizações.</li>
            <li className={styles.li}><strong>10.7 “Lion” (2011):</strong> introdução do Launchpad, Mission Control e gestos multitouch.</li>
            <li className={styles.li}><strong>10.8 “Mountain Lion” (2012):</strong> integração com iCloud e Central de Notificações.</li>
            <li className={styles.li}><strong>10.9 “Mavericks” (2013):</strong> eficiência energética e melhorias de sistema.</li>
            <li className={styles.li}><strong>10.10 “Yosemite” (2014):</strong> redesign visual alinhado ao iOS.</li>
            <li className={styles.li}><strong>10.11 “El Capitan” (2015):</strong> estabilidade e performance refinadas.</li>
            <li className={styles.li}><strong>10.12 “Sierra” (2016):</strong> integração da Siri e Apple Pay no Mac.</li>
            <li className={styles.li}><strong>10.13 “High Sierra” (2017):</strong> implementação do APFS e melhorias gráficas.</li>
            <li className={styles.li}><strong>10.14 “Mojave” (2018):</strong> introdução do modo escuro e foco em privacidade.</li>
            <li className={styles.li}><strong>10.15 “Catalina” (2019):</strong> fim do suporte a apps de 32 bits e estreia do Sidecar.</li>
            <li className={styles.li}><strong>11 “Big Sur” (2020):</strong> redesign completo e compatibilidade com Apple Silicon.</li>
            <li className={styles.li}><strong>12 “Monterey” (2021):</strong> Universal Control e automações com o app Atalhos.</li>
            <li className={styles.li}><strong>13 “Ventura” (2022):</strong> recursos como Stage Manager e Continuity Camera.</li>
            <li className={styles.li}><strong>14 “Sonoma” (2023):</strong> suporte a widgets interativos e melhorias em chamadas.</li>
            <li className={styles.li}><strong>15 “Sequoia” (2024):</strong> espelhamento do iPhone no Mac e novo app de senhas.</li>
          </ul>

          <p className={styles.closing}>
            O macOS segue evoluindo, sempre com foco em segurança, integração e usabilidade. Ele permanece como um dos pilares do ecossistema Apple, oferecendo uma experiência fluida e confiável para usuários em todo o mundo.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
