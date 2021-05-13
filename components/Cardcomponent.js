import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card, Button, Icon } from "react-native-elements";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const Cardcomponent = ({district, confirmed, death, recovered, tested}) => {
    return (
        <Card>
            <Card.Title>{district}</Card.Title>
            <Card.Divider/>
            <Card.Image source={{
            uri:"https://ane4bf-datap1.s3-eu-west-1.amazonaws.com/wmocms/s3fs-public/advanced_page/featured_media/Coronavirus_Covid-19.png?vCjLR.RArC5_6o55iUgPMiFGiHw4P2ne",
            height: 300,
            width: 200
            }}
            />
            <View style={{}}>
            <Text 
            style={{marginBottom: 10, fontSize:15, fontWeight:"500"}}>
                <SupervisorAccountIcon style={{verticalAlign:"middle",paddingRight:5, color:"red"}}/>
                Confirmed Cases : {confirmed}
            </Text>
            
            
            <Text style={{marginBottom: 10, fontSize:15, fontWeight:"500"}}>
                <LocalHospitalIcon style={{verticalAlign:"middle",paddingRight:5, color:"green"}}/>
                Recovered : {recovered}
            </Text>
            <Text style={{marginBottom: 10, fontSize:15, fontWeight:"500"}}>
                <MoodBadIcon style={{verticalAlign:"middle", paddingRight:5, color:"orange"}}/>
                Fatal : {death}
            </Text>
            <Text style={{marginBottom: 10, fontSize:15, fontWeight:"500"}}>
                <CheckCircleIcon style={{verticalAlign:"middle", paddingRight:5, color:"blue"}}/>
                Tested : {tested}
            </Text>
            {/* <Button
            icon={<Icon name='code' color='#ffffff' />}
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW' /> */}
            </View>

        </Card>
    )
}

export default Cardcomponent

const styles = StyleSheet.create({})
