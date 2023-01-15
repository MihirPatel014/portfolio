import React , { useState } from 'react'

const styling = {
    fontSize : "40px",
    display : "flex",
    align_items:"center" ,
    justify_content: "center"
}

const Error = () => {
    const [ activeNav, setActiveNav ] = useState("#home")
  return (
    <>
    <h1 className="list" style={styling}>
        <ul>
            <li><a href="#portfolio" onClick={() => setActiveNav('#home')}
                        className={activeNav === "#home" ? "nav__link active-link":
                        "nav__link"}> Me
                        </a></li>
            <li>myself </li>
            <li>I</li>
        </ul>
    </h1>
    </>
  )
}

export default Error