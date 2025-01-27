import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks&funcs/redux';
import { RootState } from '../../store/store';
import useWindowDimensions from '../../hooks&funcs/useWindowDimensions';
import MainWrapper from '../../components/PageWrapper/PageWrapper';
import { Content } from './UsersPage.styled';
import CustomInput from '../../components/CustomInput/CustomInput';
import FilterButtonsGroup from '../../components/FilterBtnsGroup/FilterBtnsGroup';
import { UserTypes } from '../../enums/General';
import { IUserData } from '../../store/slices/users/types';
import PaginationButtons from '../../components/PaginationBtns/PaginationBtns';
import ItemCard from '../../components/ItemCard/ItemCard';

const UsersPage = () => {
  const [filters, setFilters] = useState({
    group1: 'All',
    group2: '',
  });
  const [searchValue, setSearchValue] = useState<string>('');
  const [takeValue, setTakehValue] = useState<number>(5);
  const [offsetValue, setOffsetValue] = useState<number>(0);

  const windowSize = useWindowDimensions();
  const listHeight =
    windowSize.height - (75 + 7 + 41 + 41 + 24 + 30 + 38 + 20 + 42 + 20);

  const dispatch = useAppDispatch();

  const { users } = useAppSelector((state: RootState) => state.users);

  const handleGroup1Change = () => setFilters({ group1: 'All', group2: '' });

  const handleGroup2Change = (value: string) =>
    setFilters(prev => ({ ...prev, group1: '', group2: value }));

  const filterButtonsConfig = {
    group1: [
      {
        value: 'All',
        handler: handleGroup1Change,
        isActive: filters.group1 === 'All',
      },
    ],
    group2: [
      {
        value: 'Regular',
        handler: () => handleGroup2Change('Regular'),
        isActive: filters.group2 === 'Regular',
      },
      {
        value: 'Artist',
        handler: () => handleGroup2Change('Artist'),
        isActive: filters.group2 === 'Artist',
      },
    ],
  };

  const filteredUsers = users?.filter(user => {
    const { group1, group2 } = filters;

    if (group1 === 'All') return true;

    if (group2 === 'Regular' && user.type === UserTypes.ARTIST) return false;
    if (group2 === 'Artist' && user.type === UserTypes.REGULAR) return false;

    return true;
  });

  const onSearchValueChanger = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onKeyDownSearchValueHandler = async (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSearchHandler();
    }
  };

  const onSearchHandler = async () => {
    if (searchValue === '') {
      return;
    }
    setOffsetValue(0);
    // await dispatch(
    //   getUsersbyName({
    //     limit: takeValue,
    //     searchValue,
    //     offset,
    //   })
    // );
  };

  const onPrevHandler = async () => {
    let offset = offsetValue - takeValue;
    if (offset <= 0) {
      offset = 0;
    }
    setOffsetValue(offset);

    // await dispatch(
    //   getUsersbyName({
    //     limit: takeValue,
    //     searchValue,
    //     offset,
    //   })
    // );
  };

  const onNextHandler = async () => {
    setOffsetValue(offsetValue + takeValue);
    // await dispatch(
    //   getUsersbyName({
    //     limit: takeValue,
    //     searchValue,
    //     offset,
    //   })
    // );
  };

  const onCardClickHandler = async (id: string) => {
    // await dispatch(
    //   getUserbyId(id)
    // );
  };

  return (
    <MainWrapper title="Users">
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <div style={{ marginRight: '10px' }}>
          <FilterButtonsGroup buttons={filterButtonsConfig.group1} />
        </div>
        <FilterButtonsGroup buttons={filterButtonsConfig.group2} />
      </div>
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <div style={{ marginRight: '10px' }}>
          <CustomInput
            placeholder="Enter search value"
            value={searchValue}
            onChange={onSearchValueChanger}
            onKeyDown={onKeyDownSearchValueHandler}
          />
        </div>
        <PaginationButtons
          onGet={onSearchHandler}
          onPrev={onPrevHandler}
          onNext={onNextHandler}
        />
      </div>
      <Content $maxHeight={listHeight}>
        {filteredUsers?.map((el: IUserData) => (
          <ItemCard key={el.id} dataItem={el} onClick={onCardClickHandler} />
        ))}
      </Content>
    </MainWrapper>
  );
};

export default UsersPage;
