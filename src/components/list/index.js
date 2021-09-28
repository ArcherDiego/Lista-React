const listStyle = {
    fontSize: '1.5em',
    width: '80%',
    marginLeft: '10%',
    marginRight: '10%',
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}

const imageStyle= {
    width: '100px',
    height: '100px',
}

const List = ({children, image, ...rest}) => {
    return (
        <li style={ listStyle } { ...rest }>
            { children }
            <img style={ imageStyle } src={ image } />
        </li>
    )
}

export default List