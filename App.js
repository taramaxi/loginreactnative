import React,{Component} from 'react';
import { WebView,Alert,StyleSheet, Text, View , ImageBackground,Image, TextInput, Dimensions,TouchableOpacity } from 'react-native';

import bgImage from './image/BGHENDZ.jpg'
import logo from './image/logo_smakhendrikus.png'
import Icon from 'react-native-vector-icons/Ionicons'
import WebViewExample from './web_view.js'

const{width: WIDHT} = Dimensions.get('window')
export default class Example extends Component {

  constructor(){
    super()
    this.state = {
      showPass: true,
      press:false,
      username:'',
      password:''

    }
  }

  showPass =() =>{
    if(this.state.press == false){
      this.setState({showPass:false,press:true})
    }else{
      this.setState({showPass:true,press:false})
    }
  }

  _onPressLogin = () =>{
      if(this.state.username=='admin') {
          Alert.alert("Login success!") 
          this.setState({ username: '' })
          this.setState({ password: '' })

      }else{
          Alert.alert("Login failed")
          this.setState({password:''})
      }
  } 

  

  render(){
  return (
    <ImageBackground source={bgImage} style={styles.backgroundContainer}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo}/>
        <Text style={styles.logoText}> Login SIM Hendrikus</Text>
      </View>

      <View style={styles.inputContainer}>
        <Icon name={'ios-person'} size={28} color={'rgba(255,255,255,0.7)'} style={styles.inputIcon}/>
        <TextInput
          style={styles.input}
          placeholder={'Username'}
          value={this.state.username} onChangeText={(text) => this.setState({ username:text })}
          placeholderTextColor={'rgba(255,255,255,0.7)'}
          underLineColorAndroid='transparent'
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name={'ios-lock'} size={28} color={'rgba(255,255,255,0.7)'} style={styles.inputIcon}/>
        <TextInput
          style={styles.input}
          placeholder={'Password'}
          value={this.state.password} secureTextEntry={this.state.showPass} 
          onChangeText={(text) => this.setState({ password: text })}
          placeholderTextColor={'rgba(255,255,255,0.7)'}
          underLineColorAndroid='transparent'
        />
        
        <TouchableOpacity style={styles.btnEye} onPress={this.showPass.bind(this)}> 
          <Icon name={this.state.press == false ? 'ios-eye' :'ios-eye'} size={26} color={'rgba(255,255,255,0.7)'}/>
        </TouchableOpacity>
        
      </View>

      <TouchableOpacity style={styles.btnLogin} onPress={this._onPressLogin}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>

        

    </ImageBackground>
  );
}
}

const styles = StyleSheet.create({
  container: {
    height: 350,
 },
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems:'center',
    marginBottom: 50
  },
  logo:{
    width:120,
    height:120
  },
  logoText: {
    color :'white',
    fontSize : 20,
    fontWeight : '500',
    marginTop: 10,
    opacity : 0.5

  },
  inputContainer:{
    marginTop:10
  },
  input:{
    width:WIDHT - 55,
    height : 45,
    borderRadius: 25,
    fontSize: 12,
    paddingLeft :45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color:'rgba(255,255,255,0.7)',
    marginHorizontal:25
  },
  inputIcon: {
    position:'absolute',
    top:8,
    left:37
  },
  btnEye: {
    position:'absolute',
    top:8,
    right:37
  },
  btnLogin:{
    width:WIDHT - 55,
    height : 45,
    borderRadius: 25,
    backgroundColor:'#432577',
    justifyContent:'center',
    marginTop:20
  },
  btnWeb:{
    width:WIDHT - 70,
    height : 45,
    borderRadius: 25,
    backgroundColor:'#432577',
    justifyContent:'center',
    marginTop:20
  },
  text:{
    color:'rgba(255,255,255,0.7)',
    fontSize:16,
    textAlign:'center'
  }
});
