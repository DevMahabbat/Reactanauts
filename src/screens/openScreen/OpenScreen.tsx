import { useContext, useEffect, useState } from "react";
import { FavoritesProvider } from "../../context/FavoritesContext"
import StartStack from "../../navigation/stack/start"
import TabMain from "../../navigation/tab"
import { FirstLoginContext } from "../../context/FirstLoginContext";
import { getUserCategories, removeAllUserCategories } from "../../utils/storage/usersSavedCategoriesHelper";
import axios from "axios";



const OpenScreen = () => {

    const [loading, setloading] = useState<boolean>(true);

    let { firstLogin, setFirstLogin } = useContext(FirstLoginContext);

    
    useEffect(() => {

        axios.get('10.0.2.2').then(res=>{
            console.log('unnecessary testind place data::',res.data);
        }).catch(err => {console.log(err);
        })


    },[])
    useEffect(() => {

        getUserCategories()
            .then(res => {
                if (res) {
                    setFirstLogin(false)
                    setloading(false);
                }
                else {
                    setFirstLogin(true);
                    setloading(false);
                }
            }).catch(err => {console.log(err);})

    }, [])

    if (loading) {
        return <></>
    }
    else {

        if (firstLogin){
            return(<StartStack />)}
        else{
            return(<>
            <FavoritesProvider>
                <TabMain />
            </FavoritesProvider>
        </>)}

    }
}

export default OpenScreen