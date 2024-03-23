import Layout from '@/src/app/layout-page/Layout'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

type Pokemon = {
  name: string
  url: string
}

export const getServerSideProps: GetServerSideProps<{ pokemons: Pokemon[] }> = async () => {
  // Fetch data from external API
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=1')
  const data = await res.json()
  const pokemons: Pokemon[] = data.results
  console.log(data);
  
  // Pass data to the page via props
  return { props: { pokemons } }
}

export default function Page({
  pokemons,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div style={{ overflow: "hidden" }}>
      <Layout>
        <div
          style={{
            paddingRight: "5vh",
            paddingLeft: "5vh",
            maxHeight: "70vh",
            overflowY: "scroll",
            borderBottom: "white solid 3px",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontSize: "7vh",
              fontFamily: "monospace",
            }}
          >
            Tous les Pokemons
          </h1>

          {pokemons.length > 0 && (
            <ul
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "50px",
              }}
            >
              {pokemons.map((pokemon: Pokemon, index: number) => (
                <li key={index} style={{ listStyleType: "none" }}>
                  <div>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={pokemon.name} />
                    <p>{pokemon.name}</p>
                    <p>{pokemon.url}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <Pagination
            style={{ color: "yellow" }}
            count={50}
            page={initialPage}
            onChange={changePage}
          /> */}
        </div>
      </Layout>
    </div>
  );
}
