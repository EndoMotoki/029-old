import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";
import React from "react";
import Link from 'next/link'
import {supabase} from "@/supabase";
import {equal} from "assert";
import {text} from "stream/consumers";

export default async function Index() {
    const supabase = createServerComponentClient({cookies});

    const {
        data: foods,
        error
    } = await supabase.from("t_menu").select('id,name,calories,price,size,company,t_company(company_name),t_size(size_yoshinoya,size_sukiya)');
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
                <p className="text-3xl">カテゴリを選択してください</p>
            </div>

            {/*{foods?.map((food,index) => (*/}
            {/*    <div key={food.id}>*/}
            {/*        <p>・{food.name}({food.t_size.size_yoshinoya})</p>*/}
            {/*        <p>カロリー : {food.calories}</p>*/}
            {/*        <p>価格：{food.price}</p>*/}
            {/*        <p>提供元 : {food.t_company.company_name}</p>*/}
            {/*    </div>*/}
            {/*))}*/}


            <div className="w-100">
                <Link href="/menu?type=gyudon">
                    <button
                        type="button"
                        className="block w-full cursclassNameinter rounded-lg p-4 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200">
                        牛丼
                    </button>
                </Link>
                {/*<Link href="/menu?type=don">*/}
                {/*    <button*/}
                {/*        type="button"*/}
                {/*        className="block w-full cursclassNameinter rounded-lg p-4 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200">*/}
                {/*        丼*/}
                {/*    </button>*/}
                {/*</Link>*/}
                <Link href="/menu?type=karaage">
                    <button
                        type="button"
                        className="block w-full cursclassNameinter rounded-lg p-4 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200">
                        から揚げ
                    </button>
                </Link>
                <Link href="/menu?type=teisyoku">
                    <button
                        type="button"
                        className="block w-full cursclassNameinter rounded-lg p-4 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200">
                        定食
                    </button>
                </Link>
                <Link href="menu?type=okazu">
                    <button
                        type="button"
                        className="block w-full cursclassNameinter rounded-lg p-4 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200">
                        おかず(皿メニュー・サラダ)
                    </button>
                </Link>
                <Link href="menu?type=gentei">
                    <button
                        type="button"
                        className="block w-full cursclassNameinter rounded-lg p-4 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200">
                        期間限定
                    </button>
                </Link>
                <Link href="menu?type=curry">
                    <button
                        type="button"
                        className="block w-full cursclassNameinter rounded-lg p-4 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200">
                        カレー
                    </button>
                </Link>
                <Link href="menu?type=unagi">
                    <button
                        type="button"
                        className="block w-full cursclassNameinter rounded-lg p-4 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200">
                        うなぎ
                    </button>
                </Link>
                <Link href="menu?type=morning">
                    <button
                        type="button"
                        className="block w-full cursclassNameinter rounded-lg p-4 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200">
                        朝食
                    </button>
                </Link>
                <Link href="menu?type=kids">
                    <button
                        type="button"
                        className="block w-full cursclassNameinter rounded-lg p-4 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200">
                        お子様セット
                    </button>
                </Link>
                <Link href="menu?type=side">
                    <button
                        type="button"
                        className="block w-full cursclassNameinter rounded-lg p-4 text-left transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200">
                        サイドメニュー・お飲み物
                    </button>
                </Link>
            </div>

            &nbsp;&nbsp;
            <footer>
                <p>メニューバージョン : <Link href="https://www.yoshinoya.com/pdf/allergy/">Y182号</Link></p>
                &nbsp;
                <p>GitHub : <Link href="https://github.com/EndoMotoki/029">https://github.com/EndoMotoki/029</Link></p>
            </footer>


        </React.Fragment>
    );

}