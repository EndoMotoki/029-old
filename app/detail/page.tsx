import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";
import React from "react";

// @ts-ignore
// export default function Page({searchParams}:object) {
//     const detailId = searchParams.id;
//     return Index(detailId);
// }

interface PageProps {
    params: { id: string };
    searchParams: { [key: string]: string | string[] | undefined };
}
export default async function Index({ params, searchParams }: PageProps) {
    const supabase = createServerComponentClient({cookies});

    const detailId = searchParams.id;

    const {
        data: foods,
        error
    } = await supabase.from("t_menu_detail").select('menu_id,size,price,calories,size(size_yoshinoya),t_menu(name)').eq('menu_id',detailId);
    // @ts-ignore
    const foodName = foods.length > 0 && foods[0]?.t_menu?.name;

    console.log(foodName);
    console.log(foods);
    console.log(error);

    return (

        <React.Fragment>


            <div className="text-center mt-10">
                <p className="text-6xl">牛丼DB</p>
            </div>


            {/*<h3>今日の牛丼ルーレット</h3>*/}
            &nbsp;

            <div className="text-left">
                <p className="text-3xl">「{foodName}」のメニュー</p>
            </div>

            <div className="relative overflowclassNameto shadow-md sm:rounded-lg">
                <table className="w-full text-sm teclassNameft text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-grayclassNameuppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            サイズ
                        </th>
                        <th scope="col" className="px-6 py-3">
                            カロリー
                        </th>
                        <th scope="col" className="px-6 py-3">
                            価格
                        </th>
                    </tr>
                    </thead>
                    <tbody>

            {foods?.map((food,index) => (

                // eslint-disable-next-line react/jsx-key
                        <tr className="bg-white border-bclassName:bg-gray-800 dark:border-gray-700" >
                            <th scope="row"
                                className="px-6 py-4 font-meclassNametext-gray-900 whitespace-nowrap dark:text-white">
                                {food.size.size_yoshinoya}
                            </th>
                            <td className="px-6 py-4 text-right">
                                {food.calories}kcal
                            </td>
                            <td className="px-6 py-4 text-right">
                                {food.price}円
                            </td>
                        </tr>
            ))}

                    </tbody>
                </table>
            </div>


        </React.Fragment>
    );

}