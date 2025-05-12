import Header from "../componentes/header/page";
import styles from "./page.module.css";
import Image from "next/image";

export default function BsdSection() {
  return (
    <>
      <Header />
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <div className={styles.imageBox}>
            <Image
              src="/4.3_BSD_UWisc_VAX_Emulation_Login.png"
              alt="Sistema BSD"
              width={350}
              height={350}
              className={styles.image}
            />
          </div>

          <div className={styles.textBox}>
            <h1 className={styles.h1}>BSD</h1>
            <p className={styles.p}>
              O <strong>Berkeley Software Distribution (BSD)</strong> é uma
              série de versões do sistema operacional Unix desenvolvidas pela
              Universidade da Califórnia em Berkeley entre 1977 e 1995. Embora
              tenha começado como uma extensão do Unix da AT&T, o BSD evoluiu ao
              longo do tempo, tornando-se um sistema operacional completo com
              diversas inovações técnicas.
            </p>

            <h2 className={styles.h2}>Principais Contribuições e Inovações:</h2>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <strong>Soquetes Berkeley:</strong> introduziram uma interface
                de rede que se tornou padrão para comunicação em redes TCP/IP.
              </li>
              <li className={styles.li}>
                <strong>Sistema de Arquivos UFS:</strong> apresentado no BSD
                4.2, trouxe avanços significativos na forma como os arquivos são
                organizados e gerenciados.
              </li>
              <li className={styles.li}>
                <strong>Editor vi e C Shell (csh):</strong> ferramentas que se
                tornaram amplamente utilizadas em ambientes Unix.
              </li>
              <li className={styles.li}>
                <strong>Gerenciamento de jobs e sinais confiáveis:</strong>{" "}
                melhorias importantes no controle de processos e sinais no
                sistema.
              </li>
            </ul>

            <h2 className={styles.h2}>Evolução e Descendentes:</h2>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <strong>FreeBSD:</strong> voltado para alto desempenho e
                estabilidade, especialmente em servidores.
              </li>
              <li className={styles.li}>
                <strong>NetBSD:</strong> reconhecido por sua alta portabilidade
                em diversas plataformas de hardware.
              </li>
              <li className={styles.li}>
                <strong>OpenBSD:</strong> destaca-se pelo foco em segurança e
                revisão rigorosa de código.
              </li>
              <li className={styles.li}>
                <strong>DragonFly BSD:</strong> originado do FreeBSD, com foco
                no desempenho em sistemas multiprocessados.
              </li>
              <li className={styles.li}>
                Influência em sistemas como <strong>macOS</strong> (núcleo
                Darwin), <strong>SunOS</strong> e até partes do{" "}
                <strong>Windows</strong>, como a pilha de rede TCP/IP.
              </li>
            </ul>

            <h2 className={styles.h2}>Licença BSD:</h2>
            <p className={styles.p}>
              A <strong>Licença BSD</strong> é uma licença de software livre
              bastante permissiva, que permite o uso e a redistribuição do
              código-fonte com poucas restrições. Essa flexibilidade facilitou a
              adoção do BSD em inúmeros projetos, tanto abertos quanto
              comerciais.
            </p>

            <p className={styles.closing}>
              O BSD teve um papel fundamental na popularização do Unix e no
              avanço das tecnologias de rede. Sua estrutura robusta e adaptável
              continua a influenciar profundamente os sistemas operacionais
              modernos e o ecossistema de software livre.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
