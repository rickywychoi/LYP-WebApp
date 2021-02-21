import React from 'react'
import { Image } from 'react-bootstrap'
import styles from './AdSection.module.css'

function AdSection (props) {
  // TODO: how many ads are we going to post?
  // Max height of ad should be 400px
  let adImgUrl = null

  return (
    <div {...props}>
      <div className={styles.body}>
        {adImgUrl ? (
          <Image src={adImgUrl} rounded />
        ) : (
          <p className={styles.infoText}>Ad currently not available</p>
        )}

        <div className={styles.donation}>
          <form
            action='https://www.paypal.com/cgi-bin/webscr'
            method='post'
            target='_blank'
            className={styles.donationLink}
          >
            <input type='hidden' name='cmd' value='_donations' />
            <input
              type='hidden'
              name='business'
              value='loveyourplanet8@gmail.com'
            />
            <input type='hidden' name='currency_code' value='USD' />
            <input
              type='image'
              src='https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif'
              name='submit'
              title='PayPal - The safer, easier way to pay online!'
              alt='Donate with PayPal button'
            />
            <img
              alt='Paypal'
              src='https://www.paypal.com/en_US/i/scr/pixel.gif'
              width='1'
              height='1'
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default AdSection
