import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import snipet from '../public/code-snippet.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mi Portafolio</title>
        <meta name="description" content="Benz Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
            <div className={styles.information}>
              <div className={styles.info}>
                <p>Hi all. I am</p>
                <h1>Jose Manuel</h1>
                <div className={styles.work}>Full-stack developer</div>
              </div>
              <div className={styles.github_info}>
                  <div className={styles.comment}>complete the game to continue</div>
                  <div className={styles.comment}>you can also see it my Github page</div>
                  <code className={styles.code}><span className={styles.var}>const</span> <span className={styles.content_var}>githubLink</span> = <a href='https://www.github.com/Benz-Dev'>"https://github.com/Benz-Dev"</a></code>
              </div>
            </div>
            <div className={styles.game}>
                <Image src={snipet} className={styles.snip1}></Image>
                <div className={styles.snisp}></div>
                <Image src={snipet} className={styles.snip2}></Image>
                <div className={styles.snisp}></div>
                <Image src={snipet} className={styles.snip3}></Image>
            </div>
        </div>
      </main>
    </div>
  )
}
