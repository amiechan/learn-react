// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
// import Gallery from './components/gallery'
import Profile from './qcomps/profile_mistake'
import MyComp from './qcomps/firstcomp'
import TodoList from './qcomps/todos'
// import Gallery from './qcomps/gallery_props'
import PackingList from './qcomps/props_item'
// import List from './qcomps/list_keys_id'
import RecipeList from './qcomps/recipes'
// import Gallery from './components/whyState'
// import Gallery from './components/state'
import Gallery from './qcomps/state'
import Form from './qcomps/stuckForm'
import FeedbackForm from './qcomps/thankYouCrash'
import RequestTracker from './qcomps/shoppingCart'
import Scoreboard from './qcomps/updObjectsForm'
import List from './qcomps/artistsRemoveArr'
import BucketList from './qcomps/arrObj'

export default function Home() {
  return (
    <div className={styles.main}>
      {/* <Profile /> */}
      {/* <MyComp /> */}
      {/* <TodoList /> */}
      {/* <Gallery /> */}
      {/* <PackingList /> */}
      {/* <List /> */}
      {/* <RecipeList /> */}
      {/* <Gallery /> */}
      {/* <Form /> */}
      {/* <FeedbackForm /> */}
      {/* <RequestTracker /> */}
      <Scoreboard />
      {/* <List /> */}
      <BucketList />
    </div>
  )
}
