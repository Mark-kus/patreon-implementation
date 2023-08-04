import "./Asker.css"

export default function Asker({ handleChange, handleKeyPress, input, error }) {
    return (
        <div className='patreon-search'>

            <h3 className="input-instructions">Inserta tu URL</h3>
            <input
                type="text"
                onChange={handleChange}
                value={input}
                onKeyDown={handleKeyPress}
                placeholder='patreon.com/tu_nombre'
            />

            <p className="input-error">{error}</p>
        </div>
    )
}