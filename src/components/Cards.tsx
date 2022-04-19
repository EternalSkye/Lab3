import React from "react";
import { Card } from 'antd';
import './style/card.css'
const { Meta } = Card;

const Cards: Function = (): JSX.Element[]  => {
    const cardInfo = [
        {alt:"image1", src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Matt_Smith_%28series_7_filming%29.jpg/800px-Matt_Smith_%28series_7_filming%29.jpg", title:"GERONIMO!", description:"none"},
        {alt:"image2", src:"https://upload.wikimedia.org/wikipedia/ru/9/92/Tenth_Doctor.png", title:"Allons-у", description:"none"},
        {alt:"image3", src:"https://upload.wikimedia.org/wikipedia/ru/f/f7/Thirteenth_Doctor.jpg", title:"none", description:"не помню фразу"}];

    const renderCard = (card:any, index:any) => {
        return(
            <Card className="card" hoverable style={{ width: 240 }} key={index}
                cover={<img alt={card.alt} src={card.src} />}>
                <Meta title={card.title} description={card.description} />
            </Card>
        )
    }
    return(cardInfo.map(renderCard));
}

export default Cards;