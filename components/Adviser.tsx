import React, { useEffect, useState } from 'react'

const Adviser = () => {
  const [loading, setLoading] = useState(false)
  const [advice, setAdvice] = useState({})

  const fetchAdvice = async () => {
    setLoading(true)
    const response = await fetch('https://api.adviceslip.com/advice')
    const json = await response.json()
    setAdvice(json.slip)
    setLoading(false)
  }

  console.log(advice)
  useEffect(() => {
    fetchAdvice()
  }, [])

  return (
    <div className="adviser relative mx-3 flex flex-col items-center justify-center gap-10 rounded-lg p-10 pb-16 shadow-lg transition">
      <p className="cyan-text text-sm tracking-widest">
        ADVICE #
        {
          //@ts-ignore
          advice?.id
        }
      </p>
      <p className="text-center text-3xl font-bold text-[#cee3e9]">
        "
        {
          //     @ts-ignore
          advice?.advice
        }
        "
      </p>
      <img src="/pattern-divider-desktop.svg" alt="" />
      <button
        className="icon-btn absolute bottom-0 rounded-full p-5 transition "
        onClick={fetchAdvice}
      >
        <img
          src="/icon-dice.svg"
          className={`${loading && 'animate-spin'} transition`}
          alt=""
        />
      </button>
    </div>
  )
}

export default Adviser
