import conatctIlustration from "../assets/undraw_personal_email_re_4lx7.svg"

const AboutUsPage = () => {
  return (
    <>
      <div className="container mx-auto my-5 space-y-2 px-4 bg-white p-5 rounded shadow">
        <h2 className="text-center text-3xl uppercase font-black text-gray-700">about us</h2>
        <p className="max-w-2xl text-center mx-auto">Integer malesuada, nisl non vulputate congue, erat enim aliquam ante, bibendum malesuada lacus metus vitae mi. Donec ornare est vel tellus aliquet, at dignissim ligula feugiat. Phasellus et ultrices lorem, at ultricies mauris. Donec aliquam ultricies commodo. Donec facilisis commodo nisl at maximus. Donec vitae eleifend magna, non ultrices ex. Nam ut ligula a diam semper molestie. Pellentesque tempor diam et elit mattis maximus. Aliquam quis erat a sapien bibendum egestas.Ut a auctor purus. Proin orci mi, posuere id suscipit ac, ultricies et nunc. Cras vulputate pharetra velit. Praesent ut neque sit amet metus rhoncus vulputate sodales quis nisi. Integer ornare porta lacinia. Morbi malesuada cursus porttitor. Cras ac euismod enim. </p>
      </div>
      <div className="container mx-auto my-10 flex">
          <div className="hidden md:w-1/2 md:block">
            <img className="max-w-md mx-auto" src={conatctIlustration} alt="Contactame" />
          </div>
          <div className="w-full md:w-1/2 p-2">
            <form className="bg-white p-4 rounded shadow-md lg:grid lg:gap-4 lg:grid-cols-2">
                <div>
                    <label className="text-gray-600 font-semibold uppercase" htmlFor="name">Name</label>
                    <input className="block w-full border my-2 rounded p-2" type="text" id="name" />
                </div>
                <div>
                    <label className="text-gray-600 font-semibold uppercase" htmlFor="name">Email</label>
                    <input className="block w-full border my-2 rounded p-2" type="text" id="name" />
                </div>
                <div className="col-span-2">
                    <label className="text-gray-600 font-semibold uppercase" htmlFor="name">Message</label>
                    <textarea className="block w-full border my-2 rounded p-2" id="name" />
                </div>
                <button className="bg-green-500 w-full p-2 text-xl rounded text-white font-semibold">
                  Send
                </button>
            </form>
          </div>
      </div>
    </>
  )
}

export default AboutUsPage