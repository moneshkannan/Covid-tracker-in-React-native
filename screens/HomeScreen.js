import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card, Button, Icon, Input } from "react-native-elements";
import axios from 'axios'
import Cardcomponent from '../components/Cardcomponent';

const HomeScreen = () => {
    const [district, setdistrict] = useState({})
    const [search, setsearch] = useState('')
    const dataURL = "https://api.covid19india.org/v4/min/data.min.json"
    
        const submit = (value) => {
            let key = value;
            axios.get(dataURL)
        .then(
            res => {
                console.log(res.data.TN.districts[key].total)
                setdistrict(res.data.TN.districts[key].total)
                
            }
        )
        .catch(err => {console.log(err)})
        }
        
    
    
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
      }

    return (
        <View>
            <Input 
            placeholder="Search Any Districts in Tamil Nadu" 
            value={search} 
            onChangeText={(text) =>{setsearch(text)}}
            />
            <Button title="search" style={{width:200}} onPress={() =>{submit(capitalize(search))}}/>
            <Cardcomponent
            district = {capitalize(search)}
            confirmed = {district.confirmed}
            death = {district.deceased}
            recovered = {district.recovered}
            tested = {district.tested}
             />
             <View style={{alignItems:"center"}}>
             <Text>Developed by Monesh</Text>
             <Text>Stay Home & Stay Safe</Text>
             </View>
             
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
