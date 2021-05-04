import React from 'react'
import {v4 as uuidv4} from 'uuid'

import './style.css'
import UserFunctionalComponent from '../../components/UserFunctionalComponent'
import UserClassComponent from '../../components/UserClassComponent'
import CountClassComponent from '../../components/CountClassComponent'
import Clock from '../../components/ClockClassComponent'
import PostClassComponent from '../../components/PostClassComponent'


const postList = [
    {
        id: uuidv4(),
        author: 'Giang',
        content: 'Sao cung duoc :v',
        isClicked: false
    },
    {
        id: uuidv4(),
        author: 'Khải',
        content: 'Vẻ bề ngoài quan trọng đến thế à, còn ví anh thì sao... dỗi',
        isClicked: false
    },
    {
        id: uuidv4(),
        author: 'Tiên',
        content: 'Hôm nay ăn mì',
        isClicked: false
    },
]

class HomePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            posts: postList
        }
    }

    render() {
        return (
            <div className="home-page">
                {/* <UserFunctionalComponent name='Hieu' age={18} gender='male' />
                <UserClassComponent name='Khoa' age={25} gender="male" />
                <CountClassComponent />
                <Clock /> */}
                {this.state.posts.map(post=> <PostClassComponent {...post}  />)}
            </div>
        )
    }
}

export default HomePage