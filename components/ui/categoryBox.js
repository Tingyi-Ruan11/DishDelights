const CategoryBox = (props, selected) => {
  return (
    <div
      className={`
                flex
                flex-col
                items-center
                justify-center
                gap-2
                p-3
                border-b-2
                hover:text-neutral-800
                transition
                curcor-pointer
            ${selected ? `border-b-neutral-800` : `border-transparent` }
            ${selected ? `text-neutral-800` : `text-neutral-500` }
            `}
    >
        <img src={props.iconURL} className="h-9 rounded-full bg-transparent hover:ring-4 hover:ring-amber-300 shadow-lg"/>
        <div className="font-meidum text-sm">{props.lable}</div>
    </div>
  );
};

export default CategoryBox;
