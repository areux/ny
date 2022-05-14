import logo from './logo.svg';
import './App.css';
import { Subtitle2, H4, H6, Button, Avatar, IconButton, ProgressCircular } from 'ui-neumorphism';
import 'ui-neumorphism/dist/index.css';
import Icon from '@mdi/react';
import { mdiHome, mdiPagePrevious, mdiBellBadge, mdiBellBadgeOutline, mdiChevronLeft, mdiViewList } from '@mdi/js';
import styled from 'styled-components';

const FlexRow = styled.div({
  display: 'flex',
  gap: '40px',
  'margin-top': '30px',
  flexDirection: 'row',
  justifyContent: 'center',
});

const FlexCol = styled.div({
  display: 'flex',
  gap: '10px',
  'margin-top': '30px',
  flexDirection: 'column',
  justifyContent: 'center',
});

const Header = styled.div({
  display: 'flex',
  gap: '20px',
  flexDirection: 'row',
  justifyContent: 'space-between',
});
const HeaderRightSide = styled.div({
  display: 'flex',
  gap: '10px',
  flexDirection: 'row',
  justifyContent: 'center',
});

const Spacer = styled.div({
  width: '40px',
});

function XHeader() {
  return (
    <Header>
      <IconButton rounded text={false} size="large">
        <Icon path={mdiChevronLeft} size={1} />
      </IconButton>
      <HeaderRightSide>
        <IconButton rounded text={false} size="large">
          <Icon path={mdiViewList} size={1} />
        </IconButton>
        <IconButton rounded text={false} size="large">
          <Icon path={mdiBellBadge} size={1} />
        </IconButton>
      </HeaderRightSide>
    </Header>
  );
}

function XUserPrev(props) {
  return (
    <div>
      <H4>{props.name}</H4>
      <Subtitle2>{props.phone}</Subtitle2>
    </div>
  );
}

function XAvatar(props) {
  return (
    <div className="outer">
      <div className='inner z1'>
        <ProgressCircular
          className='wx'
          flat
          color='green'
          rotate={270}
          width={3}
          size={250}
          value={props.user.score} />
      </div>
      <div className='inner-circle z2'></div>
      <div className='inner z3'>
        <Avatar
          alt="x"
          size={180}
          src={props.user.src}
        />
      </div>
      <div className='inner-cc z4'>Score</div>
    </div>
  );
}

function XStats(props) {
  return (
    <div>
      <FlexRow>
        <FlexCol>
          <H4>{props.skills}</H4>
          <Subtitle2>Skills</Subtitle2>
        </FlexCol>
        <FlexCol>
          <H4>{props.income / (1000 * 1000)} Million</H4>
          <Subtitle2>Income</Subtitle2>
        </FlexCol>
        <FlexCol>
          <H4>{props.works}</H4>
          <Subtitle2>Works</Subtitle2>
        </FlexCol>
      </FlexRow>
    </div>
  );
}

class User {
  constructor(score, src) {
    this.score = score;
    this.src = src;
  }
}

function App() {
  const user = new User(70, "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp");
  return (
    <div className="App">
      <XHeader />
      <XAvatar
        user={user}
      />
      <XUserPrev name="Mehdi" phone="09131231231" />
      <XStats skills={6} income={1000000} works={1234} />

      <FlexRow>
        <Button text size='large'>Change Profile</Button>
        <Button
          rounded
          size='large'
          color="white"
          bgColor="green"
        >Job Report</Button>
      </FlexRow>

    </div>
  );
}

export default App;
