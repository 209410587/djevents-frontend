import Head from 'next/head'
import Navbar from '../Header/Navbar'
import styles from './Layout.module.scss'

export default function Layout(props) {
    return (
        <div className={styles.layout}>
            <Head>
                <title>My Portfolio</title>
                <meta name="description" content="Generate by create next app" />
            </Head>

            <Navbar>

            </Navbar>
            <main className={styles.main}>
                {props.children}
            </main>
        </div>
    )
}
