const Service = ({img,title,description}) => {
  return (
    <div className="bg-white flex flex-col items-center lg:flex-row p-2 rounded-md shadow">
            <img className="w-full max-w-[7rem]" src={img} alt="Books" />
            <div className="p-2">
              <h3 className="text-green-700 font-bold text-xl">{title}</h3>
              <p>{description}</p>
            </div>
    </div>
  )
}

export default Service