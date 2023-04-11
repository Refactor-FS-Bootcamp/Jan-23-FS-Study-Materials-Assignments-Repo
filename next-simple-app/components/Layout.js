import styles from '../styles/Layout.module.css'
import Header from './Header'
import Navbar from './Navbar'

// getStaticProps- which allows us to fetch data at build time.
// getServerSideProps- which fetch data at every requests.
// getStaticPaths- which are dynamic generated paths, based on data we are fetching.

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />        
            <div className={styles.container}>
                <main className={styles.main}>
                    <Header />
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout