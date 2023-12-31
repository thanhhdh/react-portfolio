import './card.css'

const Card = ({ children, className, onClick }) => {
    return (
        <article className={`card ${className}`} onClick={onclick}>
            {children}
        </article>
    )
}

export default Card