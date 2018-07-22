import React from 'react'

const HomeContent = (props) => {
  return(
    <section className="home-content">
      {props.children}
    </section>
  )
}

export {HomeContent}