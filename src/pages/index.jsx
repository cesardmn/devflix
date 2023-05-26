// next
import Head from 'next/head'

// components
import Layout from '@src/components/Layout'
import CardVideoList from '@src/components/CardVideoList'
import { useEffect, useState } from 'react'

//providers
import { useVideos } from '@providers/VideosProvider'
import { useCategoryFilter } from '@providers/CategoryFilterProvider'

export default function Home() {
  const { videos, setVideos } = useVideos()
  const { categoryFilter } = useCategoryFilter()

  useEffect(() => {
    const videos = [
      {
        id: 'lUa-ZDcTnt4',
        title: 'Como Aprender Java, passo a passo!',
        description:
          '5 Dicas Infalíveis de como aprender Java em 2023\n➡…ia.\n\nSó fracassa quem desiste 💪\n\nEmerson Machado',
        thumb: 'https://i.ytimg.com/vi/lUa-ZDcTnt4/sddefault.jpg',
        cat: 'Java',
      },
      {
        id: 'aQbCSyvnYs0',
        title: 'Java ou Kotlin - Qual ESCOLHER em 2023?',
        description:
          'Java ou Kotlin - Qual vale a pena Estudar em 2023?…ia.\n\nSó fracassa quem desiste 💪\n\nEmerson Machado',
        thumb: 'https://i.ytimg.com/vi/aQbCSyvnYs0/sddefault.jpg',
        cat: 'Java',
      },
      {
        id: 'Ptbk2af68e8',
        title: 'O que o JavaScript é capaz de fazer? - Curso JavaScript #01',
        description:
          'Você sabe para que serve a linguagem JavaScript / …oemVideo #JavaScript #EcmaScript #MóduloC #Aula01',
        thumb: 'https://i.ytimg.com/vi/Ptbk2af68e8/sddefault.jpg',
        cat: 'JavaScript',
      },
      {
        id: 'QnLSBuykGxI',
        title: 'O que é Javascript? Por que devemos saber hoje? O que ele faz?',
        description:
          'Quer se aprofundar mais? Aproveite o desconto na A…funciona?\n07:03 - Javascript é Java?\n07:21 - APIs',
        thumb: 'https://i.ytimg.com/vi/QnLSBuykGxI/sddefault.jpg',
        cat: 'JavaScript',
      },
      {
        id: 'Dp-biEtYiO4',
        title: 'O que Estudar p/ Trabalhar com Python [GUIA Completo]',
        description:
          'Quer Viver de Python e Automação? Matricule-se➡ ht…------------------------\njhonatan@devaprender.com',
        thumb: 'https://i.ytimg.com/vi/Dp-biEtYiO4/sddefault.jpg',
        cat: 'Python',
      },
      {
        id: 'Mp0vhMDI7fA',
        title: 'Curso Python #02 - Para que serve o Python?',
        description:
          'De onde vem o Python? Por que esse nome? Quais são…le+: http://plus.google.com/112666558837414979080',
        thumb: 'https://i.ytimg.com/vi/Mp0vhMDI7fA/sddefault.jpg',
        cat: 'Python',
      },
      {
        id: 'H43fXodv6WY',
        title: 'PHP vale a pena? (minha opinião sincera)',
        description:
          '✅ 𝗔𝗚𝗢𝗥𝗔 𝗘𝗨 𝗧𝗘𝗡𝗛𝗢 𝗨𝗠 𝗖𝗨𝗥𝗦𝗢 😍\n▸ …conseguir um Emprego\nhttps://youtu.be/fYR9L2ZmodM',
        thumb: 'https://i.ytimg.com/vi/H43fXodv6WY/sddefault.jpg',
        cat: 'PHP',
      },
      {
        id: 'AqDj3OSV0mM',
        title:
          'PHP (A linguagem mais querida da internet?) // Dicionário do Programador',
        description:
          '🤝 𝗛𝗢𝗦𝗧𝗚𝗔𝗧𝗢𝗥 → https://codft.me/HGAqDj3OS…Alves\n\n#PHP #Programacao #DicionarioDoProgramador',
        thumb: 'https://i.ytimg.com/vi/AqDj3OSV0mM/sddefault.jpg',
        cat: 'PHP',
      },
    ]
    setVideos(videos)
  }, [])

  return (
    <>
      <Head>
        <title>DEVFLIX</title>
        <meta name="description" content="Bucket of develpers video links" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="app">
        <Layout>
          <CardVideoList />
        </Layout>
      </div>
    </>
  )
}
