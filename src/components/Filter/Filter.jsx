import { useDispatch } from 'react-redux';
import { filterReduser } from 'redux/filterSlice';
import { InputName, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(filterReduser(e.currentTarget.value));
  };

  return (
    <>
      <InputName>Find contacts by name</InputName>
      <Input type="text" onChange={onChangeFilter} />
    </>
  );
};
