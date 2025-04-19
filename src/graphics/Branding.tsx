import Image from 'next/image'
import styles from './Branding.module.css'

export const Icon = () => {
  return (
    <>
      <Image
        src="/assets/images/page-logo-dark.png"
        width={100}
        height={70}
        alt="Logo Dark"
        className={styles.darkOnly}
      />
      <Image
        src="/assets/images/page-logo-light.png"
        width={100}
        height={70}
        alt="Logo Light"
        className={styles.lightOnly}
      />
    </>
  )
}

export const Logo = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Image
        src="/assets/images/page-logo-dark.png"
        width={100}
        height={70}
        alt="Logo Dark"
        className={styles.darkOnly}
      />
      <Image
        src="/assets/images/page-logo-light.png"
        width={100}
        height={70}
        alt="Logo Light"
        className={styles.lightOnly}
      />
    </div>
  )
}
