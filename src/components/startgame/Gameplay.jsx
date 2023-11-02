import styled from 'styled-components';
import TotalScore from './TotalScore';
import NumberSelect from './NumberSelect';
import RollDice from './RollDice';

const Gameplay = () => {
  return (
    <>
      <MainContainer>
        <div className="topSection">
          <TotalScore />
          <NumberSelect />
        </div>
        <RollDice />

      </MainContainer>
    </>
  );
};

export default Gameplay;

const MainContainer = styled.main`
padding-top:70px;
  .topSection {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
