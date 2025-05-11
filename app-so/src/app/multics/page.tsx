import Header from "../componentes/header/page";
import styles from "./page.module.css";
import Image from "next/image";

export default function MulticsSection() {
  return (
    <>
      <Header />
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <div className={styles.imageBox}>
            <Image
              src="/Multics-Login.png"
              alt="Sistema Multics"
              width={350}
              height={350}
              className={styles.image}
            />
          </div>

          <div className={styles.textBox}>
            <h1 className={styles.h1}>Multics</h1>
            <p className={styles.p}>
              O <strong>Multics</strong> foi o primeiro sistema operacional de
              tempo compartilhado, com seu desenvolvimento iniciado em 1964 e a
              última instalação desativada em 2000. Ele foi criado com o
              objetivo de permitir o uso remoto de maneira confiável, garantir
              operação contínua, oferecer flexibilidade de configuração,
              assegurar alto nível de segurança, suportar diversas linguagens e
              ambientes, e possibilitar constante evolução tecnológica.
            </p>

            <h2 className={styles.h2}>Principais características:</h2>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <strong>Memória segmentada e virtual:</strong> integrada ao
                sistema de arquivos, permitindo acesso transparente aos dados.
              </li>
              <li className={styles.li}>
                <strong>Desenvolvido em PL/I:</strong> linguagem de alto nível,
                revolucionária na época.
              </li>
              <li className={styles.li}>
                <strong>Multiprocessamento:</strong> múltiplas CPUs
                compartilhando memória.
              </li>
              <li className={styles.li}>
                <strong>Compatibilidade com várias linguagens:</strong> como C,
                Pascal, FORTRAN.
              </li>
              <li className={styles.li}>
                <strong>Banco de dados relacional:</strong> o primeiro com MRDS.
              </li>
              <li className={styles.li}>
                <strong>Alta segurança:</strong> certificação B2 dos EUA.
              </li>
              <li className={styles.li}>
                <strong>Reconfiguração online:</strong> adicionar/remover
                hardware sem reiniciar.
              </li>
              <li className={styles.li}>
                <strong>Avanços em engenharia de software:</strong>{" "}
                modularidade, camadas, documentação.
              </li>
            </ul>

            <h2 className={styles.h2}>Influência:</h2>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <strong>Unix:</strong> inspirado diretamente no Multics.
              </li>
              <li className={styles.li}>
                <strong>IBM:</strong> TSS/360, MVS, System/38, AIX herdaram
                ideias dele.
              </li>
              <li className={styles.li}>
                <strong>Stratus VOS:</strong> feito por ex-integrantes do
                projeto.
              </li>
              <li className={styles.li}>
                <strong>VMS e AOS/VS:</strong> usaram anéis de proteção do
                Multics.
              </li>
            </ul>

            <p className={styles.closing}>
              O Multics foi um projeto inovador e profundamente influente, cuja
              arquitetura ajudou a moldar os sistemas modernos.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
