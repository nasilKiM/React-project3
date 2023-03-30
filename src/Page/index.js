import { flexAllCenter } from 'Style/common';
import styled from 'styled-components';
import SearchFeature from './Section/searchFeature';

const LandingPage = () => {

	return (
		<S.Wrapper>
			<img />
			<SearchFeature />
		</S.Wrapper>
	);
};
export default LandingPage;

const Wrapper = styled.div`
	display: flex;
	height: calc(100% - 560px);
	${flexAllCenter};
`;

const S = {
	Wrapper,
};
