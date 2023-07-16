import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";
import React from "react";
import Link from 'next/link'
import {supabase} from "@/supabase";
import {equal} from "assert";
import {text} from "stream/consumers";

interface PageProps {
    params: { type: string };
    searchParams: { [key: string]: string | string[] | undefined };
}
export default async function Index({ params, searchParams }: PageProps) {
    const supabase = createServerComponentClient({cookies});
    const menuType = searchParams.type;
    const {
        data: foods,
        error
    } = await supabase.from("t_menu").select('*').eq('type',menuType);
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
                <p className="text-3xl">メニューを選択してください</p>
            </div>

            {foods?.map((food,index) => (
                // <div key={food.id}>
                //     <p>・{food.name}({food.t_size.size_yoshinoya})</p>
                //     <p>カロリー : {food.calories}</p>
                //     <p>価格：{food.price}</p>
                //     <p>提供元 : {food.t_company.company_name}</p>
                // </div>
                <div key={index} className="w-100">
                    <Link  href={{ pathname: "/detail", query: {id: food.id} }}>
                        <button
                            type="button"
                            className="block w-full cursclassNameinter rounded-lg p-4 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200">
                            {food.name}
                        </button>
                    </Link>
                </div>
            ))}


            &nbsp;&nbsp;
            <footer>
                <p>メニューバージョン : <Link href="https://www.yoshinoya.com/pdf/allergy/">Y182号</Link></p>
                &nbsp;
                <p>GitHub : <Link href="https://github.com/EndoMotoki/029">https://github.com/EndoMotoki/029</Link></p>
            </footer>


        </React.Fragment>
    );

}