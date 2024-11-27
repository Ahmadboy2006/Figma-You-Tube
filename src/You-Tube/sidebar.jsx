import React, { Component } from 'react';
import { Ssidebar, SideBox, SidebarBox, Data1, Data2, Data3, SideImg, Line, IconBox, IconName, Subscriptions } from '../styled';

export default class Sidebar extends Component {
  constructor (props) {
    super (props);
    this.state = {
      selectedId1: null,
      selectedId2: null,
      selectedId3: null
    }
  }

  render() {
    return (
      <Ssidebar>
        <SideBox>
          {Data1.map((item)=>(
            <SidebarBox 
              isSelected={this.state.selectedId1 === item.id} 
              onClick={() => this.setState({selectedId1: item.id,selectedId2: null,selectedId3: null})} 
              key={item.id}
            >
              <IconBox>{item.icon}</IconBox>
              <IconName>{item.name}</IconName>
            </SidebarBox>
          ))}
        </SideBox>
        <Line></Line>
        <SideBox>
          {Data2.map((item)=>(
            <SidebarBox 
              isSelected={this.state.selectedId2 === item.id} 
              onClick={() => this.setState({selectedId2: item.id,selectedId1: null,selectedId3: null})} 
              key={item.id}
            >
              <IconBox>{item.icon}</IconBox>
              <IconName>{item.name}</IconName>
            </SidebarBox>
          ))}
        </SideBox>
        <Line></Line>
        <SideBox bottom>
          <Subscriptions>Subscription</Subscriptions>
          {Data3.map((item)=>(
            <SidebarBox 
              isSelected={this.state.selectedId3 === item.id} 
              onClick={() => this.setState({selectedId3: item.id,selectedId1: null,selectedId2: null})} 
              key={item.id}
            >
              <IconBox><SideImg src={item.icon}></SideImg></IconBox>
              <IconName>{item.name}</IconName>
            </SidebarBox>
          ))}
        </SideBox>
        <Line></Line>
      </Ssidebar>
    )
  }
}
