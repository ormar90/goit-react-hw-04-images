import { Formik } from 'formik';
import { SearchbarHeader, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
    const handleSubmit = (values, active) => {
        onSubmit(values);
        active.resetForm();    
    }

    return (
        <SearchbarHeader>
            <Formik
                initialValues={{
                    value: '',
                }}
                onSubmit={handleSubmit} >
                <SearchForm>
                    <SearchFormButton type="submit">
                        <SearchFormButtonLabel>Search</SearchFormButtonLabel>
                    </SearchFormButton>

                    <SearchFormInput
                        type="text"
                        name="value"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </SearchForm>
            </Formik>
        </SearchbarHeader>
    );
}
