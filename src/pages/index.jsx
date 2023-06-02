//  react
import { useEffect, useState } from 'react'

// styles
import styles from '@styles/Home.module.css'

//components
import Logo from '@components/Logo'
import { Avatar } from '@mui/material'
import SearchAppBar from '@src/components/SearchBar'

// providers
import { useDb } from '@providers/DbProvider'

export default function Home() {
  const [categories, setCategories] = useState([
    'JavaScript',
    'Assemby',
    'Python',
    'C#',
    'Java',
    'Sell',
    '.NET',
  ])

  const [videoOnPlayer, setVideoOnPlay] = useState(false)

  const { db, setDb } = useDb()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/videos')
        const data = await response.json()
        setDb(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

  

  return (
    <div className={styles.app}>
      <header>
        <nav>
          <Logo />
          <SearchAppBar />
          <Avatar />
        </nav>

        {/* todo implement skeleton */}
        <ul className={styles.categories}>
          {categories.map((category) => {
            return <li key={category}>{category}</li>
          })}
        </ul>
      </header>

      {/* todo implement skeleton */}
      <main>
        <h1>{videoOnPlayer ? 'Video Player' : 'Video List'}</h1>
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            asperiores esse voluptas corporis? Laboriosam consequatur optio
            ratione voluptatibus quas cum, consequuntur dicta repellendus eos
            distinctio voluptates eaque esse, numquam sequi.
          </li>
          <li>
            Ipsam, soluta laudantium. Voluptate dolore maiores ea reprehenderit
            illo itaque aliquid quo ratione eos? Aspernatur recusandae
            laboriosam iste officiis nostrum assumenda voluptates, autem,
            provident pariatur fugiat ipsa numquam. Numquam, possimus.
          </li>
          <li>
            Optio magni perferendis delectus molestias, fuga voluptatum velit
            eius excepturi minus ratione laudantium, fugiat magnam officia
            possimus iure ad modi quae, libero nihil dignissimos necessitatibus
            maxime tempora beatae quibusdam. Iste?
          </li>
          <li>
            Culpa vitae odit ex ullam in repudiandae mollitia! Voluptatibus sint
            labore aperiam repellat ducimus molestias expedita aut ex tempora.
            Et sapiente reprehenderit mollitia sint sunt veritatis perspiciatis
            voluptatem quas reiciendis?
          </li>
          <li>
            Tenetur iure omnis ipsum odio aut atque iste rerum voluptates
            reprehenderit voluptatibus delectus praesentium sunt nam a autem
            accusantium accusamus unde modi suscipit dolore incidunt, laboriosam
            tempore eum? Qui, sit.
          </li>
          <li>
            Et quod cumque aut excepturi, laborum, iste sunt inventore obcaecati
            itaque, provident asperiores porro hic iusto doloremque corrupti!
            Perspiciatis rem animi fuga aliquid, deleniti explicabo voluptatem
            voluptas est assumenda hic.
          </li>
          <li>
            Nobis eveniet quasi sequi at dolorem! Doloribus laboriosam velit
            omnis repellat minus expedita vel earum veritatis neque itaque,
            sequi saepe obcaecati quisquam ipsam totam quod odit debitis
            recusandae optio. Eligendi.
          </li>
          <li>
            Animi similique quasi aliquid molestiae alias distinctio assumenda
            enim adipisci molestias omnis reprehenderit qui non asperiores
            minima illo impedit delectus voluptates commodi, nihil error? Sit
            quis sunt nihil tempore dolores.
          </li>
          <li>
            Consectetur unde voluptas hic id modi accusamus. Facere hic eius
            ducimus accusamus. Atque cupiditate id dolorem enim, repellat vero
            possimus exercitationem minima, dicta impedit quidem quo facilis.
            Perferendis, excepturi architecto.
          </li>
          <li>
            Ipsa adipisci suscipit odio et vero ullam sequi nam accusamus! Odio
            placeat maxime iste, optio sequi praesentium minima. Necessitatibus
            repudiandae voluptatibus eaque dolorem id iusto maiores reiciendis
            facere vero veniam.
          </li>
          <li>
            Ea, praesentium laudantium doloremque consectetur perspiciatis ipsam
            sunt voluptates! Est quae at odit aperiam perferendis ipsum harum
            voluptas cum blanditiis iste numquam, aliquid quibusdam iure sit
            hic? Magnam, vero ipsa.
          </li>
          <li>
            Dolore, maxime recusandae. Quia maiores, quae ex nesciunt sit
            voluptatem quod eius atque accusamus minus provident quibusdam sunt
            veritatis eos facilis. Eum, odio. Libero exercitationem, fugiat
            nostrum hic maiores quae.
          </li>
          <li>
            Laudantium quo inventore iusto sunt minus beatae consequatur neque.
            Dicta, atque. Iusto, perspiciatis recusandae. Eum blanditiis saepe,
            aperiam sequi illo quos maxime consequuntur velit odio quod pariatur
            unde sint omnis!
          </li>
          <li>
            Repellendus esse eaque consequuntur amet cupiditate omnis? Vel
            voluptatibus ratione tempore cupiditate ut, amet ex molestias hic
            beatae necessitatibus! Odit temporibus ullam doloremque vitae rem
            fuga dolores provident reprehenderit? Modi!
          </li>
          <li>
            Ab illo, non, eaque quam eum rerum provident pariatur quibusdam
            tempore ea in temporibus ut nisi? Obcaecati officia non eum, tenetur
            beatae fugiat aut cum deleniti voluptates ipsa, incidunt
            perferendis.
          </li>
          <li>
            Officia magni eaque recusandae nulla? Quo eius, eum deleniti
            consequuntur incidunt odit dolore adipisci sunt velit sit! Similique
            delectus optio quam explicabo magni laboriosam a ducimus impedit
            odio. Excepturi, dolorem?
          </li>
          <li>
            Dolores, odio quae! Accusamus suscipit corporis minus maiores
            dignissimos ea aperiam atque cum quidem officia eaque, blanditiis
            fugit repellendus necessitatibus, magnam ullam beatae dicta eum!
            Mollitia veniam rem molestiae exercitationem!
          </li>
          <li>
            Consequatur facilis, nemo doloribus natus libero distinctio qui
            aspernatur, repellat quam omnis, nobis non sint molestiae.
            Repudiandae delectus exercitationem aspernatur velit animi sequi
            eveniet, vero temporibus, magni eligendi odio est.
          </li>
          <li>
            Quae veniam ullam aliquid harum praesentium doloribus, iste,
            temporibus iusto accusamus error dolorem tempore enim? Mollitia
            accusamus illo maxime rerum facere? Sit, sunt! Ducimus cumque illo
            soluta id hic ullam?
          </li>
          <li>
            Voluptate necessitatibus, nostrum tempore deserunt quaerat autem et,
            soluta sapiente animi corporis aliquam eveniet molestiae unde
            maiores omnis error odio quidem consectetur ab. Consequuntur
            accusamus tenetur veritatis, cumque aut in!
          </li>
          <li>
            Molestiae hic sequi perspiciatis vitae, similique incidunt qui
            doloribus laborum praesentium deleniti dolor, ea magni dolorum
            facere. Hic illo esse distinctio! Consequuntur, aperiam. Enim soluta
            expedita, animi molestiae laboriosam velit!
          </li>
          <li>
            Ducimus officiis sed, dolorem recusandae amet asperiores assumenda.
            Minima officia sed ducimus praesentium aliquid id autem atque velit
            ratione quisquam voluptatibus ipsam repellat nobis, odio dolores
            quis fugit culpa dignissimos.
          </li>
          <li>
            Odit facere veritatis aliquid vel tenetur explicabo vitae
            voluptatibus reiciendis dolore sequi aut laboriosam veniam soluta
            delectus, id reprehenderit ex? Doloribus voluptas et fugit iure
            corporis inventore tenetur amet cupiditate?
          </li>
          <li>
            Ipsum aut natus maxime, mollitia ad quas recusandae dolore
            asperiores culpa, provident possimus pariatur libero aspernatur
            labore nisi! Blanditiis consequuntur, temporibus tempora eius
            tenetur nobis mollitia quos. Pariatur, doloribus possimus!
          </li>
          <li>
            Fugiat necessitatibus totam repudiandae aperiam! Aliquid quae dolore
            aperiam, amet, provident a sed consectetur ratione nihil minus
            soluta fuga quia quas neque. Voluptatibus illum optio suscipit
            possimus eum neque a!
          </li>
        </ul>
      </main>
    </div>
  )
}
