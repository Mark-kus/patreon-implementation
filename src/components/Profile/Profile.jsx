import "./Profile.css"

export default function Profile({ data, input }) {
    return (
        <div className='user-patreon'>

            <h1>
                {data}
            </h1>
            <a
                href={input}
                target="_blank"
                rel="noreferrer"
                className="buy-button">Patreon {data}</a>

        </div>
    )
}