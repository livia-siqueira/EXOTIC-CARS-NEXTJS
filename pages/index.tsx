import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Auth from './auth'

const Home: NextPage = () => {
  return (
    <Auth/>
  )
}

export default Home
