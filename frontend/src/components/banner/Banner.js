import React, { useEffect, useState } from 'react';
import {Row} from 'react-bootstrap'
import axios from 'axios';

const Banner = () => {

  const [banner, setBanner] = useState([])

    useEffect(()=>{
      async function banner(){
        const data = await axios.get("http://localhost:8000/banner")
        setBanner(data.data)
      }
      banner()
    },[])

  return (
    <>

      <Carousel className="custom-slider">
        {banner.map(item=>(
          <div className='bannerImg'style={{backgroundImage: `url(${item.image})`}} >
            <Container className='container'>
              <div className='bannerContent'>
                <h4>{item.subheading}</h4>
                <h1>{item.heading}</h1>
                <Button color="violet" appearance="primary">{item.buttontext}</Button>
              </div>
            </Container>
          </div>
        ))}
      </Carousel>
    </>
  )
}

export default Banner