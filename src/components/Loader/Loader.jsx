import { ThreeDots } from 'react-loader-spinner'
import { LoaderStyle } from './Loader.styled';


export const Loader = ({isLoading}) => {
    return (
        <LoaderStyle>
            <ThreeDots 
            justifyContent="center"
            height="80" 
            width="80" 
            radius="9"
            color="#2596be" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={isLoading}
            />
        </LoaderStyle>
    );
}