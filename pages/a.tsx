import { switchPlatform } from '@/components/Platform'
import { FooBar } from '@/components/FooBar'
import styles from '../styles/Home.module.css'

export default function A() {
  switchPlatform('foo')
  return (
    <div className={styles.container}>
      <FooBar/>
    </div>
  )
}
