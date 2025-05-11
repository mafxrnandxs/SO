import Header from "../componentes/header/page";
import styles from "./page.module.css";
import Image from "next/image";

export default function UnixSection() {
  return (
    <>
      <Header />
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <div className={styles.imageBox}>
            <Image
              src="/Unix-history.svg"
              alt="Sistema Unix"
              width={350}
              height={350}
              className={styles.image}
            />
          </div>

          <div className={styles.textBox}>
            <h1 className={styles.h1}>Unix</h1>
            <p className={styles.p}>
              O <strong>Unix</strong> é um sistema operacional portátil,
              multitarefa e multiusuário, criado nos Laboratórios Bell da AT&T
              por Ken Thompson, Dennis Ritchie e outros colaboradores.
              Inicialmente desenvolvido como uma alternativa mais simples ao
              Multics, o Unix foi reescrito em 1973 na linguagem C, o que
              facilitou sua adaptação a diferentes plataformas. Durante as
              décadas de 1970 e 1980, diversas variantes surgiram, incluindo o
              BSD da Universidade de Berkeley e os sistemas System III e System
              V da própria AT&T.
            </p>

            <h2 className={styles.h2}>Principais características:</h2>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <strong>Multitarefa preemptiva:</strong> permite que vários
                processos sejam executados ao mesmo tempo, com o sistema
                gerenciando a distribuição dos recursos e o agendamento das
                tarefas.
              </li>
              <li className={styles.li}>
                <strong>Multiusuário:</strong> suporta a conexão simultânea de
                vários usuários, cada um com seu próprio ambiente e permissões.
              </li>
              <li className={styles.li}>
                <strong>Sistema de arquivos hierárquico:</strong> organiza os
                dados em uma estrutura de diretórios iniciada pela raiz (/),
                tratando dispositivos e processos como arquivos.
              </li>
              <li className={styles.li}>
                <strong>Separação entre kernel e espaço do usuário:</strong> o
                kernel cuida da gestão dos recursos do sistema, enquanto os
                programas dos usuários operam em um espaço isolado, aumentando a
                segurança e estabilidade.
              </li>
              <li className={styles.li}>
                <strong>Interface de linha de comando (shell):</strong> fornece
                um ambiente poderoso para executar comandos e scripts,
                permitindo a combinação de utilitários simples para realizar
                tarefas complexas.
              </li>
              <li className={styles.li}>
                <strong>Interface gráfica com X Window System:</strong> oferece
                suporte a ambientes gráficos através do X, que, em conjunto com
                gerenciadores de janelas como KDE e GNOME, proporciona
                interfaces visuais completas.
              </li>
            </ul>

            <h2 className={styles.h2}>Aplicações e legado:</h2>
            <ul className={styles.ul}>
              <li className={styles.li}>
                O Unix é amplamente utilizado em servidores, estações de
                trabalho e sistemas embarcados.
              </li>
              <li className={styles.li}>
                Sua filosofia de projeto influenciou profundamente outros
                sistemas operacionais, como o Linux, o macOS e diversos
                Unix-like.
              </li>
              <li className={styles.li}>
                A marca UNIX pertence hoje ao The Open Group, que certifica
                sistemas compatíveis com seus padrões.
              </li>
            </ul>

            <p className={styles.closing}>
              O Unix consolidou-se como um dos sistemas operacionais mais
              importantes da história, moldando o desenvolvimento de software e
              infraestrutura de TI por décadas.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
