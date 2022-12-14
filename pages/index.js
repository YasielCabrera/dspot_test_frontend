import Head from 'next/head'
import FriendList from '../components/Friends/List'
import { useGetAllProfilesQuery } from '../services/profiles'

import styles from '../styles/pages/index.module.scss'

export default function Home() {
  const { data, error, isLoading } = useGetAllProfilesQuery()

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.header}>Friends</h1>

      <div>
        {isLoading ? (
          'loading'
        ) : error ? (
          <div>{error}</div>
        ) : (
          <FriendList friends={data} />
        )}
      </div>
    </>
  )
}
