import PropTypes from "prop-types"
import imgNull from "../assets/sinImagen.png"

const Book =({img,title,price})=>{
    return (
        <div className="bg-white h-max rounded-lg shadow-md hover:shadow-amber-200 hover:shadow-md">
            <img className="w-full h-full max-h-[20rem] object-fill rounded-t-lg" src={img} alt={`Book ${title}`} />
            <div className="p-2">
                <p className="font-black">Title:<span className="font-normal">{title}</span></p>
                <p className="font-black">Price:<span className="font-normal">{price}</span></p>
                <p className="font-black">State:<span className="font-normal">Sold</span></p>
                <button className="bg-indigo-600 w-full text-white font-semibold p-1 rounded uppercase transition-all hover:bg-indigo-900"
                        >Buy</button>
            </div>
        </div>
    )
}

Book.propTypes = {
    price: PropTypes.number,
    title: PropTypes.string.isRequired,
    img: PropTypes.string
}

Book.defaultProps = {
    img: imgNull
}

export default Book