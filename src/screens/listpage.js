import React, { useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView,
     KeyboardAvoidingView, FlatList, TouchableOpacity,
     Image, Alert } from 'react-native'
import{ Button } from '../components'
import { connect } from 'react-redux'
import { getList, updateList, deleteList, } from '../actions/listactions'

const ListPage = (props) => {

    useEffect(() => {
        props.getList()
    }, [])

    const deleteAlert = (item) =>
        Alert.alert(
            'Warning',
            'Do you really want to delete toDoList?',
            [
                {
                    text: "Ok",
                    onPress: () => props.deleteList(item)
                },
                {
                    text: "Cancel",
                    style: "cancel"
                },

            ],
            { cancelable: false }
        );



    const renderItem = ({ item }) => (
        <TouchableOpacity 
        style={styles.items} 
        onPress={() => {
            props.navigation.navigate('UpdateList')
        }}>
            <View style={styles.left}>
                
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            
            </View>
           
           <View style={styles.right}> 
                
            <TouchableOpacity 
            onPress={()=> deleteAlert(item)}>
                
                <Image style={styles.image} source={require('../img/trash.png')} />
            
            </TouchableOpacity>
            
            <Text style={styles.date}>{item.date}</Text>

            </View>

        </TouchableOpacity>
    );


    return (
        <SafeAreaView style={{ flex: 1 }}>

            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <FlatList
                    data={props.list}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    style={styles.flatList}
                    ListEmptyComponent={() => {
                        return (
                            <View style={{ 
                                alignItems: 'center', 
                                marginTop: 20, 
                                height: 300,
                                justifyContent: 'center' 
                                }}>
                                <Text style={{ fontSize: 25, marginBottom: 30 }}>Any data not found.</Text>
                                
                                <Button
                                    text={'Add New'}
                                    onPress={() => { 
                                        props.navigation.navigate('AddList')
                                    }}/>
                                </View>
                        )
                    }}
                    initialNumToRender={2}
                />

            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    items: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderWidth: 0.5,
        borderRadius: 10,
        borderColor: 'gray',
        flexDirection: 'row'

    },
    left:{
        flex: 1,

    },
    title: {
        fontSize: 18,
    },
    description: {
        fontSize: 14,
        color: 'gray'
    },
    right:{
        flex: 1,
    
    },
    image:{
        height: 35,
        width: 35,
        resizeMode: 'contain',
        marginLeft: '70%'
    },
    date:{
        marginLeft: '45%',
        marginTop: '30%'
    },
});

const mapStateToProps = ( state ) => {
    const { list, id } = state.listResponse;
    return { list, id };
};
export default connect( mapStateToProps, { getList, updateList, deleteList } )(ListPage);