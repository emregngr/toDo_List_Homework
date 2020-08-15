import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button } from '../components'
import { connect } from 'react-redux'
import { addList } from '../actions/listactions'
import DatePicker from 'react-native-datepicker'

const AddList = (props) => {

    const [id, setId] = useState()
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [date, setDate]= useState()

    return (
        <View style={styles.container}>
            
            <Input placeholder={'Title'}
                value={title}
                onChangeText={(value) => setTitle(value)} />
            
            <Input placeholder={'Description'}
                value={description}
                multiline
                onChangeText={(value) => setDescription(value)} />
            
            <DatePicker style={{marginBottom: 20}}
                 confirmBtnText="Confirm"
                 cancelBtnText="Cancel"
                 value={date}
                 onDateChange={(value) => setDate(value)}

            />

            <Button 
            text={'Add'}
            style={{ height: 40 }} 
            onPress={() => {
            
                if (title != '' && description != '') { 
                    let object = {
                        id,
                        title,
                        description,
                        date
                    };
                    props.addList(object)
                    props.navigation.pop();
                }
                else {
                    alert('Warning',
                    'Please fill in all fields!');
                }

            }} />
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 10,
        flex: 1
    }});

const mapStateToProps = ({ listResponse }) => {
    const { list, id } = listResponse;
    return { list, id };
};
export default connect(mapStateToProps, { addList })(AddList);