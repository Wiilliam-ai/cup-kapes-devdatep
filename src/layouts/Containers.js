
const Containers = ({children,title}) => {
  return (
    <section>
          <h3 className="font-semibold text-2xl my-5 text-center uppercase text-gray-700">{title}</h3>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {children}
          </div>
    </section>
  )
}

export default Containers