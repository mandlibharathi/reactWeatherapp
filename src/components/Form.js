import React ,{Component} from 'react'

const  Form = props =>(
           <form  onSubmit={props.getWeather}>
               
               <input type='text' name='city' placeholder='city..'/>
               <input type='text' name='country' placeholder="Country" />
    <button class="btn btn-danger">Getwether</button>
           </form>
        )
    

export default Form