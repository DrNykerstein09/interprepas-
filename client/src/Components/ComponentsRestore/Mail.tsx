import{ useContext } from 'react'
import { RestoreContext } from '../../context/restoreContext';

const Mail = () => {
   const {handleChange} = useContext(RestoreContext);
   
  return (
    <div className="">
      <label
        htmlFor="mail"
        className="block mb-4 text-lg font-medium text-white md:text-xl"
      >
        Tu correo
      </label>
      <input
        type="mail"
        id="mail"
        name="mail"
        onChange={handleChange}
        className="
            block p-3 w-full transition duration-150 ease-in-out transform max-sm:hover:-translate-y-1 max-sm:hover:scale-110 focus:outline-none focus:ring focus:ring-[#FFA6AF] focus:ring-opacity-50 bg-primary rounded-lg tracking-wide mb-3  text-white placeholder-text md:text-xl"
        placeholder="ejemplo@alumno.enp.unam.mx"
      />
    </div>
  );
}

export default Mail