import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Image from "../assets/nature.jpg";
import Register from "./Register";

function Blog() {
  const params = useParams();
  console.log(params);
  const [Loading, setLoading] = useState(false);

  const Data = {
    index: 2,
    uid: 1,
    category: 'Nature',
    name: "M. Irtaza Ghaffar",
    title: `I'm Pakistani and also a Patriot`,
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, dolor nesciunt architecto eius veniam nam itaque minus perferendis dicta iste.`,
    time: "01-01-2023",
    content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint obcaecati soluta temporibus, nisi repellendus ab ullam tempora dolorem aperiam voluptate, hic maxime ad sapiente a ipsam libero dicta officiis quo aut ipsa iste ratione iure tempore? Incidunt doloribus praesentium provident reprehenderit numquam! Harum quidem, asperiores ad quo quaerat mollitia id. In, consectetur, alias asperiores repudiandae neque numquam praesentium hic odio, delectus ipsa temporibus consequatur nulla inventore aliquam corrupti! Aspernatur perferendis ut maiores. Earum, exercitationem natus! Voluptatum explicabo rerum, a iure architecto neque praesentium nisi repellendus, ex repudiandae facere harum dolorem. Cumque nihil consequuntur quis, saepe natus odit eveniet ipsa totam dignissimos fugiat quae adipisci ducimus recusandae at, autem perferendis illum laboriosam sequi dolore dicta aspernatur, culpa repudiandae. Fuga fugit iusto quod dignissimos eum blanditiis dolor cupiditate perferendis aliquid harum, repellendus veniam hic dolorum assumenda rem corporis incidunt at aliquam placeat ab laboriosam dolore doloremque! Accusantium veniam laboriosam optio, non iure vitae aspernatur rem rerum molestias quis ad molestiae debitis tenetur. Asperiores quisquam facere consectetur assumenda in nemo iste perspiciatis, cumque accusamus esse impedit natus cum voluptates blanditiis eveniet, quo itaque nostrum alias maxime voluptate dolores. Facere deserunt amet id animi sit tempore omnis consequuntur corrupti perferendis excepturi est rerum temporibus tempora, debitis dignissimos provident? Explicabo vitae quasi exercitationem animi impedit esse voluptatem totam saepe, nesciunt laboriosam placeat voluptates! Itaque eos pariatur quo animi quidem incidunt, accusantium tempora quia cum necessitatibus sequi magnam velit ea. Maiores error, debitis suscipit commodi vitae eum hic laborum dignissimos impedit totam nisi minus odio. Iusto provident obcaecati fuga cumque est sunt harum deserunt labore animi voluptates iure, non rerum! Eaque, possimus. Modi, placeat unde sit minima eum sunt possimus beatae voluptate id autem eveniet veniam rem culpa amet nihil vero, blanditiis quaerat, saepe nam doloribus at incidunt fugit? Eaque saepe quibusdam cumque at! Nostrum dolorem fuga consequatur itaque quas assumenda quidem possimus voluptatum eaque quibusdam ullam totam ipsam atque dignissimos velit, aperiam, qui, deserunt officia sunt magni eum incidunt. Nihil harum dolorem rem ex! Tempora similique, nam eligendi culpa placeat voluptas consequuntur. Asperiores, vitae sed voluptatem eligendi aut vero, hic, modi harum ipsam dolores saepe dignissimos! Labore, quam! Suscipit, odio! Facere quisquam culpa enim totam neque nam iusto beatae repudiandae sequi! Quasi maxime pariatur quisquam asperiores expedita est rerum sit nihil reiciendis quibusdam iusto modi ut aperiam consectetur reprehenderit repudiandae, doloremque nobis harum, adipisci eligendi. Asperiores aperiam illum et vero recusandae mollitia velit amet dignissimos veritatis non magnam placeat molestiae ut necessitatibus possimus iusto commodi explicabo, enim quisquam, numquam tempora blanditiis exercitationem quidem quasi. Quis possimus dignissimos odit incidunt error tempore ullam placeat quaerat exercitationem quos neque tenetur sapiente at, qui consectetur corporis, amet eum reprehenderit, maiores quo fuga quas? Repellat a laborum illo? Commodi asperiores hic adipisci, laudantium numquam ullam autem saepe dolorum. Quidem voluptatibus sit dolorum quas placeat quaerat sed repellendus exercitationem, impedit architecto doloremque amet voluptatem libero maiores consequatur porro. Itaque nam molestias ducimus unde iste. Hic porro modi reiciendis dolores sint id ad optio tempore officia ratione! Temporibus, doloribus expedita praesentium, cum rem omnis sapiente, ad officiis aperiam molestias ipsum! Beatae ipsum repellendus accusantium porro, saepe eos quisquam. Suscipit obcaecati eos tempora, libero quis nulla rerum ipsam fuga magnam odio ad asperiores ea labore voluptate, minus autem tenetur amet. Quae natus odio sequi esse, iste repellendus fugiat ex. Assumenda culpa quod, illo autem architecto dolorem fugiat amet distinctio rerum obcaecati veritatis?`,
  };
  return Loading ? (
    <div class="flex items-center justify-center" style={{ height: "85vh" }}>
      <div role="status">
        <svg
          aria-hidden="true"
          class="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  ) : (
    <div className="flex mobile:flex-col laptop:flex-row">
      <div className="p-20 md:p-20 mobile:p-5 laptop:w-3/4">
        <i className="text-sm">
          Article: &nbsp;#
          {Data.index}
        </i>
        <br />
        <i className="text-sm">
          Category: &nbsp;
          {Data.category}
        </i>
        <h1 className="text-3xl pb-10 pt-2">{Data.title}</h1>
        <p>{Data.desc}</p>
        <div className="py-10">
          <b>
            <Link to={`/user/${Data.uid}`}>
            {Data.name}
            </Link>
          </b>
          <br />
          <i>{Data.time}</i>
        </div>
        <img src={Image} alt="image" className="tablet:w-1/2" />
        <div
          dangerouslySetInnerHTML={{ __html: Data.content }}
          className="py-10"
        />
      </div>
      <div className="bg-slate-200 mobile:h-[900px] laptop:w-[25%] tablet:mx-20 laptop:my-20 laptop:mx-10 flex flex-col items-center justify-center">
        <Register />
      </div>
    </div>
  );
}

export default Blog;
