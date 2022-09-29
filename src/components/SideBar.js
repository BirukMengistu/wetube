import React from 'react';
import styled from 'styled-components';
import { GrHomeRounded } from 'react-icons/gr';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import {
  MdOutlineExplore,
  MdOutlineSubscriptions,
  MdOutlinePhotoLibrary,
  MdVideoSettings,
  MdOutlineWatchLater,
} from 'react-icons/md';
import { AiOutlineYoutube, AiOutlineLike } from 'react-icons/ai';
import { BiHistory } from 'react-icons/bi';

export const SideBar = () => {
  const sizeValue = 14*2;

  return (
    <SideBarContianer>
      <IconContianer>
        <GrHomeRounded size={sizeValue} fill='#C19803' />
        <Text>Home</Text>
      </IconContianer>
      <IconContianer>
        <MdOutlineExplore size={sizeValue} fill='#C19803' />
        <Text>Explore</Text>
      </IconContianer>
      <IconContianer>
        <MdOutlineSubscriptions  size={sizeValue} fill='#C19803' />
        <Text>Subscriptions</Text>
      </IconContianer>
      <IconContianer>
        <AiOutlineYoutube  size={sizeValue}fill='#C19803' />
        <Text>Channel</Text>
      </IconContianer>
      <Line></Line>
      <IconContianer>
        <MdOutlinePhotoLibrary size={sizeValue}  fill='#C19803' />
        <Text>Library</Text>
      </IconContianer>
      <IconContianer>
        <BiHistory size={sizeValue} fill='#C19803' />
        <Text>History</Text>
      </IconContianer>
      <IconContianer>
        <MdVideoSettings size={sizeValue} fill='#C19803' />
        <Text>Your videos</Text>
      </IconContianer>
      <IconContianer>
        <MdOutlineWatchLater size={sizeValue} fill='#C19803' />
        <Text>Watch later</Text>
      </IconContianer>
      <IconContianer>
        <AiOutlineLike  size={sizeValue} fill='#C19803' />
        <Text>Liked videos</Text>
      </IconContianer>
      <Line></Line>
      <TitleText>SUBSCRIPTIONS</TitleText>
      <IconContianer>
        <Text>Masha and the bear</Text>
      </IconContianer>
      <IconContianer>
        <Text>Barnplaneten</Text>
      </IconContianer>
      <IconContianer>
        <AiOutlinePlusCircle size={sizeValue} fill='#C19803' />
        <Text>Browse channels</Text>
      </IconContianer>
    </SideBarContianer>
  );
};

export const SideBarContianer = styled.section`
  height: 100wh;
  width: 30%;
  background-color: var(--background-medium);
`;

export const IconContianer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 1rem;
  :hover {
    background-color: var(--text-secondary);
  }
`;

export const Text = styled.p`
  color: var(--text-primary);
  display: flex;
  margin: 0;
  padding-left: 1rem;
`;

export const TitleText = styled.p`
  color: var(--text-primary);
  display: flex;
  margin: 0;
  padding-left: 2rem;
  padding-top: 1rem;
`;

export const Line = styled.div`
  border-bottom: solid 1px var(--text-secondary);
`;
