export function AboutDoctor() {

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col md:flex-row w-11/12 mx-auto py-6 gap-10">
      {/* Sidebar */}
      <aside className="md:w-1/4 w-full p-5 rounded-xl h-fit sticky top-20">
        <h2 className="font-semibold text-lg mb-3">Table of Contents:</h2>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => scrollToSection("dr-beno-jir")}
              className="link link-hover text-green-700 hover:font-semibold"
            >
              About Dr. Benojir
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("homeopathy")}
              className="link link-hover text-green-700 hover:font-semibold"
            >
              About Homeopathy
            </button>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="md:w-3/4 w-full space-y-12 leading-relaxed">
        {/* Dr. Benojir Section */}
        
        <section id="dr-beno-jir" className='scroll-mt-24'>
          <h1 className="text-2xl font-bold mb-4 text-green-800">
            Who is Dr. Benojir?
          </h1>
          <p className="text-justify">
            Greetings and peace be upon all of you! I am Dr. BM Benojir Ahmed, the
            Director of the Bangladesh Public Administration Training Centre , a prestigious Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo est doloribus autem id, possimus cumque temporibus animi, labore enim voluptatem laudantium expedita harum esse sapiente. Enim expedita alias maiores minima eaque, aut ex, natus neque, obcaecati non est fugit aspernatur id labore fugiat veniam consectetur. Itaque adipisci eum molestiae voluptas, iste vel dolorem cum tempora nisi quo unde odit libero dignissimos neque soluta et obcaecati repellat nulla, alias ad voluptates numquam saepe architecto. Dolorum vel itaque excepturi praesentium accusamus voluptas harum accusantium quibusdam, assumenda quas exercitationem cum eius aliquid repudiandae ipsam dignissimos magnam, sapiente tempore ab minima et perferendis, possimus voluptate. Consectetur hic error numquam. Magnam, unde ipsa incidunt mollitia inventore blanditiis odio necessitatibus delectus nam est suscipit culpa dignissimos hic soluta consectetur et libero, cumque accusamus commodi cupiditate cum obcaecati dolor. Esse sit eius cumque consectetur odio ab non harum ducimus fugit error aliquid molestiae illo repellat, temporibus dicta.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">
            Why Did I Become a Homeopath?
          </h2>
          <p className="text-justify">
            My journey into homeopathy began from personal struggle Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus harum culpa ullam soluta vitae pariatur perferendis tenetur repellendus ab voluptatem. Debitis non animi quos amet nostrum dolorum deserunt eius reprehenderit modi blanditiis dicta laborum labore iste nisi repellendus, temporibus aut est asperiores nam consequuntur iure aliquid magnam. Dolorem culpa nam, excepturi pariatur, saepe quo eligendi rem voluptate minus atque, dicta quae ullam ipsum! Ea quisquam laborum libero provident saepe omnis. Id culpa qui aliquid obcaecati? Fugit exercitationem rem dignissimos similique quam voluptatem animi libero eius omnis dolor iure maxime, id illo ipsa vel veritatis sint, accusantium tempora, recusandae veniam ut provident error. Unde neque maxime incidunt aspernatur ipsa beatae. Aspernatur modi blanditiis esse accusamus qui tempore obcaecati architecto libero eligendi deserunt, vero delectus unde voluptatem quisquam distinctio maiores sit excepturi rem voluptate veritatis ullam? Autem, vel. Inventore nesciunt itaque cum totam natus, porro hic commodi recusandae aut autem quasi beatae animi minus pariatur omnis! Explicabo vel cum commodi hic quos earum quidem corrupti amet autem praesentium numquam quibusdam quasi eius suscipit laudantium, nisi distinctio voluptatem quam ea. Voluptates qui officiis sit mollitia dolores omnis incidunt aut quasi illum hic, saepe porro nulla nobis magni quis explicabo sed debitis laborum veritatis nemo aliquid sunt dicta libero! Velit iusto harum porro accusamus voluptatibus pariatur, commodi molestiae error iure similique repellat, consequuntur minus debitis architecto tempore, blanditiis soluta cumque. Consequuntur recusandae rerum nisi ratione ducimus qui nulla numquam facilis, ullam iure labore hic delectus excepturi quisquam quod quae impedit veniam obcaecati reiciendis veritatis libero doloremque deserunt! Quos autem pariatur eveniet necessitatibus assumenda sequi expedita? Saepe earum mollitia unde asperiores ea facere explicabo at reprehenderit recusandae necessitatibus! Hic ex sapiente architecto esse velit provident amet expedita rem itaque illum culpa tenetur adipisci id sunt possimus dicta harum, nihil a eaque error. Voluptatibus, modi. Quisquam.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">
            Why Should You Listen to Me?
          </h2>
          <p className="text-justify">
            I understand the struggles of imbalanced health because I’ve been
            there myself Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magnam iste consequatur error nostrum veritatis enim, at rem tempora quod dolor quia ducimus fuga recusandae iure temporibus quas deserunt, dolorem doloribus eos voluptas tenetur. Repellendus amet harum, delectus error sapiente repellat neque dignissimos vel! Est consectetur reprehenderit ipsum neque officia adipisci pariatur reiciendis obcaecati doloremque recusandae? Magnam, explicabo, voluptatibus aspernatur corrupti vel quo laboriosam labore molestiae consectetur, pariatur quisquam alias perferendis id quos. Dolores nostrum quod commodi. Quisquam ipsa eos consectetur, eius quasi soluta at quod itaque. Placeat nemo, iusto, rem enim in expedita reprehenderit, voluptatum harum saepe necessitatibus beatae voluptatem nesciunt et. Nostrum eaque ratione minima quae tempore quidem maiores blanditiis dignissimos, commodi fuga. Alias voluptatibus voluptate maiores unde numquam molestiae placeat at nam similique culpa, vel, animi veritatis? Asperiores debitis nisi consectetur non nemo voluptas, nesciunt doloremque corporis at temporibus assumenda qui dolor adipisci quaerat inventore fugit quis?
          </p>
        </section>

        {/* Homeopathy Section */}
        <section id="homeopathy" className='scroll-mt-24'>
          <h1 className="text-2xl font-bold mb-4 text-green-800">
            Introduction to Homeopathy: A Natural Path to Healing
          </h1>
          <p className="text-justify">
            Homeopathy is a natural branch of medicine that has been practiced for
            over 225 years. It operates on the principle of “like cures like”... Lorem ipsum dolor sit amet consectetur adipisicing elit. A distinctio libero mollitia autem excepturi tempora necessitatibus, aut dolorem itaque minus dolores! Mollitia impedit tenetur dignissimos blanditiis, eos architecto rerum id voluptates sint fugit excepturi quidem reiciendis aut at reprehenderit officiis molestiae commodi tempore porro in. Explicabo nihil quidem sequi provident voluptatum? Recusandae illo rem a? Cumque magni rerum laudantium vero? Voluptatem, quod quaerat labore, consequatur quae quisquam, amet omnis mollitia vitae in laudantium deleniti a dolore numquam commodi maxime aspernatur expedita veritatis ut facere natus eos eius iusto. Voluptates est maiores fuga incidunt ex? Ipsa qui vero nobis quis culpa soluta sit esse possimus placeat adipisci asperiores in, error ratione, at reiciendis aspernatur enim consequuntur voluptatibus non! Veritatis fugit harum in cumque praesentium laboriosam minima! Cupiditate eos quia fugit provident dolore quam pariatur tenetur dignissimos suscipit placeat sed explicabo maxime nesciunt dicta recusandae, laboriosam ad vero. Sit, eaque officia. Itaque, enim! Excepturi delectus eius harum reprehenderit officiis commodi ratione illum dignissimos. Voluptatibus nemo veritatis quos ipsum doloribus unde atque, consequuntur obcaecati illum incidunt ad ipsa soluta, dolor hic rerum? Fugiat eius optio commodi doloribus. Corporis nesciunt quae iusto, magnam placeat facilis accusantium, consequatur velit ab nulla, eos eligendi maiores nam.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">
            The Birth of Homeopathy: Tracing Its Roots
          </h2>
          <p className="text-justify">
            The concept of "like cures like" has ancient origins, dating back to
            Hippocrates Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus laborum eius praesentium natus voluptates, quasi omnis eum ipsum quos ratione excepturi? Qui, at! Rem officia harum velit, suscipit ipsum voluptates corporis magni asperiores maiores modi debitis dolores obcaecati fugit eligendi eum ipsa exercitationem. Dolor sunt dolore culpa ducimus assumenda mollitia numquam vero quidem itaque! Quasi ratione esse facere ex voluptatibus molestiae illum quibusdam consequatur asperiores, explicabo ipsa dolorum eius doloribus blanditiis assumenda fugit minima laborum, earum velit temporibus, nihil rerum iste voluptates? Tenetur et debitis consectetur architecto, officia quas sunt velit suscipit dolorem minima animi autem placeat qui magnam aspernatur, vitae nisi voluptatibus deleniti esse ipsa eius aut. Nihil dolore ut aut eius ipsa magnam harum odit voluptatibus saepe, delectus suscipit cumque veniam non eos voluptatem neque quae minima. Rem quis quia alias corporis dignissimos dolore distinctio illum molestiae aut maxime necessitatibus provident minima, dolorem accusantium incidunt, blanditiis fugit adipisci suscipit? Expedita at autem eum iusto. A ut laboriosam tempora pariatur provident libero similique praesentium itaque quasi voluptatibus earum quae aperiam adipisci, dolorem, cum exercitationem! Nostrum odio ad voluptas error sunt, inventore veritatis magnam aliquid, dignissimos nisi officia quod modi rerum mollitia tenetur rem odit! Dolore fugiat dolor cupiditate totam?
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">
            Dr. Samuel Hahnemann: The Visionary Behind Homeopathy
          </h2>
          <ul className="list-decimal list-inside space-y-2">
            <li>Healing follows natural laws, and true medical cures align with these laws.</li>
            <li>Diseases don’t exist as separate entities...</li>
            <li>Illnesses are dynamic, so the remedy must also be dynamic...</li>
          </ul>
        </section>
      </main>
    </div>
  );
}