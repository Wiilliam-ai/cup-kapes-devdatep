import PropTypes from "prop-types"
import imgNull from "../assets/sinImagen.png"

const CupcaKe = ({color,flavor,photo,description,price}) => {
  return (
    <div className="h-max bg-white shadow-md rounded-lg hover:shadow-green-200 hover:shadow-md">
        <img className="h-full w-full max-h-80 md:max-h-1/2 object-cover rounded-t-lg" src={photo} alt={`Cupcake of flavoe ${flavor}`} />
        <div className="p-2 text-gray-600">
            <p className="font-bold text-xl" >Color:  <span className="font-normal">{color}</span></p>
            <p className="font-bold text-xl inline-block mr-5" >Flavor: <span className="font-normal">{flavor}</span> </p>
            <p className="font-bold text-xl inline-block" >Price: <span className="font-normal">{price}</span> </p>
            <p className="font-bold text-xl mb-2" >description: <span className="font-normal">{description}</span> </p>
            <button className="bg-indigo-600 w-full text-white font-semibold p-1 rounded uppercase transition-all hover:bg-indigo-900"
                    >Buy</button>
        </div>
    </div>
  )
}

CupcaKe.propTypes = {
  olor: PropTypes.string,
  flavor: PropTypes.string,
  photo: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number
}

CupcaKe.defaultProps = {
  photo:imgNull
}

export default CupcaKe