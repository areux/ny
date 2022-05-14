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

function App() {
  return (
    <div className="App">
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

      <div className="outer">
        <div className='inner z1'>
          <ProgressCircular
            className='wx'
            flat
            color='green'
            rotate={270}
            width={3}
            size={250}
            value={70} />
        </div>
        <div className='inner-circle z2'></div>
        <div className='inner z3'>
          <Avatar
            alt="x"
            size={180}
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
          />
        </div>
        <div className='inner-cc z4'>Score</div>
      </div>

      <H4>Name</H4>
      <Subtitle2>09131231231</Subtitle2>

      <div>
        <FlexRow>
          <FlexCol>
            <H4>6</H4>
            <Subtitle2>Skills</Subtitle2>
          </FlexCol>
          <FlexCol>
            <H4>1 Million</H4>
            <Subtitle2>Income</Subtitle2>
          </FlexCol>
          <FlexCol>
            <H4>1234</H4>
            <Subtitle2>Works</Subtitle2>
          </FlexCol>
        </FlexRow>
      </div>

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
