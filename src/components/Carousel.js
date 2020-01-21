import React, { useState, useEffect, Fragment } from 'react'

// For Animations
import { useTransition, animated } from 'react-spring';

const Carousel = () => {

  useEffect(() => {
    const interval = setInterval(() => {
      setRender((state) => (state + 1) % items.length);

    }, 4000)

    return () => clearInterval(interval);

  })

  const [items] = useState([
    {
      id: 1,
      title: "I am Robert",
      icon: "account_circle",
      render: false
    }
    , {
      id: 2,
      title: "Fullstack Developer",
      icon: "code",
      render: false
    }, {
      id: 3,
      title: "UI and UX Designer",
      icon: "swatchbook",
      render: false
    }, {
      id: 4,
      title: "Open Source Lover",
      icon: "thumb_up",
      render: false
    }, {
      id: 5,
      title: "A personal Solution for you",
      icon: "devices_other",
      render: false
    }
  ])

  const [render, setRender] = useState(0);


  const fadingTextPropsTransition = useTransition(items[render], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { tension: 220, friction: 150 },
  });


  return (
    <div style={container}>


      <Fragment>


        {fadingTextPropsTransition.map(({ item, props, key }) => (
          <animated.div
            key={key}
            style={{ ...props, position: 'absolute', left: '0', right: '0', marginLeft: 'auto', marginRight: 'auto', marginTop: '20vh' }}
          >
            <div className={setRender.Carousel__Title}>
              <div style={itemsStyle}>
                <i style={materialStyle} className="material-icons">{item.icon}</i>
                <h2>{item.title}</h2>
              </div>
            </div>
          </animated.div>
        ))}


      </Fragment>
    </div>
  )
}


const itemsStyle = {
  fontSize: '2rem',
  border: '2px solid blue',
  textAlign: 'center'
}

const materialStyle = {
  fontSize: '6rem'
}

const container = {
  display: 'block',
  border: '2px solid red',
  height: '50vh',
}


export default Carousel
