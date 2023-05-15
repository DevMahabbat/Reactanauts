import { View, Text, FlatList, Pressable ,ScrollView,Image} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { BaseNetwork } from '../../network/api'
import { FavoritesContext } from '../../context/FavoritesContext'
import { Button } from 'react-native-paper'
import Wheather from '../../components/Onboarding/Wheather'
import { Kayd, Loc, Saat, Ulsuz } from '../../components/images'






const ExploreMain = () => {
    const sections = [
        {
          title: 'Restourants',
          data: [
            { id: 1, name: 'Restoran 1', photo: 'https://example.com/restoran1.jpg', rating: 4.5 },
            { id: 2, name: 'Restoran 2', photo: 'https://example.com/restoran2.jpg', rating: 3.8 },
            // Restoran verilerini buraya ekleyin
          ],
        },
        {
          title: 'Hospital',
          data: [
            { id: 1, name: 'Hastane 1', photo: 'https://example.com/hastane1.jpg', rating: 4.2 },
            { id: 2, name: 'Hastane 2', photo: 'https://example.com/hastane2.jpg', rating: 4.7 },
            // Hastane verilerini buraya ekleyin
          ],
        },
        // Diğer bölümleri buraya ekleyin
      ];
      
    let { favorites, setFavorites } = useContext(FavoritesContext);

    const [products, setproducts] = useState<any[]>([]);

    useEffect(() => {

        let baseService = new BaseNetwork();
        baseService.getAll('products').then((response) => {
            setproducts(response);
        })

    }, [])

    const favOperation = (item: any) => {

        let favControl = favorites.find((favItem) => favItem.id === item.id);
        if (!favControl) {
            setFavorites([...favorites, item])
        }
        else {
            let filteredFavorites = favorites.filter(q => q.id != item.id)
            setFavorites([...filteredFavorites])
        }

    }


  
    const renderItem = ({ item }: any) => (
        <View>
          <View style={{ flexDirection: 'column', alignItems: 'center', padding: 40 }}>
            <View style={{ position: 'relative' }}>
              <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/K2_8611.jpg' }}
                style={{ width: 240, height: 200 }}
              />
              <View style={{ position: 'absolute', top: 0, left: 0 ,marginLeft:180,backgroundColor:"black",padding:10,borderRadius:100,marginTop:10}}>
                <Kayd />
              </View>
            </View>
            <View style={{flexDirection:"row",marginTop:20,gap:35}}>
              <View style={{flexDirection:"row"}}>
              <Loc/>
                <Text>4 km</Text>
              </View>
                <Saat/>
                <View style={{flexDirection:"row"}}>
                <Ulsuz/>
              <Text style={{ fontSize: 14 }}>Puan: {item.rating}</Text>
                </View>
            </View>
          </View>
        </View>
      );
      
    

    return (
        <View style={{flex:1,backgroundColor:"#1C1C1C"}}>
              <Wheather/>
            
     <ScrollView>
      {sections.map((bolum, index) => (
        <View key={index} >
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 10 }}>{bolum.title}</Text>
          <FlatList
            data={bolum.data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            contentContainerStyle={{ paddingHorizontal: 10 }}
          />
        </View>
      ))}
    </ScrollView>
           
        </View>
        
            
          
    
    )
    

};


export default ExploreMain