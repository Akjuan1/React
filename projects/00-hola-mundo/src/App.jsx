import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
import React from 'react'

export function App() {
  
  return (
    <section className='App'>

    < TwitterFollowCard 
    
    isFollowing 
    userName= "juancho" 
    name="akjuan1"  />

    < TwitterFollowCard 
     
    isFollowing={false} 
    userName= "pedrolb" 
    name="pedro morales"  />

    < TwitterFollowCard 
   
    isFollowing 
    userName= "mariajk"
    name="maria jimenes"  />

    < TwitterFollowCard 
     
    isFollowing={false} 
    userName= "grabiekd" 
    name="grabierla contreras"  />
    </section>
  )
}

