import React, { Component } from 'react';
import { Ccontent, ContentBar, BarItems, Data4, CardsContainer, ContentCard, CardImg, CardContainer, MinAvatarBox, CardTitleBox, AvatarImg, CardTitle, ChannelName, Data5 } from '../styled';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: null,
    }
  }

  render() {
    return (
      <Ccontent>
        <ContentBar>
          {Data4.map((item) => (
            <BarItems
              key={item.id}
              isSelectedNav={this.state.selectedId === item.id}
              onClick={() => this.setState({ selectedId: item.id })}>
              {item.name}
            </BarItems>
          ))}
        </ContentBar>
        <CardsContainer>
          {Data5.map((item) => (
            <ContentCard key={item.id}>
              <CardImg src={item.img}></CardImg>
              <CardContainer>
                <MinAvatarBox>
                  <AvatarImg src={item.img1}></AvatarImg>
                </MinAvatarBox>
                <CardTitleBox>
                  <CardTitle>{item.name}</CardTitle>
                  <ChannelName>{item.name1}</ChannelName>
                  <ChannelName>{item.views} Views * {item.times} Ago</ChannelName>
                </CardTitleBox>
              </CardContainer>
            </ContentCard>
          ))}
        </CardsContainer>
      </Ccontent>
    )
  }
}

