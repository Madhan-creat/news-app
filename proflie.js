import React, { Component } from 'react';
import { View, Text,StyleSheet,Image, TouchableOpacity,TextInput,KeyboardAvoidingView, ScrollView,Button,Pressable, ImageBackground} from 'react-native';


import { green100 } from 'react-native-paper/lib/typescript/styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Proflie extends Component{
    constructor(props) {
        super(props);
        this.state = {}
        
    }
    
    

    render() {
        return (
            
            <View>
                <ScrollView>
            
            <View style={{justifyContent:'center', alignItems :'center'}}>
                
                <Text>proflie page</Text>
                
                      <TouchableOpacity>
                          
                            <ImageBackground
                                
                                style={{ width: 100, height: 100, }}
                                imageStyle={{borderRadius:25}}
                                source={{ uri: 'https://www.w3schools.com/css/paris.jpg' }}
                                
                            >
                                <Icon name='camera' size={30} style={{padding:30}}/>
               
                            </ImageBackground>
                        </TouchableOpacity>

                        
               
                </View>
                
                <View>
                    <KeyboardAvoidingView
                     behavior={Platform.OS === "andriod" ? "padding" : "height"}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <Icon name="user" size={30} color="#900" style={{padding:7}}/>
                        <TextInput
                            placeholder='First name'
                            placeholderTextColor='#666666'
                            style={styles.TextInput}
                            />
                    </View>
                     <View style={{flex: 1, flexDirection: 'row'}}>
                        <Icon name="user" size={30} color="#900" style={{padding:7}} />
                        <TextInput
                           placeholder='lastname'
                            placeholderTextColor='#666666'
                           style={styles.TextInput}
                          />
                     </View>
                     <View style={{flex: 1, flexDirection: 'row'}}>
                         <Icon name="phone" size={30} color="#900" style={{padding:7}} />
                        <TextInput
                             placeholder='phone'
                             placeholderTextColor='#666666'
                             keyboardType="numeric"
                            style={styles.TextInput}
                            />
                                                    
                             </View>
                     <View style={{flex: 1, flexDirection: 'row'}}>
                         <Icon name="envelope" size={30} color="#900" style={{padding:7}} />
                                        
                        <TextInput
                            placeholder='email'
                            placeholderTextColor='#666666'
                            style={styles.TextInput}
                            keyboardType="email"
                             
                            />
                            </View>
                     <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Icon name="home" size={30} color="#900" style={{padding:7}}/>
                        <TextInput
                            placeholder='addresssss'
                            placeholderTextColor='#666666'
                            style={styles.TextInput}
                                            />
                            </View>
                        </KeyboardAvoidingView>
                        <Button
                            style={{}}
                            title="Press me"
                            color="#900"
                           
                        />
                                            
                       
                  </View>      
                  
                   
                
                
               </ScrollView>
                </View>
        )
    }
}
const styles = StyleSheet.create({
    userimg: {
        height: 150,
        width: 150,
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius:75,
        
    },
    usernam: {
        justifyContent: "center",
        alignContent:"center"
    },
    TextInput: {
        paddingLeft: 30,
        alignContent: 'flex-start',
        
        
        
    }
   
})