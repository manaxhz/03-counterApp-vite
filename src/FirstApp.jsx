import PropTypes from 'prop-types';



export const FirstApp = ( {title, subTitle, name}) => {
 
  return (
    <div className="">
        {/* <code>{ JSON.stringify(newMessage)}</code> */}
        <h1 data-testid="test-title">{title}</h1>
        <p>{subTitle}</p>
        <p>{subTitle}</p>
        <p>{name}</p>

    </div >
  )
}


FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired, 
}

FirstApp.defaultProps = {
  name: 'Fernando Herrera',
  subTitle: 'No hay subtitlo',
  // title: 'No hay titulo',
}