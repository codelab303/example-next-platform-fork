import { switchPlatform } from 'lib/Platform'
import { FooBar } from '@/components/FooBar'
import styles from '../styles/Home.module.css'

export default function B() {
  switchPlatform('bar')
  return (
    <div className={styles.container}>
      <FooBar/>
    </div>
  )
}
