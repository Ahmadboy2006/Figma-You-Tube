import React, { Component } from 'react';
import { Nnavbar, Section, Icons, Search, Avatar} from '../styled';
import avatar from "../Saved-Pictures/profile-avatar.png"

export default class Navbar extends Component {
  render() {
    return (
      <Nnavbar>
        <Section>
          <Icons.Burger/>
          <Icons.Logo/>
        </Section>
        <Section>
          <Search placeholder='Search Movie'></Search>
          <Icons.LogoSearch/>
        </Section>
        <Section>
          <Icons.Camera/>
          <Icons.Cube/>
          <Icons.Bell/>
          <Avatar src={avatar} alt='Bu yerda avatar rasmi bor'></Avatar>
        </Section>
      </Nnavbar>
    )
  }
}
