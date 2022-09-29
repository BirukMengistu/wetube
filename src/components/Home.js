import React from 'react';

import styled from 'styled-components';
import { SideBar } from './SideBar';
import Card from './Card'

const Home = ({ data }) => {
  

  return (
    <>
      <Contianer>
        <SideBar />
        <MainContianer>
       
          <VideoContianer>
            {data.map((video, key) => ( 
              <Card video ={ video} key={key}/>
            ))}
          </VideoContianer>
        </MainContianer>
      </Contianer>
    </>
  );
};

export default Home;

export const Contianer = styled.div`
  width: vw;
  display: flex;
  flex-direction: row;
`;

export const MainContianer = styled.div`
  width: vw;
  display: flex;
  flex-direction: column;
`;

export const VideoContianer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
  padding: 2rem;
  background-color: var(--background);
`;

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Thumbnail = styled.img`
  width: 48px;
  border-radius: 50%;
`;

export const InnerContianer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Left = styled.div`
  margin-top: 1rem;
`;

export const Right = styled.div`
  margin-left: 1rem;
`;

export const VideoName = styled.p`
  color: var(--text-primary);
  font-size: 14px;
`;

export const Views = styled.p`
  color: var(--text-secondary);
  font-size: 12px;
`;

export const ViewsContianer = styled.div`
  display: flex;
  flex-direction: row;
  // margin-left: 1rem;
`;

export const Link = styled.a`
  text-decoration: none;
`;
