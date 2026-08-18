import { ScrollView, ScrollViewComponent, View, Text } from 'react-native'
import { ListStyles } from './ListStyles'
import { Item } from '../OSitem/Item'
import { useEffect, useState } from 'react'
import { Header } from "../header/Header";
import Footer from "../footer/Footer";
import axios from 'axios'

export const Lista = () => {

    const [listaOs, setListaOs] = useState([
        {
            numero: "001",
            status: "Aberta",
            titulo: "Vazamento hidráulico no Bloco B",
            descricao:
                "Há um vazamento constante de água por baixo da pia do banheiro masculino do segundo andar do Bloco B..."
        },
        {
            numero: "002",
            status: "Aberta",
            titulo: "Vazamento hidráulico no Bloco B",
            descricao:
                "Há um vazamento constante de água por baixo da pia do banheiro masculino do segundo andar do Bloco B..."
        },
    ])

    //     const getTask = async() => {
    //         try {
    //             //endereço de servidor (protocolo://endereçoDoServidor:porta/endpoint)
    //             const APIreturn = await axios.get(`${api}/taskpoint`)
    //             const APIdata = APIreturn.data
    //             setListaOs(APIdata)
    //         } catch (error) {
    //             console.log("Deu erro na API")
    //             console.log(error)
    //         }
    //     }

    //     useEffect(() => {
    //    try {
    //     getTask()
    //    } catch (error) {
    //     console.log(error)
    //    }
    //    }, [])

    return (
        <View style={ListStyles.conteiner}>
            <Header />
            <ScrollView>
                {listaOs.map((os) => {
                    return <Item
                        key={os.numero}
                        numero={os.numero}
                        status={os.status}
                        titulo={os.titulo}
                        descricao={os.descricao}
                    />
                })
                }
            </ScrollView>
            <Footer />
        </View>
    )
}