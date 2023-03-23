import PropTypes from 'prop-types';



export const FirstApp = ( {title, subTitle, name}) => {
 
  return (
    <div className="">
        {/* <code>{ JSON.stringify(newMessage)}</code> */}
        <h1>{title}</h1>
        <p>{subTitle}</p>
        <p>{name}</p>

    </div >
  )
}


FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired, 
}

FirstApp.defaultProps = {
  title: 'No hay titulo',
  subTitle: 'No hay subtitlo',
  name: 'Fernando Herrera',
}