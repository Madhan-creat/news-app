
import React, { Component } from 'react';
import { Text, View, SafeAreaView, FlatList, StyleSheet, ScrollView, Image ,Picker,TouchableOpacity,Button} from 'react-native';
import axios from 'axios';
import { WebView } from 'react-native-webview';
   
export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            currentOpenedUrl: undefined,
            categories:['general','entertainment' ,'health' ,'science' ,'sports' ,'technology','business'],
            selectedCategory: 'general',
            countrys:['ar','at','au','be','bg','br','ca','ch','cn','co','cu','cz','de','eg','fr','gb','gr','hk','hu','id','ie','il','in','it','jp','kr','lt','lv','ma','mx','my','ng','nl','no','nz','ph','pl','pt','ro','rs','ru','sa','se','sg','si','sk','th','tr','tw','ua','us','ve','za'],
            selectedCountry :'us',
        }
    }
        

  //fetching data  
    componentDidMount() {
        axios({
            url: 'https://newsapi.org/v2/top-headlines',
            method: 'GET',
            params: {
                
                apiKey: "9e7f2bff7af74c968b8ffc7c05281db3",
               
            }
        }).then((response) => {
           
           
            this.setState({
                articles: response.data.articles,
            })
        }).catch((error) => {

            console.log(error);
        })
    }
                

    onCountryChange = (country) =>{
        this.setState({
            selectedCountry:country,
        })
      axios({
          url: 'https://newsapi.org/v2/top-headlines',
          method: 'GET',
          params : {
              country: country,
              apiKey: "9e7f2bff7af74c968b8ffc7c05281db3",
              category: this.state.selectedCategory,
          }
        })
        .then((response) => {
                this.setState({
                    articles:response.data.articles
                })
        })
        .catch((error) => {
        console.log(error);
        })
  
    }
    onCategoryChange = (category) =>{
        this.setState({
            selectedCategory:category,
        })
      axios({
          url: 'https://newsapi.org/v2/top-headlines',
          method: 'GET',
          params : {
              country: 'us',
              apiKey: "9e7f2bff7af74c968b8ffc7c05281db3",
              category: category,
          }
        })
        .then((response) => {
                this.setState({
                    articles:response.data.articles
                })
        })
        .catch((error) => {
        console.log(error);
        })
  
    }

    onClick(url) {
        this.setState({
            currentOpenedUrl: url
        })
    }
    
    
        
    renderItem = (arg) => {
        return (
            
            <View style={styles.text}>
                <TouchableOpacity
                 style={styles.button}
                 onPress={() => this.onClick(arg.item.url)}
                >
                <Image source={{ uri: arg.item.urlToImage }} style={{ width: 500, height: 200, backgroundColor: '#000fff' }} />
              </TouchableOpacity>
                
                <Text>{arg.item.title}</Text>
                <Text>Author - {arg.item.author}</Text>
                <Text>{arg.item.publishedAt}</Text>
            </View>
        )
    }

    render() {
     
        if(this.state.currentOpenedUrl) return (
            <WebView
               source={{ uri: this.state.currentOpenedUrl}}
            />
        )
            
        return (
            
            
    
            <View style={styles.container}>
                <View>
                <Picker
					
					
		            selectedValue={this.state.selectedCountry}
					style={{ borderWidth: 2,
                        borderColor: "#b01204",
                        borderRadius: 10,}}
					
					onValueChange ={this.onCountryChange}
				
					>
					{
                        this.state.countrys.map((country,index) => (
                            <Picker.Item label={country} value={country} key={index} />
                        ))
                    }
				</Picker>
                </View>
						<View style={{flexDirection: 'row'}}>
								<ScrollView
									horizontal={true}
									showsHorizontalScrollIndicator={false}>
									{
											this.state.categories.map((categorie, index) => {
												return (
														<View style={styles.button} key={index}>
														

															<Button
																onPress={() => this.onCategoryChange(categorie) }
															title={categorie}
															color={this.state.selectedCategory == categorie ? 'black' : 'pink'}
															/>
														</View>
													);
													
											})
									}
                                 </ScrollView>
                   
						</View>
						<FlatList
							data={this.state.articles}
							renderItem={this.renderItem}
							keyExtractor={article => `${Math.random()}${article.id}`}
                        />
                <View>

                </View>
                </View>
        );
            
                    
                        
            
        
       
      }
               
}

const styles = StyleSheet.create({
    container: {

    },
    text: {
        flex: 1, 
        padding: 5,
        borderWidth: 1,
        borderColor: 'grey',
        margin: 10
	},
	button: {
        padding: 2,
        
    },
   

})