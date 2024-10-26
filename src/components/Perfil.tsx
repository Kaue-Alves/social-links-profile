import ImgPerfil from '../assets/images/avatar-jessica.jpeg';

export default function Perfil() {
  return (
    <div className='flex flex-col items-center text-white space-y-4'>
      <img src={ImgPerfil} alt="Foto de perfil" className="rounded-full w-24 h-auto" />
        <div className='flex flex-col items-center gap-1'>
            <h1 className="text-2xl mt-2 font-semibold">Jessica Randall</h1>
            <p className='text-green font-bold text-sm'>London, United Kingdom</p>
        </div>
        <p>"Front-end developer and avid reader."</p>
    </div>
  )
}
