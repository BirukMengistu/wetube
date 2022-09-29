import React, { useState } from 'react';
import styled from 'styled-components';
import { BsSearch , BsFillMicFill } from 'react-icons/bs';

import logo from '../components/logo.svg';

export const SearchBar = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState('');

  const handleFilter = (event) => {
    const searchTrem = event.target.value;
    setWordEntered(searchTrem);
 

    const newFilter = data.filter((value) => {
      return value.videoName.toLowerCase().includes(searchTrem.toLowerCase());
    });

    if (searchTrem === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  return (
    <Contianer>
      <InnerContianer>
        <InputContainer>
          <Logo src={logo} ></Logo>
          <Input
            type='text'
            value={wordEntered}
            placeholder={placeholder}
            onChange={handleFilter}
          />
          <Button>
            <BsSearch fill='white' />
          </Button>
          <Button style={{marginLeft:'0.6em' , borderRadius :'25px'}}>
            <BsFillMicFill color="white"   />
          </Button>
       
        </InputContainer>

        {filteredData.length !== 0 && (
          <DataResult>
            {filteredData.map((value) => {
              return (
                <a href={value.videoId}>
                  <DataItem>{value.videoName}</DataItem>
                </a>
              );
            })}
          </DataResult>
        )}


      </InnerContianer>
    </Contianer>
  );
};

export default SearchBar;

export const Contianer = styled.header`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: auto;
  background-color: var(--background-medium);
`;

export const InnerContianer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0;
  padding-top: 0;
  padding-bottom: 10px;
`;

const Input = styled.input`
  font-size: 18px;
  padding: 7px 0 7px 7px;
  margin: 0;
  margin-left: 4.8rem;
  margin-top: 0;
  width: 40%;
  background: #FCCB1D;
  border: solid 1px #FDE58C;
  border-radius: 3px 0 0 3px;
  box-shadow: none;
  ::placeholder {
    color: rgb(136, 136, 136);
  }
`;

export const InputContainer = styled.div`
  displey: flex;
  flex-direction: row;
  margin-top: 0;
  padding-top: 0;
`;

export const Button = styled.button`
background: #FCCB1D;;
  border: none;
  color: white;
  padding: 9px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 0 3px 3px 0;
`;

export const DataResult = styled.div`
  margin-top: 5px;
  width: 40%;
  height: 100px;
  overflow: hidden;
  overflow-y: auto;
  background-color: white;
`;

export const DataItem = styled.p`
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
  color: black;
`;


const Logo = styled.img`
  width: 120px;
  height: 30px;
  padding: 10px 14px 0 30px;
  filter: invert();
  color:red;
  margin-bottom: 0;
  padding-right: 60px;
`;
