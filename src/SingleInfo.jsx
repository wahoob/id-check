function SingleInfo({ icon, title, text }) {
  return (
    <div className="bg-[#F4F4F4] rounded-[20px] p-4 min-h-[202px]" dir="rtl">
      <div className="flex gap-2 items-center border-b-2 border-[#DCDCDC] pb-3">
        <div className="bg-[#82B8A1] rounded-full p-2.5">{icon}</div>
        <h3 className="font-[700] text-lg text-[#797979]">{title}</h3>
      </div>
      <h1 className="font-[700] text-3xl text-center pt-12 pb-8 text-[#494949]">
        {text}
      </h1>
    </div>
  );
}

export default SingleInfo;
