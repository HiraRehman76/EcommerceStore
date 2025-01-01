
import React from 'react';
import styled from 'styled-components';
import { primaryHeadingColor } from '../utilis/utilisStyle';
import { Input } from 'antd';
const { Search } = Input;

const SearchWrapper = styled(Search)`
  .ant-input-group-wrapper {
    .ant-input-wrapper {
      input { 
        background-color: #F3F3F3;
        color: ${primaryHeadingColor};
        border: unset;
      }
    }

  }
`;

type Props = {
  // chilldren: React.R÷eactNode;
};
const SearchComponent = (props: Props) => {
  return (
    <SearchWrapper
      placeholder={ 'Search...'}
      // prefix={<SearchGlobalIcon />}
      className={`search-field`}
      // onChange={onSearchTextChange}
      // value={searchText}
      // ref={inputRef}
      // onKeyDown={triggerSearch}
      maxLength={50}
  />
  );
}
export default SearchComponent;
