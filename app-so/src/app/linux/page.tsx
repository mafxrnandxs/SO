import Header from "../componentes/header/page";
import styles from "./page.module.css";
import Image from "next/image";

export default function LinuxSection() {
  return (
    <>
      <Header />
      <section className={styles.section}>
        <div className={styles.wrapper}>
          <div className={styles.imageBox}>
            <Image
              src="/Tux.svg"
              alt="Sistema Linux"
              width={350}
              height={350}
              className={styles.image}
            />
          </div>

          <div className={styles.textBox}>
            <h1 className={styles.h1}>Linux</h1>
            <p className={styles.p}>
              O <strong>Linux</strong> é um sistema operacional de código aberto
              baseado no núcleo desenvolvido por Linus Torvalds em 1991. É
              amplamente utilizado em servidores, celulares, sistemas embarcados
              e computadores pessoais. Sua arquitetura modular e filosofia de
              software livre tornaram-no uma base sólida para a criação de
              diversas distribuições, cada uma adaptada a diferentes perfis e
              necessidades de usuários.
            </p>

            <h2 className={styles.h2}>Principais Características do Linux:</h2>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <strong>Multitarefa e Multiusuário:</strong> permite que vários
                usuários executem múltiplas tarefas ao mesmo tempo, com
                segurança e isolamento.
              </li>
              <li className={styles.li}>
                <strong>Portabilidade:</strong> funciona em diversas
                arquiteturas de hardware, como x86, ARM e PowerPC.
              </li>
              <li className={styles.li}>
                <strong>Sistema de Arquivos Hierárquico:</strong> estrutura os
                dados em diretórios que começam na raiz (/), tratando
                dispositivos e processos como arquivos.
              </li>
              <li className={styles.li}>
                <strong>Interface de Linha de Comando (Shell):</strong> um
                ambiente poderoso para executar comandos e scripts, combinando
                ferramentas simples para realizar tarefas complexas.
              </li>
              <li className={styles.li}>
                <strong>Interface Gráfica:</strong> oferece suporte visual por
                meio do X Window System, integrando-se a interfaces como KDE e
                GNOME.
              </li>
              <li className={styles.li}>
                <strong>Segurança e Estabilidade:</strong> projetado com foco em
                segurança, com controle de permissões e baixa vulnerabilidade a
                vírus.
              </li>
              <li className={styles.li}>
                <strong>Licença GPL:</strong> garante liberdade para usar,
                modificar, estudar e distribuir o software.
              </li>
            </ul>

            <h2 className={styles.h2}>Distribuições Linux (Distros):</h2>
            <p className={styles.p}>
              Distribuições Linux são sistemas completos baseados no kernel, com
              ferramentas, pacotes e ambientes visuais. Cada uma é voltada para
              um tipo específico de usuário.
            </p>

            <h3 className={styles.h3}>Para Iniciantes:</h3>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <strong>Ubuntu:</strong> baseado no Debian, fácil de usar e com
                vasta comunidade.
              </li>
              <li className={styles.li}>
                <strong>Linux Mint:</strong> derivado do Ubuntu, com visual
                familiar para quem veio do Windows.
              </li>
              <li className={styles.li}>
                <strong>Zorin OS:</strong> feito para quem está migrando do
                Windows para o Linux.
              </li>
            </ul>

            <h3 className={styles.h3}>Para Computadores Antigos:</h3>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <strong>Lubuntu:</strong> utiliza LXQt, ideal para PCs com
                poucos recursos.
              </li>
              <li className={styles.li}>
                <strong>Puppy Linux:</strong> extremamente leve, roda direto da
                RAM.
              </li>
            </ul>

            <h3 className={styles.h3}>Foco em Segurança:</h3>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <strong>Kali Linux:</strong> especializado em testes de
                penetração e auditoria.
              </li>
              <li className={styles.li}>
                <strong>Parrot OS:</strong> foca em segurança, privacidade e
                desenvolvimento.
              </li>
            </ul>

            <h3 className={styles.h3}>Para Usuários Avançados:</h3>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <strong>Arch Linux:</strong> abordagem minimalista, com controle
                total pelo usuário.
              </li>
              <li className={styles.li}>
                <strong>Gentoo:</strong> permite compilar o sistema do zero,
                otimizando para o hardware.
              </li>
            </ul>

            <h3 className={styles.h3}>Para Servidores e Corporativo:</h3>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <strong>Debian:</strong> famoso pela estabilidade e grande
                repositório.
              </li>
              <li className={styles.li}>
                <strong>Red Hat Enterprise Linux (RHEL):</strong> versão
                comercial com suporte profissional.
              </li>
              <li className={styles.li}>
                <strong>CentOS:</strong> gratuito e compatível com o RHEL, muito
                usado em servidores.
              </li>
            </ul>

            <h2 className={styles.h2}>Obtenção e Instalação:</h2>
            <ul className={styles.ul}>
              <li className={styles.li}>
                <strong>Imagens ISO:</strong> gravadas em DVDs ou pen drives.
              </li>
              <li className={styles.li}>
                <strong>Instaladores Gráficos:</strong> como Ubiquity (Ubuntu) e
                Anaconda (Fedora), facilitam o processo.
              </li>
              <li className={styles.li}>
                <strong>Repositórios Online:</strong> permitem baixar e
                atualizar programas pela internet.
              </li>
            </ul>

            <p className={styles.closing}>
              O Linux segue evoluindo com apoio de uma comunidade ativa e
              global. Sua flexibilidade e poder de adaptação o tornam ideal para
              aplicações que vão de smartphones a supercomputadores.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
