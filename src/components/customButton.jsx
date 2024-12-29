const PlayNowButton = () => {
  return (
    <button className="relative px-6 py-3 text-white font-bold bg-[#ED00FF] rounded-lg hover:bg-pink-600 focus:outline-none  border-2 border-[#28194c]">
      <span className="absolute inset-0 bg-[#E9E74C] -z-10 translate-y-1 translate-x-1 rounded-lg"></span>
      PLAY NOW
    </button>
  );
};

export default PlayNowButton;
