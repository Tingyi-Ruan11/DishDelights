import Image from "next/image";
import { useRouter } from "next/router";
// import qs from "query-string";
const CategoryBox = (props, selected) => {
    // const router = useRouter();
    // const params = useSearchParams();

    // const handleClick = useCallback(() => {
    //     let (params) {
    //         currentQuery = qs.parse(params.toString());
    //     }
    //     const updatedQue
    // },[]

    // );
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
                max-w-50 

            `}
            // ${selected ? `border-b-neutral-800` : `border-transparent` }
            // ${selected ? `text-neutral-800` : `text-neutral-500` }
    >
        <Image src={props.iconURL} width={45} height={45} className="h-45 rounded-full bg-transparent hover:ring-4 hover:ring-amber-300 shadow-lg"/>
        <div className="font-meidum text-sm">{props.lable}</div>
    </div>
  );
};

export default CategoryBox;
