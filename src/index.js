import React,{ Component } from 'react';
import {Container,Header,Title,Content,Footer,FooterTab,Button,Left,Right,Body,Icon,Text} from 'native-base';

export default class NAtiveExample extends Component{
  render(){
    return(
      <Container>
        <Header>
          <Left>
            <Button>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>
              Header
            </Title>
            <Right/>
          </Body>
        </Header>
        <Content>
          <Text>Native Base Examle</Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>
                Footer
              </Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
