import Head from 'next/head'
import { useState, useEffect } from 'react'
import { supabase } from '/utils/supabaseClient'
import styles from '/styles/Home.module.css'
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  const [ticketNumber, setTicketNumber] = useState(null)
  const [QRCode, setQRCode] = useState(null)
  const [urlHash, setUrlHash] = useState(null)
  const [ticketData, setTicketData] = useState([])

  async function getQR() {
    try {
      const { data, error } = await supabase
        .from('tickets')
        .select('ticketNumber, Person, Email, Company, QRCode, urlHash')
        .eq('urlHash',String(pid))
        .single()
        
        if (data) {
          setTicketData(data)
          setTicketNumber(data.ticketNumber)
          setQRCode(data.QRCode)
          setUrlHash(data.urlHash)
        }

    } catch (error) {
        alert(error.message)
    }
    
  }

  useEffect(() => {
  if (router.asPath !== router.route) {
    getQR()
    }
  }, [router] )

  const Print = () =>{     
    window.print();
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>2022 Techstars Demo Day - Ticket</title>
        <meta name="description" content="techstars demo day ticket" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <img src='/resources/ticket.png' width='420' height='370' />
          </div>
        <div className={styles.grid}>
          <div>
            <img src={QRCode} />
          </div>
          <div>
            <h1>Ticket {ticketNumber} of 550</h1>
          </div>
          </div>
          <button type="button" onClick={Print} > Print</button>
      </main>
    
    </div>
  )
}

export default Post
