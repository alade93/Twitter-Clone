import React from 'react'
import { useStateValue } from './StateProvider/StateProvider'
import Tweet from './Tweet'


function Tweetmap() {
    const [{ userdata }] = useStateValue()
  return (
    <section>
        {
        userdata.map((tweets)=> (   
            <Tweet keys={tweets.id} tweets= {tweets}/>
        ))
        }
    </section>
  )
}

export default Tweetmap