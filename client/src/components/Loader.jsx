const Loader = () => {
  return (
    <div className='w-full h-full bg-[#0000002d] fixed z-50 flex justify-center items-center'>
      <div className='scaling-squares-spinner'>
        <div className='square' />
        <div className='square' />
        <div className='square' />
        <div className='square' />
      </div>
    </div>
  );
};

export default Loader;
