import React, { useState } from 'react';
import styled from 'styled-components';
// import { useCallback } from 'react';

const SearchFeature = () => {
	const [searchState, setSearchState] = useState('');

	// const delayedQuery = useCallback(
	// 	debounce(q => sendQuery(q), 500),
	// 	[],
	// );

	// const sendQuery = async q => {
	// 	const savedQuery = localStorage.getItem(`${q}`);
	// 	if (JSON.parse(savedQuery)) {
	// 		setSearchState(JSON.parse(savedQuery));
	// 		console.log('캐싱된데이터!');
	// 	} else {
	// 		console.log('newData');
	// 		const data = await getSearchInfos(q);
	// 		setSearchState(data);
	// 	}
	// };

	// useEffect(() => {
	// 	delayedQuery(currentSearch);
	// }, [currentSearch]);

	const onSearch = e => {
		setSearchState(e.currentTarget.value);
	};

	return (
		<Wrapper>
			<Search
				placeholder="검색어를 입력해주세요"
				onSearch={value => console.log(value)}
				value={searchState}
			/>
			<SearchResult></SearchResult>
		</Wrapper>
	);
};

export default SearchFeature;

const Wrapper = styled.div`
	width: 100%;
	position: relative;
`;

const Search = styled.input`
	width: auto;
	min-width: 584px;
	height: 45px;
	display: flex;
	position: absolute;
	justify-content: center;
	//focus 되었을 때, border 없애기
	border: 1px solid darkgray;
	border-radius: 24px;
	box-shadow: none;
`;

const SearchResult = styled.div`
	position: absolute;
	width: auto;
	min-width: 584px;
	height: 500px;
	border: 1px solid darkgrey;
	border-radius: 24px;
	box-shadow: none;
`;
