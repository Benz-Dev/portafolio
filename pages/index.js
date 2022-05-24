import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import snipet from '../public/code-snippet.png'
import Link from 'next/link'

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
<<<<<<< HEAD
                  <code className={styles.code}><span className={styles.var}>const</span> <span className={styles.content_var}>githubLink</span> = <Link href='https://www.github.com/Benz-Dev'>&quot;https://github.com/Benz-Dev&quot;</Link></code>
=======
                  <code className={styles.code}><span className={styles.var}>const</span> <span className={styles.content_var}>githubLink</span> = <a href='https://www.github.com/Benz-Dev'>"https://github.com/Benz-Dev"</a></code>
>>>>>>> 2bb75e3e5383046dbb6fb1647af1611157272405
              </div>
            </div>
            <div className={styles.game}>
                <Image src={snipet} className={styles.snip1} alt='img'></Image>
                <div className={styles.snisp}></div>
                <Image src={snipet} className={styles.snip2} alt='img'></Image>
                <div className={styles.snisp}></div>
                <Image src={snipet} className={styles.snip3} alt='img'></Image>
            </div>
        </div>
      </main>
    </div>
  )
}
