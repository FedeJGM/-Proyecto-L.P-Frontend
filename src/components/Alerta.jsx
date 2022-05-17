
const Alerta = ({alerta}) => {
  return (
      // ${alerta.error ?} = es decir si este objeto está en true | : en caso tal de que sea exitoso
      <div className={`${alerta.error ? 'from-red-500 to-red-500' : 'from-indigo-600 to-indigo-600'} bg-gradient-to-br text-center p-3 rounded-xl uppercase text-white font-bold text-sm mb-10`}>
          {alerta.msg}
      </div>
  )
};

export default Alerta;
