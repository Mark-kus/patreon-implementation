import { useState } from 'react';
import "./app.css"
import Profile from './components/Profile/Profile';
import Asker from './components/Asker/Asker';

const shortDomain = "patreon.com"
const logDomain = "https://www.patreon.com"

function App() {
  const [input, setInput] = useState("")
  const [data, setData] = useState("")
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (input.includes(shortDomain + "/")) {

        const value = input.slice(input.indexOf(shortDomain) + shortDomain.length + 1)

        if (value.length) {
          setData(value)
        } else {
          setError("Falta el perfil en la URL")
        }

      } else {
        setError("URL invalido")
      }
    }
  }

  return (
    <div className={`patreon-container ${data ? "bg-orange" : "bg-white"}`}>

      <svg className={`patreon-image ${data ? "opacity-0" : "opacity-100"}`} width={62} height={62} xmlns="http://www.w3.org/2000/svg" aria-label="Patreon" role="img" viewBox="0 0 512 512" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><rect width="512" height="512" rx="15%" fill="#000000"></rect><circle cx="310" cy="223" r="113" fill="#ffffff"></circle><path fill="#ffffff" d="M109 410V110h56v300"></path></g></svg>

      <svg className={`patreon-image ${data ? "opacity-100" : "opacity-0"}`} width={62} height={62} xmlns="http://www.w3.org/2000/svg" aria-label="Patreon" role="img" viewBox="0 0 512 512" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><rect width="512" height="512" rx="15%" fill="#ffffff"></rect><circle cx="310" cy="223" r="113" fill="#f96854"></circle><path fill="#f96854" d="M109 410V110h56v300"></path></g></svg>

      {!data ?
        <Asker
          handleChange={handleChange}
          handleKeyPress={handleKeyPress}
          input={input}
          error={error} />
        :
        <Profile
          data={data}
          input={input.includes("www") ? input : `https://www.${input}`} />
      }
    </div>
  )
}

export default App
